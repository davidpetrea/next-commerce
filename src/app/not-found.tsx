import Footer from '@components/home/Footer';
import Header from '@components/home/Header';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex grow'>
        <div className='flex flex-col flex-grow'>
          <Header />
          {/* Title container */}
          <div className='flex flex-col flex-grow items-center bg-gradient-to-b from-seablue-fade to-neutral-900 py-28'>
            <h1 className='text-center text-orange font-semibold mb-4 max-w-[80%] text-[7rem]'>
              <p className='inline-block bg-gradient-to-r from-seablue to-green bg-clip-text text-transparent'>
                404
              </p>
            </h1>
            <h2 className='text-lg'>
              This page was moved, deleted or never existed in the first place.
            </h2>
            <p className='max-w-sm text-center mt-4 font-semibold'>
              Good thing you had your Hearthstone with you, so you can
              <Link href='/'>
                {' '}
                <span className='text-seablue'>teleport home!</span>
              </Link>
            </p>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
