'use client';
import { Game } from '@lib/supabase';
import React, { useState } from 'react';

const ProductsContainer = ({ game }: { game: Game }) => {
  const [selectedTag, setSelectedTag] = useState('all');

  return (
    <div>
      <div className='flex items-center gap-4 mt-2'>
        <button
          className={`capitalize font-bold p-4 px-6 rounded-md text-sm shadow-dp04 transition duration-100 ease-in-out ${
            'all' === selectedTag
              ? 'bg-slate-600'
              : 'bg-slate-800 hover:bg-slate-700'
          }`}
          onClick={() => setSelectedTag('all')}
        >
          All
        </button>
        {game.tags.map((tag: string) => (
          <button
            key={tag}
            className={`capitalize font-bold p-4 px-6 rounded-md text-sm shadow-dp04 transition duration-100 ease-in-out ${
              tag === selectedTag
                ? 'bg-slate-600'
                : 'bg-slate-800 hover:bg-slate-700'
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div>{selectedTag}</div>
    </div>
  );
};

export default ProductsContainer;
