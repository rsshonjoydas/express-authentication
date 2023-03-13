'use client';

import { navbarData } from '@/data/navbarData';
import { Popover } from '@headlessui/react';
import Border from './Border';
import DarkModeSwitch from './DarkModeSwitch';
import MobileDrawer from './Drawer';
import Logo from './Logo';
import NavbarItem from './NavbarItem';

const Header = () => (
  <Popover className='bg-light/30 dark:bg-dark/30 backdrop-blur-md border-b-[1px] dark:border-dark-300 fixed top-0 inset-x-0 z-10 h-16 text-white font-medium'>
    <Border className='-mb-[2px] bottom-full' />
    <div className='container px-4 mx-auto sm:px-6'>
      <div className='flex items-center justify-between md:justify-start lg:justify-end'>
        <div className='flex items-center justify-start lg:w-0 lg:flex-1'>
          <div className='md:hidden'>
            <div className='inline-flex items-center justify-center p-3 text-gray-400 bg-gray-100 rounded-full shadow-xl cursor-pointer dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 shadow-black/5 ring-1 ring-slate-700/10'>
              <MobileDrawer />
            </div>
          </div>
          <Logo />
        </div>
        <Popover.Group as='nav' className='hidden space-x-10 md:flex lg:flex'>
          {navbarData.map((menuItem) => (
            <NavbarItem
              key={menuItem.id}
              label={menuItem.label}
              href={menuItem.path}
              className='link'
            />
          ))}
        </Popover.Group>

        <div className='flex items-center'>
          <div className='items-end hidden gap-4 md:flex md:flex-1lg:w-0'>{/* <AuthBtn /> */}</div>
          <div className='my-2 ml-6 border-l border-slate-200 dark:border-slate-800'>
            <div className='flex items-center justify-center'>
              <DarkModeSwitch />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Border className='top-full' />
  </Popover>
);

export default Header;
