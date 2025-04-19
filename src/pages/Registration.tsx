
import MainLayout from "@/components/layout/MainLayout";
import RegistrationForm from "@/components/forms/RegistrationForm";

const Registration = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-2 text-sport-blue">Event Registration</h1>
              <p className="text-gray-600">
                Fill out the form below to register for our upcoming sports events.
              </p>
            </div>
            
            <RegistrationForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Registration;
