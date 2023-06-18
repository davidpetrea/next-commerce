import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from './schema';
import { ElementType } from './index';

export const supabase = createClientComponentClient<Database>();

export async function getGoldOffers(
  gameId: string,
  region: string,
  faction: string
) {
  const { data } = await supabase
    .from('gold_offers')
    .select('*, user:users(id,name,avatar_url)')
    .eq('game_id', gameId)
    .eq('region', region)
    .eq('faction', faction);

  return data;
}

type GoldOffersResponse = Awaited<ReturnType<typeof getGoldOffers>>;

export type Offer = ElementType<GoldOffersResponse>;
