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

// export async function getGoldOffers(
//   gameId: string,
//   region: string,
//   faction: string
// ) {
//   const { data, error } = await supabase
//     .from("gold_offers")
//     .select("*, user:users(id,name,avatar_url), server_name:servers(name)")
//     .eq("game_id", gameId)
//     .eq("region", region)
//     .eq("faction", faction);

//   return { data, error };
// }

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

type UsersResponse = Awaited<ReturnType<typeof getUserById>>;
export type UsersResponseSuccess = UsersResponse["data"];
export type UsersResponseError = UsersResponse["error"];

export type User = ElementType<UsersResponseSuccess>;

type GamesResponse = Awaited<ReturnType<typeof getGames>>;
export type GamesResponseSuccess = GamesResponse["data"];
export type Game = ElementType<GamesResponseSuccess>;

type GoldOffersResponse = Awaited<ReturnType<typeof getGoldOffers>>;
export type GoldOffersResponseSuccess = GoldOffersResponse["data"] & {
  server: number;
};

export type Offer = ElementType<GoldOffersResponseSuccess>;
