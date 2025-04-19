
import MainLayout from "@/components/layout/MainLayout";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-2 text-sport-blue">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to help! Reach out to us with any questions or feedback.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-sport-blue">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-sport-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Office Address</p>
                      <p className="text-gray-600">123 Sports Avenue, Stadium District</p>
                      <p className="text-gray-600">City Center, State, 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-sport-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone Number</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri, 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-sport-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@eventcentral.com</p>
                      <p className="text-gray-600">support@eventcentral.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-sport-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM (by appointment)</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-sport-blue">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-sky-400 text-white p-3 rounded-full hover:bg-sky-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
                <p className="mt-4 text-gray-600">
                  Follow us on social media for event updates, highlights, and announcements.
                </p>
              </div>
              
              {/* Map */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-sport-blue">Location</h2>
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.6955179221247!2d-73.97730522429698!3d40.748440471481296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b99a13f7%3A0xf16292d6e1a67f28!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1683840580653!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EventCentral Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
