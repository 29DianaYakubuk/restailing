import { MapPin } from 'lucide-react';
import { locations, mapCenter } from '@/data/locations';

export default function ServiceAreaMap() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230494.42988648936!2d${mapCenter.lng}!3d${mapCenter.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9005c8a2f2411%3A0xd1f7b3e0e8a1e4a1!2sFort%20Lauderdale%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Serving South Florida and Beyond
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve communities throughout South Florida, bringing
            quality remodeling services to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            ></iframe>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Remodeling Services Across South Florida
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              We serve the following cities and surrounding areas:
            </p>

            <div className="grid grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                  <span>{location.city}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Don&apos;t see your city listed? Contact us! We may still be able
                to serve your area.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
