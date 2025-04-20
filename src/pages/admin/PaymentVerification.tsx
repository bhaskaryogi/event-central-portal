
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

// Mock data - replace with actual data from your backend
const mockPayments = [
  {
    id: "1",
    playerName: "John Doe",
    amount: "₹500",
    date: "2024-04-20",
    status: "paid"
  },
  {
    id: "2",
    playerName: "Jane Smith",
    amount: "₹500",
    date: "2024-04-20",
    status: "pending"
  }
];

const PaymentVerification = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Payment Verification</h1>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Player Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPayments.map((payment) => (
              <TableRow key={payment.id}>
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
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Check className="h-4 w-4" />
                        Approve
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
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
    </div>
  );
};

export default PaymentVerification;
