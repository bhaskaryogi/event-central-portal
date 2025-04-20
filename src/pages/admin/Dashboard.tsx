
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  UsersRound,
  CreditCard,
  FileCheck,
  BanknoteIcon
} from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Simple authentication check
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Mock data for the dashboard
  const dashboardData = {
    totalPlayers: 245,
    paymentsReceived: "$12,250",
    certificatesUploaded: 187,
    pendingPayments: 23
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome to your admin panel</p>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Players
            </CardTitle>
            <UsersRound className="h-5 w-5 text-sport-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.totalPlayers}</div>
            <p className="text-xs text-gray-500 mt-1">
              +12 from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Payments Received
            </CardTitle>
            <CreditCard className="h-5 w-5 text-sport-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.paymentsReceived}</div>
            <p className="text-xs text-gray-500 mt-1">
              +$850 from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Certificates Uploaded
            </CardTitle>
            <FileCheck className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.certificatesUploaded}</div>
            <p className="text-xs text-gray-500 mt-1">
              {dashboardData.totalPlayers - dashboardData.certificatesUploaded} pending
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Pending Payments
            </CardTitle>
            <BanknoteIcon className="h-5 w-5 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.pendingPayments}</div>
            <p className="text-xs text-gray-500 mt-1">
              Action required
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent registrations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
            <CardDescription>Latest player registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Emily Johnson", sport: "Marathon", date: "2 hours ago", status: "Paid" },
                { name: "Michael Smith", sport: "Basketball", date: "5 hours ago", status: "Pending" },
                { name: "Sarah Williams", sport: "Swimming", date: "1 day ago", status: "Paid" },
                { name: "David Brown", sport: "Cricket", date: "1 day ago", status: "Paid" },
              ].map((player, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <UsersRound size={16} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <p className="text-xs text-gray-500">{player.sport} • {player.date}</p>
                    </div>
                  </div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      player.status === "Paid" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {player.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you can perform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { 
                title: "Verify Payments", 
                description: "Check and approve pending payments", 
                icon: <CreditCard size={18} />,
                path: "/admin/payments"
              },
              { 
                title: "Upload Certificates", 
                description: "Upload certificates for players", 
                icon: <FileCheck size={18} />,
                path: "/admin/certificates"
              },
              { 
                title: "Manage Gallery", 
                description: "Add or remove event photos", 
                icon: <ImageIcon size={18} />,
                path: "/admin/gallery" 
              },
              { 
                title: "View All Players", 
                description: "See complete player list", 
                icon: <UsersRound size={18} />,
                path: "/admin/players"
              },
            ].map((action, index) => (
                <div 
                  key={index}
                  onClick={() => navigate(action.path)}
                  className="w-full flex items-start p-3 border rounded-md cursor-pointer hover:bg-gray-50"
                >
                  <div className="mr-3 bg-gray-100 p-2 rounded-md">
                    {action.icon}
                  </div>
                  <div>
                    <p className="font-medium">{action.title}</p>
                    <p className="text-xs text-gray-500">{action.description}</p>
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
