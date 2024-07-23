import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { urbanist } from '../lib/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Student Dashboard',
  description: 'This is your section where you control your learning',
  icons: '/images/logo.jpg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(urbanist.className, {
          'debug-screens': process.env.NODE_ENV === 'development',
        })}
      >
        {children}
      </body>
    </html>
  );
}
