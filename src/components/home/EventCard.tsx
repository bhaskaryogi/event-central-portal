
import { CalendarIcon, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  category: string;
  imageUrl: string;
  participants: string;
}

export function EventCard({ title, date, location, category, imageUrl, participants }: EventCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge className="bg-sport-orange">{category}</Badge>
        </div>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <CalendarIcon size={16} className="mr-2 text-sport-blue" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-2 text-sport-blue" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-2 text-sport-blue" />
            <span>{participants}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-sport-blue hover:bg-sport-blue/90">
          <Link to="/registration">Register</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default EventCard;
