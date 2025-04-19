
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters." }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  category: z.string().min(1, { message: "Please select a sports category." }),
  city: z.string().min(1, { message: "City is required." }),
  state: z.string().min(1, { message: "State is required." }),
  gender: z.enum(["male", "female", "other"], { 
    required_error: "Please select your gender." 
  }),
  idProof: z.any()
    .refine((files) => files?.length === 1, "ID proof document is required.")
    .refine(
      (files) => {
        if (files?.length === 0) return true;
        const fileType = files[0]?.type;
        return fileType === "application/pdf" || fileType?.includes("image/");
      },
      "File must be a PDF or an image."
    )
});

type FormValues = z.infer<typeof formSchema>;

export function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      category: "",
      city: "",
      state: "",
      gender: undefined,
      idProof: undefined
    }
  });
  
  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data);
    // In a real app, this would send the data to your backend
    setIsSubmitted(true);
  }
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      // Update form
      form.setValue("idProof", e.target.files, { shouldValidate: true });
    }
  };
  
  const sportCategories = [
    "Athletics", "Basketball", "Cricket", "Football", "Tennis", 
    "Swimming", "Volleyball", "Badminton", "Table Tennis", "Other"
  ];

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto my-10 text-center p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6 text-sport-blue">
          <QrCode size={100} className="mx-auto" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
        <p className="mb-6 text-gray-600">
          Please complete your registration by making the payment using the QR code below.
        </p>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
            alt="Payment QR Code" 
            className="mx-auto w-48 h-48"
          />
          <p className="mt-3 text-sm text-gray-500">Scan to pay registration fee</p>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          Your registration ID: <span className="font-bold">REG-{Math.floor(100000 + Math.random() * 900000)}</span>
        </p>
        
        <Button 
          onClick={() => setIsSubmitted(false)} 
          className="bg-sport-blue hover:bg-sport-blue/90"
        >
          Register Another Player
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-sport-blue">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Female</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="other" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Other</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-sport-blue">Event Details</h2>
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sports Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sports category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sportCategories.map(category => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="New York" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="New York" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="idProof"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Proof (PDF or Image)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,image/*"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                  </FormControl>
                  <FormMessage />
                  {selectedFile && (
                    <p className="text-sm text-gray-500">Selected: {selectedFile.name}</p>
                  )}
                </FormItem>
              )}
            />
          </div>
          
          <Card className="bg-gray-50 border-sport-orange border-l-4">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600">
                By submitting this form, you agree to our terms and conditions. A payment of <strong>$50</strong> will be required to complete your registration.
              </p>
            </CardContent>
          </Card>
          
          <Button 
            type="submit" 
            className="w-full bg-sport-orange hover:bg-sport-orange/90"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit Registration"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default RegistrationForm;
