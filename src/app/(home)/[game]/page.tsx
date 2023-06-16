import GamesMenu from '@components/home/GamesMenu';
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
    <div className='p-4 lg:p-8 flex flex-col justify-center md:flex-row gap-8 w-[1280px] mx-auto'>
      <div className='md:hidden'>Game mobile menu</div>
      <div className='hidden md:inline-block basis-[16rem]'>
        <GamesMenu games={games} />
      </div>
      <div className='grow'>
        <Link href={`/games/${currentGame.path}`}>
          <span className='text-2xl font-bold'>{currentGame.name} Offers</span>
        </Link>
      
        <ProductsContainer game={currentGame}/>
      </div>
    </div>
  );
}
