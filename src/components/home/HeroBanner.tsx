
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroBanner() {
  return (
    <div className="relative bg-sport-blue text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSIxMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTAiIHI9IjIiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PGNpcmNsZSBjeD0iNDAiIGN5PSIyMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMzAiIHI9IjIiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iNDAiIHI9IjIiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIyIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMiIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iNTAiIHI9IjIiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Sports Events
              <span className="block text-sport-orange mt-1">Simplified</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Streamlined registration, certificate management, and gallery for all your sports events in one place.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-sport-orange hover:bg-sport-orange/90 text-white">
                <Link to="/registration">Register Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Explore Events</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-sport-orange to-sport-cyan blur-sm opacity-75"></div>
              <img 
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Sports Event" 
                className="relative rounded-lg w-full object-cover shadow-xl h-80 sm:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
