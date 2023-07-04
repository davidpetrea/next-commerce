"use client";

import CustomPagination from "@components/common/Pagination";
import { Game, getGoldOffers } from "@lib/supabase";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import OffersSkeleton from "./loading/OffersSkeleton";
import OfferItem from "./OfferItem";

const PAGE_SIZE = 3;

const GoldOffers = ({
  game,
  searchParams,
}: {
  game: Game;
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const factionSearch = searchParams?.faction ?? "";
  const regionSearch = searchParams?.region ?? "eu";
  const pageSearch = searchParams?.page ?? "";
  const serverSearch = searchParams?.server ?? "";

  const faction = Array.isArray(factionSearch)
    ? factionSearch[0]
    : factionSearch;
  const region = Array.isArray(regionSearch) ? regionSearch[0] : regionSearch;
  const server = Array.isArray(serverSearch) ? serverSearch[0] : serverSearch;
  const page = Array.isArray(pageSearch) ? +pageSearch[0] : +pageSearch;

  const {
    data: queryData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["offers", faction, region, server, page],
    queryFn: () =>
      getGoldOffers({
        gameId: game.id,
        faction,
        region,
        server,
        serverList: game.servers,
        page,
        pageSize: PAGE_SIZE,
      }),
    staleTime: Infinity,
  });

  if (isLoading) {
    return <OffersSkeleton />;
  }

  if (error) {
    return <div>Something went wrong. Please try refreshing the page.</div>;
  }

  if (queryData) {
    const { data: offers, count } = queryData;
    return (
      <>
        {offers && offers.length > 0 ? (
          <div className="flex flex-col gap-2 my-4">
            {offers.map((offer) => (
              <OfferItem key={offer.offer_id} offer={offer} game={game} />
            ))}
          </div>
        ) : (
          <div className="my-24 text-center">
            No offers matching your filters were found. Try again later.
          </div>
        )}
        {/* Pagination */}
        {count && count > PAGE_SIZE ? (
          <div className="my-4">
            <CustomPagination
              count={Math.ceil(count / PAGE_SIZE)}
              page={page === 0 ? 1 : page}
            />
          </div>
        ) : null}
      </>
    );
  }
};

export default GoldOffers;
