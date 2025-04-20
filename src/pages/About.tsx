
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-sport-blue">About EventCentral</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Connecting athletes, fans, and communities through exceptional sports events since 2015.
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-t-4 border-t-sport-blue">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-sport-blue">Our Mission</h2>
                  <p className="text-gray-600">
                    To create inclusive, well-organized sports events that inspire athletic excellence, 
                    foster community spirit, and promote healthy competition for participants of all ages 
                    and skill levels.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-sport-orange">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-sport-blue">Our Vision</h2>
                  <p className="text-gray-600">
                    To become the leading sports event management platform, known for innovation, 
                    inclusivity, and creating memorable experiences that celebrate athletic achievement 
                    and community connection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-sport-blue">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="h-12 w-12 text-sport-blue" />,
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our events, from planning to execution."
                },
                {
                  icon: <Users className="h-12 w-12 text-sport-blue" />,
                  title: "Inclusivity",
                  description: "We create events that welcome participants of all backgrounds, ages, and skill levels."
                },
                {
                  icon: <Award className="h-12 w-12 text-sport-blue" />,
                  title: "Integrity",
                  description: "We uphold the highest standards of fairness, transparency, and sportsmanship."
                }
              ].map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-sport-blue">Our Story</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  EventCentral was founded in 2015 by a group of sports enthusiasts who recognized 
                  the need for better-organized sporting events in our community. What began as a small 
                  initiative to organize local tournaments has grown into a comprehensive sports event 
                  management platform.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we've expanded our reach to include a wide range of sports categories
                  and event formats. We've successfully organized over 200 events, from small community 
                  tournaments to large regional championships, serving more than 50,000 athletes.
                </p>
                <p className="text-gray-600">
                  Today, EventCentral continues to innovate in the field of sports event management, 
                  leveraging technology to streamline registration, payment processing, and certificate 
                  distribution while maintaining the personal touch that makes each event special.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Team */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-sport-blue">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  bio: "Former national athlete with 15+ years experience in sports management."
                },
                {
                  name: "Sarah Johnson",
                  role: "Operations Director",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  bio: "Event management specialist with a background in professional sports leagues."
                },
                {
                  name: "Michael Chen",
                  role: "Technical Director",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  bio: "Tech innovator focused on creating seamless digital experiences for sports events."
                }
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sport-orange font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
