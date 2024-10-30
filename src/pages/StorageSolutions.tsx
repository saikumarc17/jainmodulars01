import { CornerUpRight, Box, ArrowUp, Package, Database } from 'lucide-react';

export default function StorageSolutions() {
  const solutions = [
    {
      title: 'Corner Units',
      icon: CornerUpRight,
      description: 'Maximize corner spaces with our innovative solutions including magic corners and carousel units.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80'
    },
    {
      title: 'Pull-out Drawers',
      icon: Box,
      description: 'Smooth-sliding drawers with soft-close mechanisms for easy access to all your kitchen items.',
      image: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e?auto=format&fit=crop&q=80'
    },
    {
      title: 'Overhead Cabinets',
      icon: ArrowUp,
      description: 'Stylish and spacious overhead storage solutions with hydraulic mechanisms.',
      image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80'
    },
    {
      title: 'Pantry Solutions',
      icon: Package,
      description: 'Organized pantry systems with adjustable shelves and pull-out units.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80'
    },
    {
      title: 'Under-sink Storage',
      icon: Database,
      description: 'Specialized storage solutions for under-sink areas with water-resistant materials.',
      image: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Storage Solutions</h1>
        
        <div className="space-y-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={solution.title} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="bg-amber-100 p-3 rounded-full inline-block mb-4">
                    <Icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                      Premium quality materials
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                      Easy maintenance
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                      Customizable options
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}