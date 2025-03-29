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
  // 移除了导致类型错误的icons配置
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WCTYKTKJ38"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WCTYKTKJ38');
          `}
        </Script>
        
        {/* 用户样式标签 */}
        <userStyle>Normal</userStyle>
      </head>
      
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