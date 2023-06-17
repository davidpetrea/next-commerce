'use client';
import { Game } from '@lib/supabase';
import Link from 'next/link';
import React from 'react';

const CategoryMenu = ({
  game,
  currentTag,
}: {
  game: Game;
  currentTag: string;
}) => {
  return (
    <div className='w-full'>
      <div className='border-b border-t border-gray-700 p-2 px-4 uppercase text-xs font-semibold text-gray-400'>
        Categories
      </div>
      {game.tags.map((tag) => (
        <NavItem key={tag} game={game} tag={tag} currentTag={currentTag} />
      ))}
    </div>
  );
};

const NavItem = ({
  game,
  tag,
  currentTag,
}: {
  game: Game;
  tag: string;
  currentTag: string;
}) => {
  const isActive = currentTag === tag;
  return (
    <Link href={`/games/${game.path}/${tag}`}>
      <div
        className={`${
          isActive
            ? 'border border-seablue bg-sky-950 hover:bg-sky-900 hover:text-gray-50 rounded-[4px]'
            : 'border border-transparent border-b-gray-700 text-gray-400 hover:text-gray-50'
        } p-4 flex items-center justify-between transition duration-100 ease-linear text-sm`}
      >
        <div className='font-semibold capitalize'>{tag.replace('-', ' ')}</div>
      </div>
    </Link>
  );
};

export default CategoryMenu;
