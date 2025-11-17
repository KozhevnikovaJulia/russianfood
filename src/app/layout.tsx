import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/providers/provider';
import Header from '@/components/loyaut/header';
import './globals.css';
import { siteConfig } from '../config/site.config';
import { loyautConfig } from '../config/loyaut.config';
import { Title } from '@/components/loyaut/title';
import AppLoader from '@/hoc/app-loader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <AppLoader>
            <div className='flex min-h-screen flex-col justify-between'>
              <div className='flex flex-col'>
                <Header />
                <main className={`flex flex-col max-w-[1024px] mx-auto px-[24px] justify-start items-center`} style={{ height: `calc(100vh - ${loyautConfig.footerHeight} - ${loyautConfig.headerHeight})` }}>
                  <Title />
                  {children}
                </main>
              </div>
              <footer className={` justify-center items-center`} style={{ height: `${loyautConfig.footerHeight}` }}>
                {siteConfig.description}
              </footer>
            </div>
          </AppLoader>
        </Providers>
      </body>
    </html>
  );
}
