import { Award, Users, Star, ThumbsUp } from 'lucide-react';

const stats = [
  {
    id: '1',
    icon: Award,
    value: '15+',
    label: 'Years of Excellence',
  },
  {
    id: '2',
    icon: Users,
    value: '500+',
    label: 'Happy Clients',
  },
  {
    id: '3',
    icon: Star,
    value: '5.0',
    label: 'Yelp Rating',
  },
  {
    id: '4',
    icon: ThumbsUp,
    value: '5.0',
    label: 'Google Rating',
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Icon className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
