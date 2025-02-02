"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Script from 'next/script';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import { OverlayStoreProvider } from './providers/OverlayStoreProvider';
import { InputPositionStoreProvider } from './providers/InputPositionStoreProvider';
import { ShipStoreProvider } from './providers/ShipStoreProvider';

import './globals.css';
import './styles/fonts.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname(); // Get current route

    useEffect(() => {
      if (typeof window !== "undefined" && "gtag" in window) {
        (window as any).gtag("config", "G-YNGB63JCR1", {
            page_path: pathname,
        });
    }
    }, [pathname]);
  return (
    <html>
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-YNGB63JCR1'
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-YNGB63JCR1', {
                    page_path: window.location.pathname,
                    });
                  `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>
          <ShipStoreProvider>
            <InputPositionStoreProvider>
              <OverlayStoreProvider>{children}</OverlayStoreProvider>
            </InputPositionStoreProvider>
          </ShipStoreProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
