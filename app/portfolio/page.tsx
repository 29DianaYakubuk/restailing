import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Premium Remodeling',
  description:
    'Browse our portfolio of completed remodeling projects across South Florida.',
};

const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Remodel',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070',
    location: 'Fort Lauderdale, FL',
  },
  {
    id: 2,
    title: 'Luxury Bathroom Renovation',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069',
    location: 'Boca Raton, FL',
  },
  {
    id: 3,
    title: 'Complete Home Addition',
    category: 'Addition',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    location: 'Miami, FL',
  },
  {
    id: 4,
    title: 'Contemporary Kitchen Update',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=2070',
    location: 'Hollywood, FL',
  },
  {
    id: 5,
    title: 'Master Bathroom Suite',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2187',
    location: 'Coral Springs, FL',
  },
  {
    id: 6,
    title: 'Open Concept Living Space',
    category: 'Remodel',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    location: 'Pompano Beach, FL',
  },
  {
    id: 7,
    title: 'Elegant Kitchen Transformation',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2074',
    location: 'Plantation, FL',
  },
  {
    id: 8,
    title: 'Spa-Like Bathroom Retreat',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
    location: 'Davie, FL',
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <section
        className="relative py-20 bg-gray-900 text-white"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-2xl">
            Explore our completed projects and see the quality of our
            craftsmanship firsthand.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each project showcases our commitment to quality, attention to
              detail, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-primary-600 rounded-full text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Own Transformation
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to see your home featured in our portfolio? Let&apos;s create
              something beautiful together.
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
