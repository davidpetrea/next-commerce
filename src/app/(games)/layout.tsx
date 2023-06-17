import Footer from '@components/home/Footer';
import Header from '@components/home/Header';

export const metadata = {
  title: 'Next Commerce Games',
};

export default async function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex grow'>
        <div className='flex flex-col flex-grow'>
          <Header />
          {/* Main content container */}
          <div className='bg-neutral-900 grow flex justify-center'>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
