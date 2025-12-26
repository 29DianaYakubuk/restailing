import { Award, Users, Heart, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Premium Remodeling',
  description:
    'Learn about our 15+ years of experience in home remodeling and renovation across South Florida.',
};

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We maintain the highest standards in craftsmanship and customer service.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description:
      'Your satisfaction is our top priority. We listen, adapt, and deliver.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      'We love what we do, and it shows in every project we complete.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Honest pricing, transparent communication, and quality you can trust.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section
        className="relative py-20 bg-gray-900 text-white"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl">
            Building dreams, one home at a time. Discover our story and
            commitment to excellence.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2009, Premium Remodeling has grown from a small family
                business to South Florida&apos;s most trusted name in home
                renovation. Our journey began with a simple mission: to help
                homeowners transform their houses into the homes of their dreams.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Over the past 15 years, we&apos;ve completed hundreds of projects,
                from simple kitchen updates to complete home transformations. Each
                project has taught us valuable lessons about craftsmanship,
                customer service, and the importance of attention to detail.
              </p>
              <p className="text-lg text-gray-600">
                Today, we&apos;re proud to employ a team of skilled craftsmen,
                designers, and project managers who share our commitment to
                excellence. We&apos;re not just building renovations—we&apos;re
                building relationships that last a lifetime.
              </p>
            </div>
            <div
              className="h-[400px] rounded-2xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076)',
              }}
            ></div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="inline-flex p-4 bg-primary-100 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-primary-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your vision and create a plan to bring it to
              life. Contact us today for a free consultation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
