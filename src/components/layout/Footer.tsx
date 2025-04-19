
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sport-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">EventCentral</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop platform for sports event management, registration, 
              certifications, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-sport-cyan transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-sport-cyan transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-sport-cyan transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-sport-cyan transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-sport-cyan transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sport-cyan transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-sport-cyan transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-sport-cyan transition-colors">Registration</Link>
              </li>
              <li>
                <Link to="/certificate" className="text-gray-300 hover:text-sport-cyan transition-colors">Certificate</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-sport-cyan transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-sport-orange mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">123 Sports Avenue, Stadium District, Your City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-sport-orange flex-shrink-0" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-sport-orange flex-shrink-0" size={18} />
                <span className="text-gray-300">info@eventcentral.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} EventCentral. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
