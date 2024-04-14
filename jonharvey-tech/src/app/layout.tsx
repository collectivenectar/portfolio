import type { Metadata } from "next";
import Link from 'next/link';

import Header from '../components/layouts/Header';

import { OverlayStoreProvider } from '@/providers/OverlayStoreProvider';

import "./globals.css";
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: "Jon Harvey | IT Business Solutions and Consulting",
  description: "Fast product ideation and prototyping for the growing enterprise -- Get in touch for highly innovative and optimized solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <body>
    <Header/>
    <main>
      <OverlayStoreProvider>
      {children}
      </OverlayStoreProvider>
    </main>
    <footer className={styles.footer}>© 2024 Jon Harvey. All rights reserved.</footer>
    </body>
    </html>  
  );
}
