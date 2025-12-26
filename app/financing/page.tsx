import { CreditCard, CheckCircle2, DollarSign } from 'lucide-react';
import LeadForm from '@/components/shared/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financing Options | Premium Remodeling',
  description:
    'Flexible financing options to make your dream home renovation affordable and accessible.',
};

const benefits = [
  'Quick and easy application process',
  'Competitive interest rates',
  'Flexible payment terms',
  'No prepayment penalties',
  'Same-day approval available',
  'Up to $100,000 financing available',
];

const financingOptions = [
  {
    title: 'Low Monthly Payments',
    description:
      'Spread the cost of your renovation over time with affordable monthly payments that fit your budget.',
    icon: DollarSign,
  },
  {
    title: 'Flexible Terms',
    description:
      'Choose from a variety of loan terms and payment plans tailored to your financial situation.',
    icon: CreditCard,
  },
  {
    title: 'Fast Approval',
    description:
      'Get approved quickly with our streamlined application process and start your project sooner.',
    icon: CheckCircle2,
  },
];

export default function FinancingPage() {
  return (
    <div className="pt-20">
      <section
        className="relative py-20 bg-gray-900 text-white"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2011)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Financing Options
          </h1>
          <p className="text-xl max-w-2xl">
            Make your dream home renovation affordable with our flexible
            financing solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Financing?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe everyone deserves their dream home. That&apos;s why we
              offer flexible financing options to fit any budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {financingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
                >
                  <div className="inline-flex p-4 bg-primary-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Financing Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our financing program is designed to make home improvements
                accessible to everyone. Whether you&apos;re planning a small
                update or a complete renovation, we have options to help.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How It Works:
                </h3>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="font-bold text-primary-600">1.</span>
                    <span>Submit your project details and financing request</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary-600">2.</span>
                    <span>
                      Receive approval decision, often within 24 hours
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary-600">3.</span>
                    <span>Choose your payment terms and finalize details</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary-600">4.</span>
                    <span>Start your project with confidence</span>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <LeadForm
                variant="default"
                title="Apply for Financing"
                subtitle="Fill out the form below to get started with your financing application"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Financing?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand your options and find the
              best financing solution for your project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
