import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import SimpleLeadForm from '@/components/shared/SimpleLeadForm';

const benefits = [
  'Licensed and insured contractors',
  'Over 15 years of experience',
  '500+ satisfied customers',
  'Quality materials and workmanship',
  'On-time project completion',
  'Transparent pricing',
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              South Florida&apos;s Trusted Remodeling Contractors
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of excellence in the remodeling industry, we
              specialize in transforming homes across South Florida. From
              kitchens and bathrooms to complete home renovations, our team of
              skilled craftsmen delivers exceptional quality on every project.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We pride ourselves on clear communication, attention to detail,
              and a commitment to bringing your vision to life. Our comprehensive
              approach ensures that every aspect of your remodel is handled with
              professionalism and care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              About Us
            </Link>
          </div>

          <div>
            <SimpleLeadForm
              variant="default"
              title="Start Your Project Today"
              subtitle="Get a free consultation and estimate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
