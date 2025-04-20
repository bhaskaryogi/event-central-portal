
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import AdminLayout from "@/components/layout/AdminLayout";

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
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    event: "Marathon 2024",
    date: "2024-04-15"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1597733336794-12d05021d510",
    event: "Tennis Tournament 2024",
    date: "2024-04-10"
  }
];

const GalleryManagement = () => {
  const [images, setImages] = useState(mockGalleryImages);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [eventName, setEventName] = useState("");
  const [showUploadForm, setShowUploadForm] = useState(false);
  const navigate = useNavigate();

  // Simple authentication check
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast.error("Please select a file to upload");
      return;
    }

    if (!eventName) {
      toast.error("Please enter event name");
      return;
    }

    // In a real app, upload the file to server
    // For now, create a mock URL and add to images
    const newImage = {
      id: (images.length + 1).toString(),
      url: URL.createObjectURL(selectedFile),
      event: eventName,
      date: new Date().toISOString().split('T')[0]
    };

    setImages([newImage, ...images]);
    toast.success("Image uploaded successfully");
    
    // Reset form
    setSelectedFile(null);
    setEventName("");
    setShowUploadForm(false);
    
    // Reset file input
    const fileInput = document.getElementById('gallery-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleDelete = (id: string) => {
    // In a real app, send API request to delete image
    setImages(images.filter(image => image.id !== id));
    toast.success("Image deleted successfully");
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gallery Management</h1>
        <Button 
          className="flex items-center gap-2"
          onClick={() => setShowUploadForm(!showUploadForm)}
        >
          {showUploadForm ? (
            <>
              <X className="h-4 w-4" />
              Cancel
            </>
          ) : (
            <>
              <Upload className="h-4 w-4" />
              Upload New Images
            </>
          )}
        </Button>
      </div>

      {showUploadForm && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="event-name">Event Name</Label>
                <Input 
                  id="event-name" 
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="E.g., Basketball Tournament 2024"
                />
              </div>
              
              <div>
                <Label htmlFor="gallery-upload">Image</Label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">
                    Upload JPG or PNG file
                  </p>
                  <Input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                    id="gallery-upload"
                  />
                  <label htmlFor="gallery-upload">
                    <Button variant="outline" className="mt-2">
                      Choose File
                    </Button>
                  </label>
                  {selectedFile && (
                    <p className="mt-2 text-sm text-gray-500">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>
              </div>
              
              <Button 
                onClick={handleUpload}
                disabled={!selectedFile || !eventName}
              >
                Upload Image
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

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
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => handleDelete(image.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
};

export default GalleryManagement;
