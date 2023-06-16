'use client';
import { ArrowDown } from '@assets/SvgComponents';
import { Game } from '@lib/supabase';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const GamesMenu = ({ games }: { games: Game[] }) => {
  return (
    <div className='flex flex-col'>
      {games.map((game) => (
        <NavItem key={game.path} game={game} />
      ))}
    </div>
  );
};

const NavItem = ({ game }: { game: Game }) => {
  const path = usePathname();
  const isActive = path.slice(1) === game.path;
  return (
    <Link href={`/${game.path}`}>
      <div
        className={`${
          isActive
            ? 'border border-seablue bg-sky-950 hover:bg-sky-900 hover:text-gray-50 rounded-[4px]'
            : 'border border-transparent border-b-gray-700 text-gray-400 hover:text-gray-50'
        } p-4 flex items-center justify-between transition duration-100 ease-linear`}
      >
        <div className='font-semibold'>{game.name}</div>
        <ArrowDown className='rotate-[270deg] w-3 h-3' />
      </div>
    </Link>
  );
};

export default GamesMenu;
