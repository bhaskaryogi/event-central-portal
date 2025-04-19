
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Calendar, 
  Users, 
  Medal, 
  Clock, 
  MapPin, 
  CircleDollarSign,
  FileCheck,
  ShieldCheck
} from "lucide-react";

const Services = () => {
  const sportCategories = [
    "all",
    "running",
    "team-sports",
    "racquet-sports",
    "swimming",
    "combat-sports",
    "other"
  ];
  
  const events = [
    {
      id: 1,
      title: "City Marathon",
      category: "running",
      format: "Individual Race",
      description: "Annual marathon through the scenic routes of the city center.",
      date: "May 15, 2025",
      location: "Central Stadium",
      eligibility: "Open to all ages 18+",
      fee: "$50",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Regional Basketball Cup",
      category: "team-sports",
      format: "Knockout Tournament",
      description: "Basketball tournament for club teams with knockout format.",
      date: "June 5-10, 2025",
      location: "Sports Complex",
      eligibility: "Club teams only, 12 players per team",
      fee: "$200 per team",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Summer Cricket League",
      category: "team-sports",
      format: "League",
      description: "Cricket league with round-robin matches followed by playoffs.",
      date: "July 8-30, 2025",
      location: "National Stadium",
      eligibility: "Club teams, 15 players per team",
      fee: "$250 per team",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Tennis Open",
      category: "racquet-sports",
      format: "Knockout Tournament",
      description: "Singles and doubles tennis tournament for amateur players.",
      date: "August 12-15, 2025",
      location: "Tennis Academy",
      eligibility: "Amateur players, age 16+",
      fee: "$75 individual, $120 doubles team",
      image: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Swimming Championship",
      category: "swimming",
      format: "Heats & Finals",
      description: "Multiple swimming events across different strokes and distances.",
      date: "September 3-5, 2025",
      location: "Aquatic Center",
      eligibility: "Age groups from 12 to 50+",
      fee: "$40 per participant",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Martial Arts Tournament",
      category: "combat-sports",
      format: "Knockout Tournament",
      description: "Tournament covering various martial arts disciplines.",
      date: "October 10-11, 2025",
      location: "Combat Arena",
      eligibility: "Weight categories, age 18+",
      fee: "$60 per participant",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Badminton League",
      category: "racquet-sports",
      format: "League",
      description: "Team-based badminton competition with singles and doubles matches.",
      date: "November 5-15, 2025",
      location: "Indoor Sports Hall",
      eligibility: "Club teams, 4-8 players per team",
      fee: "$150 per team",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Volleyball Challenge",
      category: "team-sports",
      format: "Round Robin",
      description: "Indoor volleyball tournament for local clubs and corporate teams.",
      date: "December 1-5, 2025",
      location: "Community Center",
      eligibility: "6-12 players per team, age 16+",
      fee: "$180 per team",
      image: "https://images.unsplash.com/photo-1574271143515-5cddf8da19be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Half Marathon",
      category: "running",
      format: "Individual Race",
      description: "21K run through the city's parks and waterfront areas.",
      date: "April 20, 2025",
      location: "Riverside Park",
      eligibility: "Open to all ages 16+",
      fee: "$40",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const formatCategoryTitle = (category: string) => {
    if (category === "all") return "All Events";
    return category
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "running": "bg-red-100 text-red-800 border-red-200",
      "team-sports": "bg-blue-100 text-blue-800 border-blue-200",
      "racquet-sports": "bg-green-100 text-green-800 border-green-200",
      "swimming": "bg-cyan-100 text-cyan-800 border-cyan-200",
      "combat-sports": "bg-orange-100 text-orange-800 border-orange-200",
      "other": "bg-purple-100 text-purple-800 border-purple-200"
    };
    
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-sport-blue text-white py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events & Services</h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover our wide range of sporting events and find the perfect competition for you.
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-sport-orange hover:bg-sport-orange/90">
                <Link to="/registration">Register Now</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                <a href="#event-formats">Event Formats</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Listing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse and register for our upcoming sports events across various categories.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full mb-8">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-white border">
                {sportCategories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="px-4 py-2 data-[state=active]:bg-sport-blue data-[state=active]:text-white"
                  >
                    {formatCategoryTitle(category)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {sportCategories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events
                    .filter(event => category === "all" || event.category === category)
                    .map((event) => (
                      <Card key={event.id} className="overflow-hidden flex flex-col h-full">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                            <Badge className={getCategoryColor(event.category)}>
                              {formatCategoryTitle(event.category)}
                            </Badge>
                          </div>
                          <CardDescription className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {event.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-4 flex-grow">
                          <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center text-gray-600">
                              <Calendar size={14} className="mr-2 text-sport-blue" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Trophy size={14} className="mr-2 text-sport-blue" />
                              <span>{event.format}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Users size={14} className="mr-2 text-sport-blue" />
                              <span>{event.eligibility}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <CircleDollarSign size={14} className="mr-2 text-sport-blue" />
                              <span>{event.fee}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button asChild className="w-full bg-sport-blue hover:bg-sport-blue/90">
                            <Link to="/registration">Register</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Event Formats */}
      <section id="event-formats" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Event Formats</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We organize various competition formats to suit different sports and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Medal className="h-12 w-12 text-sport-blue" />,
                title: "Knockout Tournament",
                description: "Single elimination format where losers are immediately eliminated and winners progress to the next round."
              },
              {
                icon: <Clock className="h-12 w-12 text-sport-blue" />,
                title: "League Format",
                description: "Teams play against each other in a round-robin schedule, accumulating points for a final standing."
              },
              {
                icon: <Users className="h-12 w-12 text-sport-blue" />,
                title: "Group Stages",
                description: "Initial group competitions followed by knockout rounds between group winners."
              },
              {
                icon: <Trophy className="h-12 w-12 text-sport-blue" />,
                title: "Individual Races",
                description: "Timed individual performances like marathons, swimming, or cycling races."
              },
              {
                icon: <Calendar className="h-12 w-12 text-sport-blue" />,
                title: "Heats & Finals",
                description: "Preliminary rounds to qualify for final competitions, common in swimming and athletics."
              },
              {
                icon: <ShieldCheck className="h-12 w-12 text-sport-blue" />,
                title: "Skills Competitions",
                description: "Events focused on specific sports skills rather than full matches or games."
              }
            ].map((format, index) => (
              <Card key={index} className="border-t-4 border-t-sport-blue">
                <CardHeader>
                  <div className="mb-4">
                    {format.icon}
                  </div>
                  <CardTitle>{format.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Rules & Eligibility */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Rules & Eligibility</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important information about participation rules and eligibility criteria.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-sport-blue">General Eligibility</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Participants must register before the event deadline.</li>
                  <li>Age restrictions vary by event and are specified in event details.</li>
                  <li>All participants must sign a waiver form before competing.</li>
                  <li>For team events, a complete team roster must be submitted during registration.</li>
                  <li>Payment must be completed to confirm registration.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-sport-blue">Competition Rules</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>All events follow the official rules of their respective sport's governing body.</li>
                  <li>Participants must arrive at least 30 minutes before their scheduled competition time.</li>
                  <li>Proper sports attire and equipment are required for participation.</li>
                  <li>The organizing committee's decision on disputes is final.</li>
                  <li>Anti-doping rules apply to all competitive events.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-sport-blue">Certificates & Recognition</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>All participants receive a digital certificate of participation.</li>
                  <li>Winners receive award certificates and medals/trophies as specified per event.</li>
                  <li>Certificates can be downloaded from the website after the event.</li>
                  <li>Results are published on the website within 48 hours of event completion.</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-sport-orange">
                <div className="flex">
                  <FileCheck className="h-6 w-6 text-sport-orange mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">Important Note:</span> Specific rules for each event are provided to registered participants via email. Make sure to check your email after registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
