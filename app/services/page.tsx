import { services } from '@/data/services';
import { ChefHat, Bath, Home, SquareStack, Paintbrush, Triangle, Droplet, Zap, Box, Trees } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Premium Remodeling',
  description:
    'Explore our comprehensive range of remodeling services including kitchen, bathroom, flooring, and more.',
};

const iconMap: Record<string, any> = {
  'chef-hat': ChefHat,
  'bath': Bath,
  'home': Home,
  'square-stack': SquareStack,
  'paintbrush': Paintbrush,
  'triangle': Triangle,
  'droplet': Droplet,
  'zap': Zap,
  'cabinet': Box,
  'trees': Trees,
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section
        className="relative py-20 bg-gray-900 text-white"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive remodeling solutions tailored to your needs and budget.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we handle every aspect of your home
              renovation with professionalism and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Home;
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 p-8 group"
                >
                  <div className="inline-flex p-4 bg-primary-100 rounded-lg mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href="#estimate"
                    className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2"
                  >
                    Get a Quote
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 rounded-2xl p-12 text-center" id="estimate">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and estimate. We&apos;ll
              help you choose the perfect services for your project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Request Free Estimate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
