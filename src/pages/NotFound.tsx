import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="mb-6 text-sport-blue">
            <div className="text-9xl font-bold">404</div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-sport-blue hover:bg-sport-blue/90">
              <Link to="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" /> 
                Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
