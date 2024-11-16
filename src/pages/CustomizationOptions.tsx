import { Palette, HandMetal, Package } from 'lucide-react';

export default function CustomizationOptions() {
  const categories = [
    // {
    //   title: 'Cabinet Colors',
    //   icon: Palette,
    //   options: [
    //     { name: 'Classic White', code: 'bg-white' },
    //     { name: 'Midnight Black', code: 'bg-gray-900' },
    //     { name: 'Natural Wood', code: 'bg-amber-700' },
    //     { name: 'Navy Blue', code: 'bg-blue-900' },
    //     { name: 'Sage Green', code: 'bg-green-700' },
    //   ]
    // },
    {
      title: 'Handle Types',
      icon: HandMetal,
      options: [
        { name: 'Modern Pull Handles', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80' },
        { name: 'Classic Knobs', image: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e?auto=format&fit=crop&q=80' },
        { name: 'Minimalist Edge Pulls', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80' },
      ]
    },
    {
      title: 'Modular Accessories',
      icon: Package,
      options: [
        { name: 'Cutlery Organizers', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80' },
        { name: 'Spice Racks', image: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e?auto=format&fit=crop&q=80' },
        { name: 'Plate Holders', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80' },
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Customization Options</h1>

        <div className="space-y-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <section key={category.title} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold ml-4">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.options.map((option) => (
                    <div key={option.name} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                      {option.code ? (
                        <div className={`w-full h-32 rounded-lg mb-4 ${option.code}`}></div>
                      ) : (
                        <img 
                          src={option.image} 
                          alt={option.name}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                      )}
                      <h3 className="text-lg font-semibold">{option.name}</h3>
                      <p className="text-gray-600 mt-2">
                        Premium quality finish with durability guaranteed
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-16 bg-amber-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Custom Requirements?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We offer completely custom solutions tailored to your specific needs.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </div>
  );
}