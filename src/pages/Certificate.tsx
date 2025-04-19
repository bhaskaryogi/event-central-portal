
import MainLayout from "@/components/layout/MainLayout";
import CertificateForm from "@/components/forms/CertificateForm";
import { FileText, CheckCircle2, Download } from "lucide-react";

const Certificate = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-2 text-sport-blue">Certificate Download</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Enter your details to retrieve and download your event participation or achievement certificate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <FileText className="h-8 w-8 text-sport-blue" />,
                  title: "Enter Details",
                  description: "Provide your Player ID and name as registered"
                },
                {
                  icon: <CheckCircle2 className="h-8 w-8 text-sport-blue" />,
                  title: "Verify",
                  description: "Our system verifies your participation and achievement"
                },
                {
                  icon: <Download className="h-8 w-8 text-sport-blue" />,
                  title: "Download",
                  description: "Download your certificate in high-quality PDF format"
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            
            <CertificateForm />
            
            <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-sport-blue">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    question: "When will my certificate be available?",
                    answer: "Certificates are typically available within 7 days after the event's completion."
                  },
                  {
                    question: "I've forgotten my Player ID. What should I do?",
                    answer: "Check your registration confirmation email for your Player ID, or contact our support team for assistance."
                  },
                  {
                    question: "Can I request a physical copy of my certificate?",
                    answer: "We primarily offer digital certificates, but physical copies can be requested for a small fee by contacting our office."
                  },
                  {
                    question: "My certificate shows incorrect information. How can I get it fixed?",
                    answer: "Please contact our support team with your correct details, and we'll issue a corrected certificate."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-semibold mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Certificate;
