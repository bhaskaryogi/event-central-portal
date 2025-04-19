
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  UsersRound,
  CreditCard,
  FileCheck,
  LogOut,
  LayoutDashboard,
  Users,
  FileText,
  ImageIcon,
  BanknoteIcon
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Simple authentication check
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    navigate("/admin/login");
  };

  // Mock data for the dashboard
  const dashboardData = {
    totalPlayers: 245,
    paymentsReceived: "$12,250",
    certificatesUploaded: 187,
    pendingPayments: 23
  };

  // Admin menu items
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/admin/dashboard", active: true },
    { icon: <Users size={20} />, label: "Player Management", path: "/admin/players" },
    { icon: <FileText size={20} />, label: "Certificate Upload", path: "/admin/certificates" },
    { icon: <BanknoteIcon size={20} />, label: "Payment Verification", path: "/admin/payments" },
    { icon: <ImageIcon size={20} />, label: "Gallery Management", path: "/admin/gallery" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-xl font-bold text-sport-blue">Admin Panel</h2>
        </div>
        <Separator />
        <nav className="mt-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-md text-sm ${
                    item.active 
                      ? "bg-sport-blue text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center border-gray-200"
            onClick={handleLogout}
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Welcome to your admin panel</p>
          </div>
          <Button 
            variant="outline" 
            className="md:hidden flex items-center"
            onClick={handleLogout}
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
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
                  icon: <FileText size={18} />,
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
                  icon: <Users size={18} />,
                  path: "/admin/players"
                },
              ].map((action, index) => (
                <Button 
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 border-gray-200"
                >
                  <div className="flex items-start">
                    <div className="mr-3 bg-gray-100 p-2 rounded-md">
                      {action.icon}
                    </div>
                    <div>
                      <p className="font-medium">{action.title}</p>
                      <p className="text-xs text-gray-500">{action.description}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
