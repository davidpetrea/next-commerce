import { ArrowDown } from '@assets/SvgComponents';
import CategoryMenu from '@components/games/CategoryMenu';
import { gamesDetails } from '@components/games/GameDetails';
import GoldOffersContainer from '@components/games/gold/GoldOffersContainer';
import { productDetails } from '@components/home/ProductDetails';
import { getGames } from '@lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export const revalidate = 0;

export const dynamic = 'force-dynamic';

export default async function GamePage({ params, searchParams }: any) {
  const { data: games } = await getGames();
  if (!games) {
    return <div>No games found.</div>;
  }

  if (!games.map((game) => game.path).includes(params.game[0])) notFound();

  const [currentGame] = games.filter((game) => game.path === params.game[0]);
  const currentTag = params.game[1];
  const pageInfo = gamesDetails[currentGame.path]?.[currentTag ?? '/'];

  const products = currentTag
    ? currentGame.products.filter((product) =>
        product.tags.includes(currentTag)
      )
    : currentGame.products;

  //Valid routes are game tags and product paths combined
  const validSubroutes = [
    ...currentGame.products.map((product) => product.path),
    ...currentGame.tags,
  ];

  if (currentTag) {
    if (!validSubroutes.includes(currentTag)) notFound();
  }

  return (
    <div className='flex w-full'>
      {/* Tag/Category menu container */}
      <div className='bg-neutral-800 hidden md:inline-block w-[15rem] shrink-0'>
        <CategoryMenu game={currentGame} currentTag={currentTag} />
      </div>

      {/* Products container */}
      <div className='flex flex-col w-full relative bg-[#191f3d]'>
        {currentGame.bg_img_url && (
          <div className='absolute w-full'>
            <Image
              src={currentGame.bg_img_url}
              alt='background'
              width='0'
              height='0'
              sizes='100vw'
              className='w-full h-auto'
            />
          </div>
        )}

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
          {currentTag === 'gold' ? (
            <GoldOffersContainer
              game={currentGame}
              searchParams={searchParams}
            />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 max-w-full'>
              {products.map((product) => (
                <a
                  key={product.id}
                  href={`/games/${currentGame.path}/${product.path}`}
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
                      {productDetails[currentGame.path][product.path] &&
                        productDetails[currentGame.path][product.path]}
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
                        <div className='font-bold mt-4'>
                          From ${product.price}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {pageInfo?.content && pageInfo.content}
        </div>
      </div>
    </div>
  );
}
