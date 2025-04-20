
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import AdminLayout from "@/components/layout/AdminLayout";

// Mock players data
const mockPlayers = [
  { id: "P001", name: "John Doe" },
  { id: "P002", name: "Jane Smith" },
  { id: "P003", name: "Michael Johnson" },
  { id: "P004", name: "Sarah Williams" }
];

const CertificateUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>("");
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
    if (!selectedPlayerId) {
      toast.error("Please select a player");
      return;
    }
    
    if (!selectedFile) {
      toast.error("Please select a file to upload");
      return;
    }

    // In a real app, upload the file to server here
    
    // Success notification
    const playerName = mockPlayers.find(p => p.id === selectedPlayerId)?.name;
    toast.success(`Certificate uploaded successfully for ${playerName}`);
    
    // Reset form
    setSelectedFile(null);
    setSelectedPlayerId("");
    
    // Reset file input
    const fileInput = document.getElementById('certificate-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Certificate Upload</h1>
      
      <Card className="max-w-md">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Player
              </label>
              <Select value={selectedPlayerId} onValueChange={setSelectedPlayerId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select player" />
                </SelectTrigger>
                <SelectContent>
                  {mockPlayers.map(player => (
                    <SelectItem key={player.id} value={player.id}>
                      {player.name} ({player.id})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Certificate File
              </label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 mb-2">
                  Upload PDF or JPG file
                </p>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.jpeg"
                  onChange={handleFileChange}
                  className="hidden"
                  id="certificate-upload"
                />
                <label htmlFor="certificate-upload">
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
              className="w-full"
              onClick={handleUpload}
              disabled={!selectedFile || !selectedPlayerId}
            >
              Upload Certificate
            </Button>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default CertificateUpload;
