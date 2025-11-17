'use client';
import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { RegistrationModal } from '../modals/registratiom.modal';
import { LoginModal } from '../modals/login.modal';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../../config/site.config';
import { loyautConfig } from '../../config/loyaut.config';

export const Logo = () => {
  return <Image src='/food_6859984.png' alt='next' width={26} height={26} priority />;
};

const Header = () => {
  const pathname = usePathname();
  const navBarItemsArr = siteConfig.navBarItemsArr;
  const [isRegistarationModalOpen, setIsRegistarationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // const { isAuth, session, status, setAuthState } = useAuthStore();

  const getNavItems = () => {
    return siteConfig.navBarItemsArr
      .filter(item => {
        if (item.href === '/ingredients') {
          // return isAuth;
        }
        return true;
      })
      .map(item => {
        const isActive = pathname === item.href;

        return (
          <NavbarItem key={item.href}>
            <Link
              color='foreground'
              href={item.href}
              className={`px-3 py-1 
              ${isActive ? 'text-blue-500' : 'text-foreground'} 
              hover:text-blue-300 hover:border
              hover:border-blue-300 hover:rounded-md
              transition-colors
              transition-border
              duration-200`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        );
      });
  };

  return (
    <>
      <Navbar
        className={`h-[${loyautConfig.headerHeight}]`}
        style={{
          height: `${loyautConfig.headerHeight}`,
        }}
      >
        <NavbarBrand>
          <Link href={'/'}>
            <Logo />
            <p className='font-bold text-inherit'>{siteConfig.title}</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          {navBarItemsArr.map(item => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem key={item.href}>
                <Link
                  color='foreground'
                  className={`px-3 py-1
                ${isActive ? 'text-lg text-blue-500' : 'text-foreground'}
                hover:text-blue-300 hover:border 
                transition-colors
                transition-border
                duration-200
                `}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <Button
              as={Link}
              color='primary'
              href='#'
              variant='flat'
              onPress={() => {
                setIsLoginModalOpen(true);
              }}
            >
              Логин
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color='primary'
              href='#'
              variant='flat'
              onPress={() => {
                setIsRegistarationModalOpen(true);
              }}
            >
              Регистрация
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <RegistrationModal
        isOpen={isRegistarationModalOpen}
        onClose={() => {
          setIsRegistarationModalOpen(false);
        }}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => {
          setIsLoginModalOpen(false);
        }}
      />
    </>
  );
};
export default Header;
