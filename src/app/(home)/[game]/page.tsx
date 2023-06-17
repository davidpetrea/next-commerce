import GamesMenu from '@components/home/GamesMenu';
import MobileGamesMenu from '@components/home/MobileGamesMenu';
import ProductsContainer from '@components/home/ProductsContainer';
import { getGames } from '@lib/supabase';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export const revalidate = 0;

export default async function GameInfo({ params }: any) {
  const { data: games } = await getGames();

  if (!games) {
    return <div>No games found.</div>;
  }

  if (!games.map((game) => game.path).includes(params.game)) notFound();

  const [currentGame] = games.filter((game) => game.path === params.game);

  return (
    <div className='flex flex-col md:justify-center md:flex-row gap-8 w-full max-w-[1408px]'>
      <div className='md:hidden p-4 lg:p-8'>
        <MobileGamesMenu games={games} currentGame={currentGame} />
      </div>
      {/* Menu container */}
      <div className='hidden md:inline-block w-[16rem] p-4 shrink-0'>
        <GamesMenu games={games} />
      </div>
      {/* Products container */}
      <div className='flex flex-col p-4 mb-12 w-full min-h-[600px]'>
        <Link href={`/games/${currentGame.path}`}>
          <span className='text-2xl font-bold'>{currentGame.name} Offers</span>
        </Link>

        <ProductsContainer game={currentGame} />
      </div>
    </div>
  );
}
