'use client';
import { siteConfig } from '@/config/site.config';
import { usePathname } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser';

export const PageContent = () => {
  const pathname = usePathname();
  const pageContent = siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];
  if (!pageContent) {
    return <p>страница не найдена</p>;
  }
  const cleanHTML = DOMPurify.sanitize(pageContent.content);

  // return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
  return <div>{parse(cleanHTML)}</div>;
};
