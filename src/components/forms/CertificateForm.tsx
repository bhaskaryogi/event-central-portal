
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { FileDown, FileX, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  playerId: z.string().min(3, { message: "Player ID must be at least 3 characters." }),
  playerName: z.string().min(3, { message: "Player name must be at least 3 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

interface CertificateStatus {
  status: "found" | "not-found" | null;
  certificateUrl?: string;
  playerName?: string;
  eventName?: string;
  date?: string;
}

export function CertificateForm() {
  const [certificateStatus, setCertificateStatus] = useState<CertificateStatus>({ status: null });
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerId: "",
      playerName: "",
    },
  });
  
  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data);
    
    // Simulate certificate lookup
    // In a real app, this would check your database
    if (data.playerId.toLowerCase() === "reg123456" && 
        data.playerName.toLowerCase() === "john doe") {
      setCertificateStatus({
        status: "found",
        certificateUrl: "#certificate-download-link",
        playerName: "John Doe",
        eventName: "City Marathon 2025",
        date: "May 15, 2025"
      });
    } else {
      setCertificateStatus({ status: "not-found" });
    }
  }

  return (
    <div className="max-w-xl mx-auto my-10">
      <Card>
        <CardHeader className="bg-sport-blue text-white rounded-t-lg">
          <CardTitle>Certificate Download</CardTitle>
          <CardDescription className="text-gray-100">
            Enter your details to download your event certificate
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="playerId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Player ID</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. REG123456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="playerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="As provided during registration" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-sport-blue hover:bg-sport-blue/90"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Checking..." : "Check Certificate"}
                </Button>
              </div>
            </form>
          </Form>
          
          {certificateStatus.status === "found" && (
            <div className="mt-6">
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-700">Certificate Found!</AlertTitle>
                <AlertDescription className="text-green-600">
                  Your certificate is ready for download.
                </AlertDescription>
              </Alert>
              
              <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                <h3 className="font-medium text-lg mb-2">{certificateStatus.playerName}</h3>
                <p className="text-gray-600 text-sm mb-1">Event: {certificateStatus.eventName}</p>
                <p className="text-gray-600 text-sm mb-4">Date: {certificateStatus.date}</p>
                
                <Button className="w-full bg-sport-orange hover:bg-sport-orange/90 flex items-center justify-center">
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
              </div>
            </div>
          )}
          
          {certificateStatus.status === "not-found" && (
            <div className="mt-6">
              <Alert className="bg-red-50 border-red-200">
                <FileX className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-700">Certificate Not Found</AlertTitle>
                <AlertDescription className="text-red-600">
                  We couldn't find a certificate matching the details provided. Please check your Player ID and name, or contact support.
                </AlertDescription>
              </Alert>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>Here are some possible reasons:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Your certificate may not be ready yet</li>
                  <li>There might be a typo in your Player ID or name</li>
                  <li>Your payment status may be pending</li>
                </ul>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="bg-gray-50 text-sm text-gray-500 border-t px-6 py-4 rounded-b-lg">
          For demo purposes, try with ID: REG123456 and Name: John Doe
        </CardFooter>
      </Card>
    </div>
  );
}

export default CertificateForm;
