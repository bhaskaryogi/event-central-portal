
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import AdminLayout from "@/components/layout/AdminLayout";

// Mock data - replace with actual data from your backend
const mockPlayers = [
  {
    id: "P001",
    name: "John Doe",
    email: "john@example.com",
    category: "Swimming",
    paymentStatus: "paid",
  },
  {
    id: "P002", 
    name: "Jane Smith",
    email: "jane@example.com",
    category: "Basketball",
    paymentStatus: "pending"
  },
  {
    id: "P003", 
    name: "Michael Johnson",
    email: "michael@example.com",
    category: "Tennis",
    paymentStatus: "paid"
  },
  {
    id: "P004", 
    name: "Sarah Williams",
    email: "sarah@example.com",
    category: "Football",
    paymentStatus: "pending"
  }
];

const PlayersManagement = () => {
  const [players, setPlayers] = useState(mockPlayers);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Simple authentication check
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setPlayers(mockPlayers);
      return;
    }
    
    const filtered = mockPlayers.filter(player => 
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setPlayers(filtered);
  };

  const handleEdit = (id: string) => {
    toast.info(`Editing player with ID: ${id}`);
    // In a real app, open an edit modal or redirect to edit page
  };

  const handleDelete = (id: string) => {
    // In a real app, show confirmation dialog and delete from database
    const filteredPlayers = players.filter(player => player.id !== id);
    setPlayers(filteredPlayers);
    toast.success(`Player with ID ${id} deleted successfully`);
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Player Management</h1>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search players..."
              className="w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button variant="outline" size="icon" onClick={handleSearch}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Player ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.id}>
                <TableCell>{player.id}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.email}</TableCell>
                <TableCell>{player.category}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    player.paymentStatus === "paid" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {player.paymentStatus}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleEdit(player.id)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleDelete(player.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default PlayersManagement;
