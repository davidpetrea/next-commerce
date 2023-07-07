import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./schema";
import { ElementType } from "./index";

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
      seller:seller_id(name)`
    )
    .eq("user_id", userId);

  return data;
}
type GoldOffersResponse = Awaited<ReturnType<typeof getGoldOffers>>;

export type Offer = ElementType<GoldOffersResponse>;

export type UserCartItems = NonNullable<
  Awaited<ReturnType<typeof getCartItemsByUser>>
>;

export type UserCartItem = Omit<ElementType<UserCartItems>, "seller"> & {
  seller: {
    name: string; //Overwrite false refering error
  };
}; //TODO: find cleaner solution for product field typing
