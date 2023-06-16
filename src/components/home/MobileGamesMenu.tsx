'use client';
import { ArrowDown, XIcon } from '@assets/SvgComponents';
import { Game } from '@lib/supabase';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const MobileGamesMenu = ({
  games,
  currentGame,
}: {
  games: Game[];
  currentGame: Game;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='w-full'>
      <button
        onClick={() => setModalIsOpen(true)}
        className='font-semibold flex justify-between items-center w-full bg-sky-950 p-4 rounded-md hover:bg-sky-900 shawdow-dp04 border border-seablue'
      >
        <div>{currentGame.name}</div>
        <ArrowDown className='rotate-[270deg] w-4 h-4' />
      </button>
      {/* Modal */}
      <div
        className={`fixed ${
          !modalIsOpen && 'hidden'
        } inset-0 bg-gradient-to-r from-sky-950 to-slate-900 w-full h-full p-4 z-[999] overflow-x-scroll overscroll-none`}
      >
        <div className='flex items-center justify-between w-full mb-8'>
          <div className='grow flex justify-center font-semibold'>Games</div>
          <button onClick={() => setModalIsOpen(false)}>
            <XIcon className='w-5 h-5 fill-gray-300 hover:fill-gray-100' />
          </button>
        </div>
        <div className='border-t border-gray-700'>
          {games.map((game) => (
            <NavItem key={game.path} game={game} />
          ))}
        </div>
      </div>
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

export default MobileGamesMenu;
