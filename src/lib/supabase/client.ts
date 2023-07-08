import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./schema";
import { ElementType } from "./index";

type Tables = Database["public"]["Tables"];

type UsersTable = Tables["users"]["Row"];
type UserCartItemsTable = Tables["cart_items_auth"]["Row"];
type ProductsTable = Tables["products"]["Row"];
type GamesTable = Tables["games"]["Row"];
type OffersTable = Tables["gold_offers"]["Row"];
type ServersTable = Tables["servers"]["Row"];

export const supabase = createClientComponentClient<Database>();

export async function getGoldOffers(
  gameId: string,
  region: string,
  faction: string
) {
  const { data } = await supabase
    .from("gold_offers")
    .select("*, user:users(id,name,avatar_url)")
    .eq("game_id", gameId)
    .eq("region", region)
    .eq("faction", faction);

  return data;
}

export async function getCartItemsByUser({ userId }: { userId: string }) {
  const { data } = await supabase
    .from("cart_items_auth")
    .select(
      `*,
      product:products(id,name,game:games(id,path),image_url,path),
      offer:gold_offers(offer_id, faction, server:servers(name,region)),
      seller:users!seller_id(name)`
    )
    .eq("user_id", userId)
    .returns<UserCartItem[]>();

  return data;
}

export async function validatePromoCode({ code }: { code: string }) {
  const { data, error } = await supabase
    .from("promo_codes")
    .select("*")
    .eq("code", code)
    .single();

  if (!data || error) throw new Error("Invalid promo code.");

  return data;
}

export async function addItemToCartAuth({
  userId,
  productId,
  offerId,
  sellerId,
  quantity,
  price,
  meta,
}: AddItemToCartAuthParams) {
  const { data, error } = await supabase
    .from("cart_items_auth")
    .insert({
      user_id: userId,
      product_id: productId,
      gold_offer_id: offerId,
      seller_id: sellerId,
      quantity: quantity,
      total_price: price,
      meta: meta,
    })
    .select(
      `*,
      product:products(id,name,game:games(id,path),image_url,path),
      offer:gold_offers(offer_id, faction, server:servers(name,region)),
      seller:users!seller_id(name)`
    )
    .returns<UserCartItem[]>();

  if (!data || error) throw new Error("Error adding item to cart.");

  return data;
}

//TODO: make sure only current user can remove/add items from cart
export async function removeItemFromCartAuth({
  cartItemId,
}: {
  cartItemId: string;
}) {
  await supabase
    .from("cart_items_auth")
    .delete()
    .eq("cart_item_id", cartItemId);
}

type GoldOffersResponse = Awaited<ReturnType<typeof getGoldOffers>>;

export type Offer = ElementType<GoldOffersResponse>;

export type CartItemMeta = {
  character?: string;
};

//This type is necessary because of seller[] type inference
export type UserCartItem = UserCartItemsTable & {
  product: {
    id: ProductsTable["id"];
    name: ProductsTable["name"];
    game: {
      id: GamesTable["id"];
      path: GamesTable["path"];
    };
    image_url: ProductsTable["image_url"];
    path: ProductsTable["path"];
  };
  offer: {
    offer_id: OffersTable["offer_id"];
    faction: OffersTable["faction"];
    server: {
      name: ServersTable["name"];
      region: ServersTable["region"];
    };
  };
  seller: {
    name: UsersTable["name"];
  };
};

export type AddItemToCartAuthParams = {
  userId: string;
  productId: string;
  offerId?: string;
  sellerId: string;
  quantity?: number;
  price: number;
  meta?: CartItemMeta;
};
