import Link from 'next/link';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { services } from '@/data/services';

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Financing', href: '/financing' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">
              Premium Remodeling
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:info@premiumremodeling.com"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@premiumremodeling.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </a>
              <p className="text-sm mt-4">
                License #: CBC1234567
                <br />
                Serving South Florida since 2009
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <div className="grid grid-cols-2 gap-2">
              {services.slice(0, 10).map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.slug}`}
                  className="hover:text-primary-400 transition-colors text-sm"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {currentYear} Premium Remodeling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
