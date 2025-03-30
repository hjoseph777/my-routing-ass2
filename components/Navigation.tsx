// File: components/Navigation.tsx
// Date: 29/06/2023
// Author: Fredrik Engvall
// Description: This file contains the navigation component for the website.

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="bg-white sticky top-0 z-10 shadow-md bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">BlogDemo</span>
            </Link>
          </div>
          
          <nav className="flex space-x-8">
            {['Home', 'Posts', 'About', 'Contact'].map((item) => {
              const href = item === 'Home' ? '/' : 
                          item === 'Posts' ? '/' : 
                          `/${item.toLowerCase()}`;
              
              const isActive = 
                (pathname === href) || 
                (item === 'Posts' && pathname.startsWith('/posts/'));
              
              return (
                <Link 
                  key={item}
                  href={href}
                  className={`px-1 py-2 text-sm font-medium transition-colors duration-200
                    ${isActive 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

