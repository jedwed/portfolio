import Sidebar from '@/components/sidebar';
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
          <div className="flex h-screen w-screen">
            <Sidebar />
            <div className="w-full flex items-center justify-center">
              <main className="m-12 text-center items-center max-w-xl">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
