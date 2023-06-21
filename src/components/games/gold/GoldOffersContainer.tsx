import { Game, Offer, supabase } from '@lib/supabase';

import Image from 'next/image';
import React from 'react';
import WowGoldFilters from './WowGoldFilters';
import Link from 'next/link';
import Pagination from '@components/common/Pagination';

const PAGE_SIZE = 3;

const getPagination = (page: number = 1, size: number) => {
  const limit = size ? +size : 3;
  const from = page === 1 ? 0 : page * limit - limit;
  const to = page ? from + size - 1 : size - 1;
  return { from, to };
};

const getGoldOffers = async ({
  gameId,
  region,
  faction,
  page,
}: {
  gameId: string;
  region?: string;
  faction?: string;
  page?: number;
}) => {
  const { from, to } = getPagination(page, PAGE_SIZE);
  let query = supabase
    .from('gold_offers')
    .select('*, user:users(id,name,avatar_url), server_name:servers(name)', {
      count: 'exact',
    })
    .eq('game_id', gameId);

  if (region) {
    query = query.eq('region', region);
  }
  if (faction) {
    query = query.eq('faction', faction);
  }
  const { data, count, error } = await query.range(from, to);

  return { data, count, error };
};

export default async function GoldOffersContainer({
  game,
  searchParams,
}: {
  game: Game;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const factionSearch = searchParams?.faction ?? '';
  const regionSearch = searchParams?.region ?? 'eu';
  const pageSearch = searchParams?.page ?? '';

  const faction = Array.isArray(factionSearch)
    ? factionSearch[0]
    : factionSearch;

  const region = Array.isArray(regionSearch) ? regionSearch[0] : regionSearch;

  const page = Array.isArray(pageSearch) ? +pageSearch[0] : +pageSearch;

  const {
    data: offers,
    count,
    error,
  } = await getGoldOffers({
    gameId: game.id,
    faction,
    region,
    page,
  });

  if (error) {
    return <div>Something went wrong.</div>;
  }

  if (offers) {
    return (
      <div>
        <div className='p-4' />
        <WowGoldFilters
          region={region}
          faction={faction}
          serverOptions={game.servers.map(
            (server) => `${server.name} - ${server.region.toLocaleUpperCase()}`
          )}
        />
        {/* Offers container */}
        {offers.length > 0 ? (
          <div className='flex flex-col gap-2 my-4'>
            {offers.map((offer) => (
              <OfferItem key={offer.offer_id} offer={offer} game={game} />
            ))}
          </div>
        ) : (
          <div className='my-24 text-center'>
            No offers matching your filters were found. Try again later.
          </div>
        )}

        {/* Pagination */}
        {count && count > PAGE_SIZE ? (
          <div className='my-4'>
            <Pagination
              count={Math.ceil(count / PAGE_SIZE)}
              page={page === 0 ? 1 : page}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

const OfferItem = ({ offer, game }: { offer: Offer; game: Game }) => {
  return (
    <div className='bg-slate-50 rounded-md p-4 flex flex-col md:flex-row items-start md:items-center gap-2 text-black shadow-dp04'>
      {/* Left container */}
      <div className='flex flex-col gap-2 flex-1'>
        <div className='font-bold text-black'>
          <span className='capitalize'>{offer.server_name?.name}</span> -{' '}
          <span className='uppercase'>{offer.region}</span> - {offer.stock} gold
          in stock
        </div>
        <div className='flex items-center gap-2 flex-wrap'>
          <div className='bg-gradient-to-r from-green to-seablue text-black p-0.5 px-2 shadow-dp01 rounded-md font-bold text-sm uppercase'>
            {game.name} <span>{offer.region}</span>
          </div>
          <div
            className={`${
              offer.faction === 'horde'
                ? 'text-red-600 bg-red-200'
                : 'text-sky-600 bg-sky-200'
            } p-0.5 px-2 shadow-dp01 rounded-md font-bold text-sm`}
          >
            <span className='uppercase'>{offer.faction}</span>
          </div>
        </div>
      </div>
      {/* Right container */}
      <div className='flex items-center justify-between w-full flex-1'>
        <Link href={`/profile/${offer.user?.id}`}>
          <div className='flex gap-2'>
            <Image
              src={offer.user?.avatar_url!}
              alt='avatar'
              width={56}
              height={56}
              className='rounded-full shadow-dp02'
            />
            <div className='flex flex-col gap-1'>
              <div className='text-sm font-bold'>{offer.user?.name}</div>
              <div className='flex items-center gap-1'>
                <div className='w-3 h-3 bg-orange-600 rotate-45 rounded-[3px]'></div>
                <div className='w-3 h-3 bg-orange-600 rotate-45 rounded-[3px]'></div>
                <div className='w-3 h-3 bg-orange-600 rotate-45 rounded-[3px]'></div>
                <div className='w-3 h-3 bg-orange-600 rotate-45 rounded-[3px]'></div>
                <div className='w-3 h-3 bg-orange-600 rotate-45 rounded-[3px]'></div>
              </div>
              <div className='text-xs text-gray-400'>620 reviews</div>
            </div>
          </div>
        </Link>

        <div className='flex flex-col items-end'>
          <div className='text-xl font-bold '>${offer.price}</div>
          <div className='text-gray-400 text-sm'>For {offer.unit} gold</div>
        </div>
      </div>
    </div>
  );
};