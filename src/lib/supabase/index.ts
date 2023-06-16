import { createClient } from '@supabase/supabase-js';
import { Database } from './schema';

type ElementType<T> = T extends (infer U)[] ? U : never;

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    db: {
      schema: 'public',
    },
  }
);

export async function getUserById(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('id,name,avatar_url')
    .eq('id', userId)
    .limit(1);
  return { data, error };
}

export async function getGames() {
  const { data, error } = await supabase.from('games').select('name, path, tags, products (id, name, details, price, tags)');
  return { data, error };
}

type UsersResponse = Awaited<ReturnType<typeof getUserById>>;
export type UsersResponseSuccess = UsersResponse['data'];
export type UsersResponseError = UsersResponse['error'];

export type User = ElementType<UsersResponseSuccess>;

type GamesResponse = Awaited<ReturnType<typeof getGames>>;
export type GamesResponseSuccess = GamesResponse['data'];
export type Game = ElementType<GamesResponseSuccess>;
