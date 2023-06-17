import { cookies } from 'next/headers';
import Footer from '@components/home/Footer';
import Header from '@components/home/Header';
import { Database } from '@lib/supabase/schema';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export const metadata = {
  title: 'Next Commerce',
};

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.auth.getSession();

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex grow'>
        <div className='flex flex-col flex-grow'>
          <Header />
          {/* Title container */}
          <div className='flex flex-col items-center bg-gradient-to-b from-seablue-fade to-neutral-900 py-8 md:py-28 relative'>
            <h2 className='text-center text-orange font-semibold mb-4 px-4'>
              <p className='inline-block bg-gradient-to-r from-seablue to-green bg-clip-text text-transparent'>
                GAMES ARE TOUGH, BUT OUR PROS ARE TOUGHER
              </p>
            </h2>
            <h1 className='text-2xl md:text-6xl max-w-7xl text-center font-bold px-4'>
              Obtain the{' '}
              <span className='bg-gradient-to-r from-seablue to-green bg-clip-text text-transparent'>
                items, currency, and coaching
              </span>{' '}
              necessary to take your game to the next level
            </h1>
            <p className='text-gray-300 mt-8'>
              <span className='font-semibold'>Excellent 5.0</span> out of 5.0 on{' '}
              <span className='text-white'>Trustpilot</span>
            </p>
          </div>

          <div className='bg-neutral-900 grow flex justify-center'>
            {children}
          </div>
        </div>
      </main>
      {!data.session && <Footer />}
    </div>
  );
}
