
import MainLayout from "@/components/layout/MainLayout";
import { Trophy, Target, Users, Clock, Heart, Compass } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-sport-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About EventCentral</h1>
              <p className="text-xl mb-6 text-blue-100">
                We're dedicated to organizing and managing sports events that bring
                communities together through the power of athletics.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-sport-orange to-sport-cyan blur-sm opacity-75"></div>
                <img 
                  src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team working together" 
                  className="relative rounded-lg w-full h-auto object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-sport-blue/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-sport-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-sport-blue">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To create well-organized, accessible sporting events that inspire 
                participation, promote physical fitness, and build community connections.
              </p>
              <p className="text-gray-700">
                We believe in the transformative power of sports to bring people 
                together, foster teamwork, and encourage healthy competition.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-sport-blue/10 rounded-full flex items-center justify-center mb-6">
                <Compass className="h-8 w-8 text-sport-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-sport-blue">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                To become the leading sports event management platform, known for 
                excellence in organization, participant experience, and community impact.
              </p>
              <p className="text-gray-700">
                We envision a world where participating in organized sports is 
                accessible to everyone, regardless of skill level or background.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in sports event management.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "2018",
                  title: "The Beginning",
                  description: "EventCentral was founded by a group of sports enthusiasts who saw the need for better-organized local sporting events."
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description: "We launched our online platform, making registration, certificate management, and event coordination fully digital."
                },
                {
                  year: "2022",
                  title: "Regional Expansion",
                  description: "Expanded to cover multiple cities and a wider range of sports categories, reaching more participants."
                },
                {
                  year: "2025",
                  title: "Where We Are Today",
                  description: "Now serving thousands of participants across dozens of sporting events each year, with a focus on quality and experience."
                }
              ].map((milestone, index) => (
                <div key={index} className="flex">
                  <div className="mr-8 flex-shrink-0">
                    <div className="w-16 h-16 bg-sport-orange text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {milestone.year}
                    </div>
                    {index < 3 && (
                      <div className="w-0.5 h-16 bg-gray-300 mx-auto mt-4"></div>
                    )}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at EventCentral.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="h-10 w-10 text-sport-blue" />,
                title: "Excellence",
                description: "We strive for excellence in every aspect of event organization and management."
              },
              {
                icon: <Users className="h-10 w-10 text-sport-blue" />,
                title: "Inclusivity",
                description: "We create events that are accessible and welcoming to participants of all backgrounds."
              },
              {
                icon: <Heart className="h-10 w-10 text-sport-blue" />,
                title: "Passion",
                description: "We're passionate about sports and the positive impact they have on communities."
              },
              {
                icon: <Clock className="h-10 w-10 text-sport-blue" />,
                title: "Reliability",
                description: "We deliver on our promises and ensure events run smoothly and on schedule."
              },
              {
                icon: <Compass className="h-10 w-10 text-sport-blue" />,
                title: "Innovation",
                description: "We continuously improve our processes and embrace new technologies."
              },
              {
                icon: <Target className="h-10 w-10 text-sport-blue" />,
                title: "Community",
                description: "We believe in the power of sports to build stronger, more connected communities."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals behind EventCentral who make it all happen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sarah Chen",
                role: "Event Director",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "David Patel",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Maria Rodriguez",
                role: "Marketing Lead",
                image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sport-blue">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
