
import { EventCard } from "./EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function UpcomingEvents() {
  // Mock data for upcoming events
  const events = [
    {
      id: 1,
      title: "City Marathon 2025",
      date: "May 15, 2025",
      location: "Central Stadium",
      category: "Running",
      imageUrl: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      participants: "500+ registered",
    },
    {
      id: 2,
      title: "Regional Basketball Cup",
      date: "June 5-10, 2025",
      location: "Sports Complex",
      category: "Basketball",
      imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      participants: "16 teams",
    },
    {
      id: 3,
      title: "Summer Cricket League",
      date: "July 8-30, 2025",
      location: "National Stadium",
      category: "Cricket",
      imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      participants: "24 teams",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Register for these upcoming events and be part of the sporting excitement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard 
              key={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              category={event.category}
              imageUrl={event.imageUrl}
              participants={event.participants}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-sport-blue hover:bg-sport-blue/90">
            <Link to="/services">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
