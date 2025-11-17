'use client';
import { siteConfig } from '@/config/site.config';
import { usePathname } from 'next/navigation';

export const Title = () => {
  const pathname = usePathname();
  const currentNavItem = siteConfig.navBarItemsArr.find(item => item.href === pathname);
  const pageTitle = currentNavItem ? currentNavItem.label : siteConfig.title;

  return (
    <div className='w-full flex justify-center my-6 '>
      <h1 className='text-3xl font-bold'>{pageTitle}</h1>
    </div>
  );
};
