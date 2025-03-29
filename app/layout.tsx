import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import AgeLimitModal from './components/AgeLimitModal';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyBDSMTest - Discover Your Preferences',
  description: 'Take our comprehensive BDSM test to discover your preferences, roles, and tendencies. For educational purposes only.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: false
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 这里添加自定义元素 */}
        <userStyle>Normal</userStyle>
      </head>
      
      {/* 紧跟在 head 元素后添加 Google Analytics 代码 */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WCTYKTKJ38" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WCTYKTKJ38');
        `}
      </Script>
      
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <AgeLimitModal />
      </body>
    </html>
  );
}