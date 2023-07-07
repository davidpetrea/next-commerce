import { createClient } from "@supabase/supabase-js";
import { Database } from "./schema";
import { getPagination } from "@utils/utils";

export type ElementType<T> = T extends (infer U)[] ? U : never;

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    db: {
      schema: "public",
    },
  }
);

export async function getUserById(userId: string) {
  const { data, error } = await supabase
    .from("users")
    .select("id,name,avatar_url")
    .eq("id", userId)
    .limit(1);
  return { data, error };
}

export async function getGames() {
  const { data, error } = await supabase
    .from("games")
    .select(
      "id, name, path, tags, bg_img_url, products (id, name, details, price, tags, image_url,path, sale_price), servers (id,name,region)"
    );

  return { data, error };
}

export async function getGoldOffers({
  gameId,
  region,
  faction,
  server,
  serverList,
  page,
  pageSize = 3,
}: {
  gameId: string;
  region?: string;
  faction?: string;
  server?: string;
  serverList?: Game["servers"];
  page?: number;
  pageSize?: number;
}) {
  //get server id
  let serverId = server
    ? serverList?.filter(
        (serverOption) =>
          serverOption.name.replaceAll(" ", "").trim() === server.split("-")[0]
      )
    : undefined;
  const { from, to } = getPagination(page, pageSize);
  let query = supabase
    .from("gold_offers")
    .select(
      "*, user:users(id,name,avatar_url), server_name:servers(name,region)",
      {
        count: "exact",
      }
    )
    .eq("game_id", gameId);

  if (region) {
    query = query.eq("region", region);
  }
  if (faction) {
    query = query.eq("faction", faction);
  }
  if (serverId) {
    query = query.eq("server", serverId[0].id);
  }

  const { data, count } = await query.range(from, to);
  return { data, count };
}

export async function getGoldOfferById({ offerId }: { offerId: string }) {
  const { data } = await supabase
    .from("gold_offers")
    .select(
      "*, user:users(id,name,avatar_url), server_name:servers(name,region), game:games(id,name)"
    )
    .eq("offer_id", offerId)
    .limit(1)
    .single();

  return data;
}

export async function addItemToCartAuth({
  userId,
  productId,
  offerId,
  sellerId,
  quantity,
  price,
}: {
  userId: string;
  productId?: string;
  offerId?: string;
  sellerId: string;
  quantity?: number;
  price: number;
}) {
  const { data } = await supabase
    .from("cart_items_auth")
    .insert({
      user_id: userId,
      product_id: productId ?? null,
      gold_offer_id: offerId ?? null,
      seller_id: sellerId,
      quantity: quantity ?? null,
      total_price: price,
    })
    .select()
    .single();

  return data;
}

//TODO: add item to cart guest

//TODO:get reviews by user

type UsersResponse = Awaited<ReturnType<typeof getUserById>>;
export type UsersResponseSuccess = UsersResponse["data"];
export type UsersResponseError = UsersResponse["error"];

export type User = ElementType<UsersResponseSuccess>;

type GamesResponse = Awaited<ReturnType<typeof getGames>>;
export type GamesResponseSuccess = GamesResponse["data"];
export type Game = ElementType<GamesResponseSuccess>;

type GoldOffersResponse = Awaited<ReturnType<typeof getGoldOffers>>;
export type GoldOffersResponseSuccess = GoldOffersResponse["data"];

export type Offer = ElementType<GoldOffersResponseSuccess>;

export type OfferExtended = NonNullable<
  Awaited<ReturnType<typeof getGoldOfferById>>
>;

//TODO: GuestCartItems
