
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, Ban } from "lucide-react";
import { toast } from "sonner";
import AdminLayout from "@/components/layout/AdminLayout";

// Mock data - replace with actual data from your backend
const mockPayments = [
  {
    id: "1",
    playerName: "John Doe",
    playerId: "P001",
    amount: "₹500",
    date: "2024-04-20",
    status: "paid"
  },
  {
    id: "2",
    playerName: "Jane Smith",
    playerId: "P002",
    amount: "₹500",
    date: "2024-04-20",
    status: "pending"
  },
  {
    id: "3",
    playerName: "Michael Johnson",
    playerId: "P003",
    amount: "₹500",
    date: "2024-04-19",
    status: "pending"
  },
  {
    id: "4",
    playerName: "Sarah Williams",
    playerId: "P004",
    amount: "₹500",
    date: "2024-04-18",
    status: "paid"
  }
];

const PaymentVerification = () => {
  const [payments, setPayments] = useState(mockPayments);
  const navigate = useNavigate();

  // Simple authentication check
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleApprovePayment = (id: string) => {
    // In a real app, send API request to update payment status
    const updatedPayments = payments.map(payment => 
      payment.id === id ? { ...payment, status: "paid" } : payment
    );
    setPayments(updatedPayments);
    toast.success(`Payment approved for ID: ${id}`);
  };

  const handleMarkUnpaid = (id: string) => {
    // In a real app, send API request to update payment status
    const updatedPayments = payments.map(payment => 
      payment.id === id ? { ...payment, status: "pending" } : payment
    );
    setPayments(updatedPayments);
    toast.info(`Payment marked as pending for ID: ${id}`);
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Payment Verification</h1>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Player ID</TableHead>
              <TableHead>Player Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.playerId}</TableCell>
                <TableCell>{payment.playerName}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    payment.status === "paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {payment.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {payment.status === "pending" ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => handleApprovePayment(payment.id)}
                      >
                        <Check className="h-4 w-4" />
                        Approve
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => handleMarkUnpaid(payment.id)}
                      >
                        <Ban className="h-4 w-4" />
                        Mark Unpaid
                      </Button>
                    )}
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

export default PaymentVerification;
