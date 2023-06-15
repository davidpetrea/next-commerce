'use client';
import { ArrowDown } from '@assets/SvgComponents';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Game, GameList } from 'src/types/sharedTypes';

const GamesMenu = ({ games }: { games: GameList }) => {
  return (
    <div className='flex flex-col'>
      {games.map((game) => (
        <NavItem key={game.value} game={game} />
      ))}
    </div>
  );
};

const NavItem = ({ game }: { game: Game }) => {
  const path = usePathname();
  const isActive = path.slice(1) === game.value;
  return (
    <div
      className={`${
        isActive
          ? 'border border-seablue bg-sky-950 hover:bg-sky-900 hover:text-gray-50 rounded-[4px]'
          : 'border border-transparent border-b-gray-800 text-gray-400 hover:text-gray-50'
      }`}
    >
      <Link href={`/${game.value}`}>
        <div className='p-4 flex items-center justify-between'>
          <div className='font-semibold'>{game.name}</div>
          <ArrowDown className='rotate-[270deg] w-3 h-3' />
        </div>
      </Link>
    </div>
  );
};

export default GamesMenu;
