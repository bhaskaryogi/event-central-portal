
import MainLayout from "@/components/layout/MainLayout";
import HeroBanner from "@/components/home/HeroBanner";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <MainLayout>
      <HeroBanner />
      
      <UpcomingEvents />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose EventCentral</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide everything you need for seamless sports event management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-10 w-10 text-sport-blue" />,
                title: "Easy Registration",
                description: "Simple and quick registration process with secure payment options."
              },
              {
                icon: <Users className="h-10 w-10 text-sport-blue" />,
                title: "Multiple Sports",
                description: "Support for various sports categories and event formats."
              },
              {
                icon: <Award className="h-10 w-10 text-sport-blue" />,
                title: "Digital Certificates",
                description: "Download your participation and achievement certificates easily."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to participate in our events.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Register for an Event",
                  description: "Fill out the registration form with your details and select your preferred sport."
                },
                {
                  step: 2,
                  title: "Complete the Payment",
                  description: "Pay the registration fee using our secure payment options."
                },
                {
                  step: 3,
                  title: "Participate in the Event",
                  description: "Show up on the event day and participate with full enthusiasm."
                },
                {
                  step: 4,
                  title: "Download Your Certificate",
                  description: "After the event, download your participation or achievement certificate."
                }
              ].map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-sport-blue flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    {index < 3 && (
                      <div className="w-0.5 h-16 bg-gray-300 mx-auto mt-2"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-sport-blue text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What Our Participants Say</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Hear from athletes who have participated in our events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The registration process was incredibly smooth, and the event organization was top-notch!",
                name: "Michael Chen",
                role: "Marathon Runner"
              },
              {
                quote: "I loved how easy it was to download my certificate after the event. Great platform!",
                name: "Sarah Johnson",
                role: "Basketball Player"
              },
              {
                quote: "As a team captain, managing our cricket team's registration was hassle-free with EventCentral.",
                name: "Rahul Sharma",
                role: "Cricket Team Captain"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="mb-4 text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mb-4 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-blue-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Join an Event?</h2>
              <p className="text-gray-600 max-w-xl">
                Register now to participate in our upcoming sports events and showcase your talent.
              </p>
              <ul className="mt-4 space-y-2">
                {["Easy registration", "Secure payments", "Digital certificates", "Multiple sports categories"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-sport-orange mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Button asChild size="lg" className="bg-sport-orange hover:bg-sport-orange/90 text-white">
                <Link to="/registration" className="flex items-center">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
