'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const pathname = usePathname();
  const isSpecialPage = pathname === '/landing' || pathname === '/demo';

  return (
    <div className="flex flex-col min-h-screen">
      {!isSpecialPage && <Navbar />}
      <main className={isSpecialPage ? "flex-1" : "flex-1 p-4 sm:p-6 lg:p-8"}>
        {children}
      </main>
    </div>
  );
};

export default LayoutWrapper; 