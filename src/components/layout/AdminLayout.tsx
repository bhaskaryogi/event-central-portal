
import { ReactNode } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  ImageIcon, 
  BanknoteIcon,
  LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    navigate("/admin/login");
  };

  // Admin menu items
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/admin/dashboard" },
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
                    currentPath === item.path
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
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
