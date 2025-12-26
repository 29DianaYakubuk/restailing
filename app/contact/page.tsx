import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import LeadForm from '@/components/shared/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Premium Remodeling',
  description:
    'Get in touch with our team for a free consultation and estimate on your home remodeling project.',
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@premiumremodeling.com',
    link: 'mailto:info@premiumremodeling.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '123 Main Street, Fort Lauderdale, FL 33301',
    link: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM',
    link: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section
        className="relative py-20 bg-gray-900 text-white"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Ready to start your home transformation? Get in touch with our team
            today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re here to answer your questions and help you plan your
                perfect home renovation. Contact us using any of the methods
                below, or fill out the form and we&apos;ll get back to you within
                24 hours.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = item.link ? (
                    <a
                      href={item.link}
                      className="hover:text-primary-600 transition-colors"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="whitespace-pre-line">{item.content}</span>
                  );

                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <div className="text-gray-600">{content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                <h3 className="font-semibold text-gray-900 mb-3">
                  What to Expect:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>
                      We&apos;ll respond to your inquiry within 24 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>
                      Schedule a free in-home consultation at your convenience
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>
                      Receive a detailed estimate and project timeline
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>
                      No obligation - we&apos;ll answer all your questions
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <LeadForm
                variant="default"
                title="Send Us a Message"
                subtitle="Fill out the form and we'll get back to you within 24 hours"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
