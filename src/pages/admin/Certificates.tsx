
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

const CertificateUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle file upload logic here
      console.log("Uploading file:", selectedFile);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Certificate Upload</h1>
      
      <Card className="max-w-md">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Player ID
              </label>
              <Input type="text" placeholder="Enter player ID" />
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
              disabled={!selectedFile}
            >
              Upload Certificate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificateUpload;
