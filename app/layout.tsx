import "./globals.css";
import Navigation from '@/components/Navigation';
import { Inter } from 'next/font/google';

// Add Inter font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow py-6 px-4">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>
          <footer className="bg-white text-gray-700 py-6 shadow-inner bg-opacity-95">
            <div className="max-w-4xl mx-auto px-4 text-center text-sm">
              &copy; {new Date().getFullYear()} Next.js Routing Demo | All rights reserved
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
