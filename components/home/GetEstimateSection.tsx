import LeadForm from '@/components/shared/LeadForm';
import StatsGrid from './StatsGrid';

export default function GetEstimateSection() {
  return (
    <section id="estimate" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get a Free Estimate Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your dream home. Fill out the form below
            and receive a detailed estimate within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h3>
            <p className="text-gray-600 mb-8">
              With over 15 years of experience and hundreds of satisfied
              customers, we&apos;re South Florida&apos;s most trusted remodeling
              company. Our commitment to quality, transparency, and customer
              satisfaction sets us apart.
            </p>

            <StatsGrid />

            <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
              <h4 className="font-semibold text-gray-900 mb-2">
                What to Expect:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">1.</span>
                  <span>
                    Submit your project details using the form
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">2.</span>
                  <span>
                    Receive a call from our team within 24 hours
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">3.</span>
                  <span>
                    Schedule a free in-home consultation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">4.</span>
                  <span>
                    Get a detailed estimate and project timeline
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <LeadForm
              variant="default"
              title="Request Your Free Estimate"
              subtitle="We'll contact you within 24 hours"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
