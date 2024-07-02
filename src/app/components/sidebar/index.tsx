'use client';

import { ReactElement } from 'react';
import SidebarItem from './item';
import {
  RectangleGroupIcon,
  UsersIcon,
  TrophyIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

interface ISidebarItem {
  name: string;
  path: string;
  icon: JSX.Element;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

interface SidebarProps {
  show: boolean;
  setter: (value: boolean | ((val: boolean) => boolean)) => void;
}

const items: ISidebarItem[] = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <RectangleGroupIcon width={20} height={20} />,
  },
  {
    name: 'Users',
    path: '/transaction',
    icon: <UsersIcon width={20} height={20} />,
  },
  {
    name: 'Tournaments',
    path: '/payment',
    icon: <TrophyIcon width={20} height={20} />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <Cog6ToothIcon width={20} height={20} />,
    items: [
      {
        name: 'General',
        path: '/settings',
      },
      {
        name: 'Security',
        path: '/settings/security',
      },
      {
        name: 'Notifications',
        path: '/settings/notifications',
      },
    ],
  },
];

const Sidebar = ({ show, setter }: SidebarProps) => {
  // Define our base class
  const className =
    'bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40';
  // Append class based on state of sidebar visiblity
  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0';

  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal: boolean) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className='p-2 flex'>
          <Link href='/'>
            {/*eslint-disable-next-line*/}
            <Image
              className='h-10 w-fit'
              src='/img/cup.png'
              alt='Logo'
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col space-y-2'>
            {items.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
};

export default Sidebar;
