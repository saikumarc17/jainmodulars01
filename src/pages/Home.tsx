import { ChevronRight, Star, Users, Clock } from 'lucide-react';
// import { ChevronRight, Star, Users, Tool, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Transform Your Kitchen Into a Masterpiece</h1>
            <p className="text-xl mb-8 max-w-2xl">Experience the perfect blend of functionality and elegance with our custom modular kitchen solutions.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Get Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Jain Modular Kitchen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Top-grade materials and superior craftsmanship for lasting durability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled designers and craftsmen with years of industry experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              {/* <Tool className="h-12 w-12 text-amber-600 mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold mb-2">Customization</h3>
              <p className="text-gray-600">Tailored solutions to match your specific needs and preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80" 
                alt="Modern Kitchen" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Modern Elegance</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1556909172-8c2f041fca1e?auto=format&fit=crop&q=80" 
                alt="Contemporary Kitchen" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Contemporary Style</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80" 
                alt="Luxury Kitchen" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Luxury Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Kitchen?</h2>
          <p className="text-white text-lg mb-8">Book a free consultation with our design experts today.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-amber-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
            <Clock className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}