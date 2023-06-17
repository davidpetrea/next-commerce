import { ArrowDown } from '@assets/SvgComponents';
import CategoryMenu from '@components/games/CategoryMenu';
import { gamesDetails } from '@components/games/GameDetails';
import { getGames } from '@lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export const revalidate = 0;

export default async function GamePage({ params }: any) {
  const { data: games } = await getGames();

  if (!games) {
    return <div>No games found.</div>;
  }

  if (!games.map((game) => game.path).includes(params.game[0])) notFound();

  const [currentGame] = games.filter((game) => game.path === params.game[0]);
  const currentTag = params.game[1];
  const pageInfo = gamesDetails[currentGame.path]?.[currentTag ?? '/'];

  return (
    <div className='flex w-full'>
      {/* Tag/Category menu container */}
      <div className='bg-neutral-800 hidden md:inline-block w-[15rem] shrink-0'>
        <CategoryMenu game={currentGame} currentTag={currentTag} />
      </div>

      {/* Products container */}
      <div className='flex flex-col w-full relative bg-[#191f3d]'>
        <div className='absolute'>
          <Image
            src={
              'https://mantfjleobdnclzanarv.supabase.co/storage/v1/object/public/next-commerce-images/BG_WoW.webp'
            }
            alt='dragon'
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-auto'
          />
        </div>
        {/* Content */}
        <div className='z-[1] flex flex-col p-4 lg:p-16 justify-center w-full max-w-[1250px] mx-auto'>
          {/* Navigation tracker */}
          <div className='hidden md:flex items-center gap-3 text-sm mb-4'>
            <Link href='/wow'>
              <div className='flex items-center gap-3'>
                <div>Home</div>
                <ArrowDown className='fill-gray-400 w-3 h-3 rotate-[270deg]' />
              </div>
            </Link>
            {currentTag ? (
              <>
                <Link href={`/games/${currentGame.path}`}>
                  <div className='flex items-center gap-3'>
                    <div>{currentGame.name}</div>
                    <ArrowDown className='fill-gray-400 w-3 h-3 rotate-[270deg]' />
                  </div>
                </Link>
                <div className='flex items-center gap-3 text-gray-500'>
                  <div className='capitalize'>{currentTag}</div>
                </div>
              </>
            ) : (
              <div className='flex items-center gap-3 text-gray-500'>
                <div>{currentGame.name}</div>
              </div>
            )}
          </div>
          {pageInfo?.title && pageInfo.title}
          {pageInfo?.content && pageInfo.content}
        </div>
      </div>
    </div>
  );
}
