'use client';
import { Game } from '@lib/supabase';
import { productDetails } from './ProductDetails';
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 max-w-full'>
        {filteredProducts.map((product) => (
          <a
            key={product.id}
            href={`/games/${game.path}/${product.path}`}
            className='overflow-hidden rounded-md h-[300px]'
          >
            <div
              className='flex p-4 rounded-md border border-gray-700 shadow-dp04 product-card'
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(30, 34, 66, 0.8), rgba(30, 34, 66, 0.99)), url('${product.image_url}')`,
                width: '100%',
                height: '100%',
              }}
            >
              <div className='flex flex-col justify-end'>
                <h4 className='font-lg font-semibold'>{product.name}</h4>
                <div className='text-gray-300 text-[14px] leading-[22px]'>
                  {product.details}
                </div>
                {productDetails[game.path][product.path] &&
                  productDetails[game.path][product.path]}
                {product.sale_price ? (
                  <>
                    <div className='mt-4 bg-green text-sm text-black font-semibold p-1 px-3 rounded-lg max-w-fit'>
                      Save{' '}
                      {Math.round(
                        (1 - product.sale_price / product.price) * 100
                      )}
                      %
                    </div>
                    <div className='font-bold mt-1 text-sm'>
                      From{' '}
                      <span className='text-green text-lg'>
                        ${product.sale_price}
                      </span>{' '}
                      <span className='line-through text-sm text-gray-400 font-semibold'>
                        ${product.price}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className='font-bold mt-4'>From ${product.price}</div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default ProductsContainer;
