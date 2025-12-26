import LeadForm from '@/components/shared/LeadForm';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let&apos;s Make Your Dream a Reality
            </h1>
            <blockquote className="text-xl sm:text-2xl italic border-l-4 border-primary-400 pl-6 mb-4">
              &quot;Excellence in every detail, dedication in every
              project&quot;
            </blockquote>
            <p className="text-lg text-gray-200 mb-8">
              Transform your house into the home of your dreams with our expert
              remodeling and renovation services. Over 15 years of experience
              serving South Florida.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#estimate"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Free Estimate
              </a>
              <a
                href="/portfolio"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                View Portfolio
              </a>
            </div>
          </div>

          <div className="lg:block hidden">
            <LeadForm
              variant="default"
              title="Request a Free Consultation"
              subtitle="Start your home transformation today"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
