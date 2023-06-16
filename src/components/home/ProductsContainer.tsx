'use client';
import { Game } from '@lib/supabase';
import React, { useState } from 'react';

const ProductsContainer = ({ game }: { game: Game }) => {
  const [selectedTag, setSelectedTag] = useState('all');

  const filteredProducts =
    selectedTag === 'all'
      ? game.products
      : game.products.filter((product) => product.tags.includes(selectedTag));

  return (
    <>
      <div className='flex gap-2 text-xs md:text-sm mt-2 w-full max-w-full flex-wrap'>
        <button
          className={`capitalize font-bold p-2 md:p-4 px-6 rounded-md shadow-dp04 transition duration-100 ease-in-out ${
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
            className={`capitalize font-bold p-2 md:p-4 px-6 rounded-md shadow-dp04 transition duration-100 ease-in-out whitespace-nowrap ${
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
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 max-w-full'>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className='p-4 bg-blue-950 rounded-md border border-gray-300'
          >
            {product.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsContainer;
