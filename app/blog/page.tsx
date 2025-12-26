import { Calendar, User } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Premium Remodeling',
  description:
    'Read our latest articles about home remodeling tips, trends, and inspiration.',
};

const blogPosts = [
  {
    id: 1,
    title: '10 Kitchen Remodeling Trends for 2024',
    excerpt:
      'Discover the hottest kitchen design trends that are transforming homes across South Florida this year.',
    author: 'Sarah Johnson',
    date: '2024-11-15',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068',
  },
  {
    id: 2,
    title: 'How to Choose the Right Contractor for Your Home Remodel',
    excerpt:
      'Essential tips for selecting a reliable and professional contractor for your next renovation project.',
    author: 'Michael Rodriguez',
    date: '2024-10-28',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089',
  },
  {
    id: 3,
    title: 'Bathroom Renovation: ROI and Value Addition',
    excerpt:
      'Learn how a bathroom renovation can significantly increase your home value and provide excellent return on investment.',
    author: 'Emily Chen',
    date: '2024-10-10',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069',
  },
  {
    id: 4,
    title: 'Sustainable Remodeling: Eco-Friendly Options',
    excerpt:
      'Explore environmentally conscious materials and practices for your next home renovation project.',
    author: 'David Thompson',
    date: '2024-09-22',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
  },
  {
    id: 5,
    title: 'Open Concept Living: Pros and Cons',
    excerpt:
      'Is an open floor plan right for your home? We break down the advantages and potential drawbacks.',
    author: 'Lisa Martinez',
    date: '2024-09-05',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section
        className="relative py-20 bg-gray-900 text-white"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-2xl">
            Tips, trends, and inspiration for your next home renovation project.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with expert advice and insights from our team of
              remodeling professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 border-t border-gray-100 pt-4">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Expert Advice?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to answer your questions and help you plan your
              perfect renovation project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
