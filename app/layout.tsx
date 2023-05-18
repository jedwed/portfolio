import Navbar from '@/components/navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Edward Qian',
  description: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col md:flex-row md:overflow-y-hidden">
            <Navbar />
            <div className="w-full flex justify-center h-screen md:overflow-y-auto">
              <main className="my-auto p-8 text-center items-center max-w-xl">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
