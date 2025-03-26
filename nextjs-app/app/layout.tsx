import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StartupPass - Find and Acquire Free Startups',
  description: 'The platform for entrepreneurs to find and acquire free startups',
  keywords: 'startups, acquire, business opportunities, free startups, entrepreneurship',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}