
import { useState } from "react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, User, MapPin } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  event: string;
  date: string;
  venue: string;
  category: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  
  // Extract unique categories for tabs
  const categories = ["all", ...Array.from(new Set(images.map(img => img.category.toLowerCase())))];
  
  // Filter images based on active tab
  const filteredImages = activeTab === "all" 
    ? images 
    : images.filter(img => img.category.toLowerCase() === activeTab);

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="bg-gray-100">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <Card key={image.id} className="overflow-hidden group cursor-pointer">
                  <Dialog>
                    <DialogTrigger asChild>
                      <CardContent className="p-0" onClick={() => setSelectedImage(image)}>
                        <div className="relative overflow-hidden">
                          <div className="aspect-square overflow-hidden">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <p className="text-white font-medium truncate">{image.event}</p>
                            <p className="text-white/80 text-sm truncate">{image.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-[90vw] p-1 bg-transparent border-none">
                      {selectedImage && (
                        <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
                          <div className="md:w-2/3 relative">
                            <img 
                              src={selectedImage.src} 
                              alt={selectedImage.alt} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:w-1/3 p-6 flex flex-col">
                            <h3 className="text-xl font-bold text-sport-blue mb-2">{selectedImage.event}</h3>
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-gray-600">
                                <Calendar size={16} className="mr-2 text-sport-orange" />
                                <span>{selectedImage.date}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <MapPin size={16} className="mr-2 text-sport-orange" />
                                <span>{selectedImage.venue}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <User size={16} className="mr-2 text-sport-orange" />
                                <span>{selectedImage.category}</span>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-6">
                              Capturing the excitement and spirit of our {selectedImage.category} event at {selectedImage.venue}.
                            </p>
                            <div className="mt-auto">
                              <Button className="w-full bg-sport-blue hover:bg-sport-blue/90">
                                Download Image
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default GalleryGrid;
