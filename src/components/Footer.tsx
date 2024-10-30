import {  Phone, Mail, MapPin } from 'lucide-react';
// import { KitchenPot, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              {/* <KitchenPot className="h-8 w-8 text-amber-500" /> */}
              <span className="text-xl font-bold">Jain Modular Kitchen</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming kitchens into beautiful, functional spaces that inspire culinary creativity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/storage-solutions" className="text-gray-400 hover:text-amber-500">Storage Solutions</Link></li>
              <li><Link to="/customization" className="text-gray-400 hover:text-amber-500">Customization</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">info@jainmodular.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">123 Kitchen Street, Mumbai, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Saturday</li>
              <li>10:00 AM - 8:00 PM</li>
              <li>Sunday: By Appointment</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Jain Modular Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}