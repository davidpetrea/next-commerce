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
    .select("*")
    .eq("user_id", userId);

  return data;
}
type GoldOffersResponse = Awaited<ReturnType<typeof getGoldOffers>>;

export type Offer = ElementType<GoldOffersResponse>;

export type UserCartItems = NonNullable<
  Awaited<ReturnType<typeof getCartItemsByUser>>
>;

export type UserCartItem = ElementType<UserCartItems>;
