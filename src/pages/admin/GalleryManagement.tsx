
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Trash2 } from "lucide-react";

// Mock data - replace with actual data from your backend
const mockGalleryImages = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    event: "Basketball Tournament 2024",
    date: "2024-04-20"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    event: "Swimming Competition 2024",
    date: "2024-04-19"
  }
];

const GalleryManagement = () => {
  const [images] = useState(mockGalleryImages);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gallery Management</h1>
        <Button className="flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload New Images
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={image.url}
                alt={image.event}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{image.event}</h3>
                  <p className="text-sm text-gray-500">{image.date}</p>
                </div>
                <Button variant="outline" size="icon">
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GalleryManagement;
