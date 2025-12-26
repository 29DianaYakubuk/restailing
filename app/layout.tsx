import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsAppButton from '@/components/shared/FloatingWhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Premium Remodeling & Renovation Services | South Florida',
  description:
    'Transform your home with our expert remodeling and renovation services. Serving South Florida with 15+ years of excellence. Kitchen, bathroom, home additions, and more.',
  keywords:
    'remodeling, renovation, kitchen remodel, bathroom renovation, home addition, South Florida, Fort Lauderdale, contractor',
  openGraph: {
    title: 'Premium Remodeling & Renovation Services',
    description:
      'Transform your home with expert remodeling services in South Florida',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
