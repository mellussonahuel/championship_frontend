'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import { Roboto } from '@next/font/google';
import MenuBarMobile from '../../components/sidebar/MenuBarMobile';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <html lang='en'>
      <body className={roboto.className}>
        <div className='flex h-screen w-full bg-gray-100'>
          <MenuBarMobile show={showSidebar} setter={setShowSidebar} />
          <Sidebar show={showSidebar} setter={setShowSidebar} />
          <div className='flex flex-col w-full h-full ml-64 p-4'>
            <main className='dashboard-content'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default DashboardLayout;
