import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.css';
import { AppProviders } from '../context/AppProviders';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Next.js 15 Boilerplate',
  description: 'A Next.js 15 boilerplate with TypeScript, Tailwind CSS, and more',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
