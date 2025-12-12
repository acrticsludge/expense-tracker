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
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddExpensePage() {
  interface Expense {
    id: string;
    amount: number;
    category: string;
    payment: string;
    date: string;
    notes?: string;
  }
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [payment, setPayment] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const router = useRouter();

  function handleSubmit() {
    try {
      if (!amount || !category || !payment || !date) {
        alert("Please fill all fields except notes.");
        return;
      }

      const newExpense: Expense = {
        id: crypto.randomUUID(),
        amount,
        category,
        payment,
        date,
        notes,
      };
      const oldExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");
      const updatedExpenses = [...oldExpenses, newExpense];
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      router.push("/dashboard");
    } catch (e) {
      console.log("Error: \n", e);
    }
  }
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
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label>Category</Label>
            <Select onValueChange={(value) => setCategory(value)}>
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
            <Select onValueChange={(value) => setPayment(value)}>
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
            <Input
              type="date"
              className="bg-white"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea
              placeholder="Optional"
              className="bg-white"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Button */}
          <Button
            className="w-full text-white cursor-pointer"
            onClick={handleSubmit}
          >
            Add Expense
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
