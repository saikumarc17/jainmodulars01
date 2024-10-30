import { Users, Shield } from 'lucide-react';
// import { Users, Tools, Shield, Cube } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Design Consultation',
      icon: Users,
      description: 'Our expert designers work with you to create the perfect kitchen layout that matches your style and needs.',
      features: [
        'Personalized 3D designs',
        'Material and color consultation',
        'Layout optimization',
        'Budget planning'
      ]
    },
    {
      title: 'Installation',
      icon: Users,
      description: 'Professional installation by our trained team ensures your kitchen is perfectly set up.',
      features: [
        'Expert installation team',
        'Minimal disruption',
        'Quality assurance',
        'Post-installation cleanup'
      ]
    },
    {
      title: 'Maintenance & Warranty',
      icon: Shield,
      description: 'Comprehensive warranty coverage and maintenance services to keep your kitchen in perfect condition.',
      features: [
        '5-year warranty',
        'Regular maintenance checks',
        'Quick repair service',
        'Replacement parts available'
      ]
    },
    {
      title: '3D Kitchen Planner',
      icon: Users,
      description: 'Visualize your dream kitchen with our advanced 3D planning tools.',     
       features: [
        'Real-time visualization',
        'Accurate measurements',
        'Multiple design options',
        'Virtual walkthrough'
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold ml-4">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
            <div className="space-y-12">
              {[
                { step: 1, title: 'Initial Consultation', description: 'Meet with our design experts to discuss your vision and requirements.' },
                { step: 2, title: '3D Design', description: 'Get a detailed 3D visualization of your kitchen design with multiple options.' },
                { step: 3, title: 'Material Selection', description: 'Choose from our premium range of materials, colors, and accessories.' },
                { step: 4, title: 'Installation', description: 'Professional installation by our expert team with minimal disruption.' }
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                        <h3 className="text-xl font-bold mb-2">Step {item.step}</h3>
                        <h4 className="text-lg font-semibold text-amber-600 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Kitchen Transformation?</h2>
          <p className="text-gray-600 mb-6">
            Book a consultation with our experts and take the first step towards your dream kitchen.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Schedule Consultation
          </a>
        </section>
      </div>
    </div>
  );
}