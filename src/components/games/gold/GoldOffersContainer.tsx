'use client';
import { Game, Offer } from '@lib/supabase';
import { Database } from '@lib/supabase/schema';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useState } from 'react';

export default async function GoldOffersContainer({ game }: { game: Game }) {
  const supabase = createClientComponentClient<Database>();

  const [region, setRegion] = useState('eu');
  const [faction, setFaction] = useState('any');

  const { data: offers } = await supabase
    .from('gold_offers')
    .select('*')
    .eq('game_id', game.id);
  // .eq('region', region)
  // .eq('faction', faction);

  return (
    <div>
      <div>GameID:{game.id}</div>
      <div className='flex flex-col gap-2'>
        {offers?.map((offer) => (
          <OfferItem key={offer.id} offer={offer} game={game} />
        ))}
      </div>
      {/* Offers container */}
      <div></div>
    </div>
  );
}

const OfferItem = ({ offer, game }: { offer: Offer; game: Game }) => {
  return (
    <div className='bg-slate-50 rounded-md p-4 flex flex-col md:flex-row items-start md:items-center gap-2 text-black'>
      {/* Left container */}
      <div className='flex flex-col gap-2 flex-1'>
        <div className='font-semibold text-black'>
          <span className='capitalize'>{offer.server}</span> -{' '}
          <span className='uppercase'>{offer.region}</span> - {offer.stock} gold
          in stock
        </div>
        <div className='flex items-center gap-2 flex-wrap'>
          <div className='bg-gradient-to-r from-green to-seablue text-black p-0.5 px-2 shadow-dp01 rounded-md font-bold text-sm'>
            {game.name} <span className='uppercase'>{offer.region}</span>
          </div>
          <div className='bg-gradient-to-r from-green to-seablue text-black p-0.5 px-2 shadow-dp01 rounded-md font-bold text-sm'>
            <span className='uppercase'>{offer.faction}</span>
          </div>
        </div>
      </div>
      {/* Right container */}
      <div className='flex items-center justify-between w-full flex-1'>
        <div>User</div>
        <div className='flex flex-col items-end'>
          <div className='text-xl font-bold '>${offer.price}</div>
          <div className='text-gray-400 text-sm'>For {offer.unit} gold</div>
        </div>
      </div>
    </div>
  );
};
