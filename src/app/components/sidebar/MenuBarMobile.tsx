// @/components/Layout/MenuBarMobile.js
import React from 'react';
import Link from 'next/link';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  show: boolean;
  setter: (value: boolean | ((val: boolean) => boolean)) => void;
}

export default function MenuBarMobile({ show, setter }: SidebarProps) {
  return (
    <nav className='md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-black flex [&>*]:my-auto px-2'>
      <button
        className='text-4xl flex text-white'
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
      >
        <Cog6ToothIcon width={20} height={20} />
      </button>
      <Link href='/' className='mx-auto'>
        {/*eslint-disable-next-line*/}
        <img src={'/img/cup.png'} alt='Company Logo' width={50} height={50} />
      </Link>
      <Link className='text-3xl flex text-white' href='/login'>
        <UserIcon width={20} height={20} />
      </Link>
    </nav>
  );
}
