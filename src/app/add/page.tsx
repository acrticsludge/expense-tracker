"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function AddExpensePage() {
  return (
    <div className="max-w-md mx-auto pt-10 px-4">
      <Card className="shadow-sm border bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Add New Expense
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Amount */}
          <div className="space-y-2">
            <Label>Amount (₹)</Label>
            <Input
              type="number"
              placeholder="Enter amount"
              className="bg-white"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">🍔 Food</SelectItem>
                <SelectItem value="travel">🚕 Travel</SelectItem>
                <SelectItem value="entertainment">🎮 Entertainment</SelectItem>
                <SelectItem value="shopping">🛒 Shopping</SelectItem>
                <SelectItem value="education">🎓 Education</SelectItem>
                <SelectItem value="other">🔘 Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <Label>Payment Method</Label>
            <Select>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upi">UPI</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="card">Card</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label>Date</Label>
            <Input type="date" className="bg-white" />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea placeholder="Optional" className="bg-white" />
          </div>

          {/* Button */}
          <Button className="w-full text-white">Add Expense</Button>
        </CardContent>
      </Card>
    </div>
  );
}
