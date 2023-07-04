import { Game } from "@lib/supabase";

import React from "react";
import WowGoldFilters from "./WowGoldFilters";
import GoldOffers from "./GoldOffers";

export default async function GoldOffersContainer({
  game,
  searchParams,
}: {
  game: Game;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const factionSearch = searchParams?.faction ?? "";
  const regionSearch = searchParams?.region ?? "eu";

  const faction = Array.isArray(factionSearch)
    ? factionSearch[0]
    : factionSearch;
  const region = Array.isArray(regionSearch) ? regionSearch[0] : regionSearch;

  return (
    <div>
      <div className="p-4" />
      <WowGoldFilters
        region={region}
        faction={faction}
        serverOptions={game.servers
          .filter((server) => server.region === region)
          .map(
            (server) =>
              `${
                server.name.charAt(0).toUpperCase() + server.name.slice(1)
              } - ${server.region.toLocaleUpperCase()}`
          )}
      />
      {/* Offers container */}
      <GoldOffers game={game} searchParams={searchParams} />
    </div>
  );
}
