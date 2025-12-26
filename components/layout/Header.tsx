'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Financing', href: '/financing' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">
                Premium Remodeling
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium w-fit"
              >
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
