import GamesMenu from '@components/home/GamesMenu';
import { notFound } from 'next/navigation';
import React from 'react';
import { GameList } from 'src/types/sharedTypes';

const games: GameList = [
  {
    value: 'wow',
    name: 'World of Warcraft',
  },
  {
    value: 'diablo4',
    name: 'Diablo 4',
  },
  {
    value: 'wow-classic',
    name: 'World of Warcraft Classic',
  },
  {
    value: 'wow-wotlk',
    name: 'WoW Wotlk Classic',
  },
  {
    value: 'poe',
    name: 'Path of Exile',
  },
];

const GameInfo = ({ params }: any) => {
  if (!games.map((game) => game.value).includes(params.game)) notFound();

  return (
    <div className='p-4 lg:p-8 flex flex-col md:flex-row gap-8 max-w-7xl'>
      <div className='md:hidden'>Game mobile menu</div>
      <div className='hidden md:inline-block basis-[16rem]'>
        <GamesMenu games={games} />
      </div>
      <div>Offers container</div>
    </div>
  );
};

export default GameInfo;
