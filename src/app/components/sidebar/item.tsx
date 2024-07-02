'use client';
import { ReactElement, useMemo, useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';

import SubMenuItem from './sub-item';

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

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }

    return router.push(path);
  };
  const isActive = useMemo(() => {
    if (items && items.length > 0) {
      if (items.find((item) => item.path === pathname)) {
        setExpanded(true);
        return true;
      }
    }

    return path === pathname;
  }, [items, path, pathname]);

  return (
    <>
      <div
        className={`flex items-center p-3 rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active justify-between
     ${isActive && 'text-sidebar-active bg-sidebar-background'}
    `}
        onClick={onClick}
      >
        <div className='flex items-center space-x-2'>
          {icon}
          <p className='text-sm font-semibold'>{name} </p>
        </div>
        {items && items.length > 0 && (
          <ChevronDownIcon width={20} height={20} />
        )}
      </div>
      {expanded && items && items.length > 0 && (
        <div className='flex flex-col space-y-1 ml-10'>
          {items.map((item) => (
            <SubMenuItem key={item.path} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
