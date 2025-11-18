import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/providers/provider';
import Header from '@/components/layout/header';
import './globals.css';
import { siteConfig } from '../config/site.config';
import { layoutConfig } from '../config/layout.config';
import { SessionProvider } from 'next-auth/react';
import { Title } from '@/components/layout/title';
import AppLoader from '@/hoc/app-loader';
import { auth } from '@/auth/auth';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <SessionProvider session={session}>
            <AppLoader>
              <div className='flex min-h-screen flex-col justify-between'>
                <div className='flex flex-col'>
                  <Header />
                  <main className={`flex flex-col max-w-[1024px] mx-auto px-[24px] justify-start items-center`} style={{ height: `calc(100vh - ${layoutConfig.footerHeight} - ${layoutConfig.headerHeight})` }}>
                    <Title />
                    {children}
                  </main>
                </div>
                <footer className={` justify-center items-center`} style={{ height: `${layoutConfig.footerHeight}` }}>
                  {siteConfig.description}
                </footer>
              </div>
            </AppLoader>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
