"use client";

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface RootLayoutProps {
  children: React.ReactNode;
  dir?: 'ltr' | 'rtl';
}

export function RootLayout({ children, dir = 'rtl' }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}