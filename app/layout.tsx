import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import AgeLimitModal from './components/AgeLimitModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyBDSMTest - Discover Your Preferences',
  description: 'Take our comprehensive BDSM test to discover your preferences, roles, and tendencies. For educational purposes only.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/icon.png', // Place an icon.png file in the public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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