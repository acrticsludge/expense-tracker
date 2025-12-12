"use client";
import SummaryCard from "@/components/SummaryCard";
import ChartCard from "@/components/ChartCard";
import ExpenseCard from "@/components/ExpenseCard";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("expenses") || "[]");
    setExpenses(stored);
  }, []);

  const totalSpent = expenses.reduce(
    (sum, e) => sum + Number((e as any).amount),
    0
  );
  const budget = 20000;
  const remaining = budget - Number(totalSpent);

  const sortedExpenses = [...expenses].sort(
    (a, b) =>
      new Date((b as any).date).getTime() - new Date((a as any).date).getTime()
  );

  const categoryTotals = expenses.reduce((acc, e) => {
    acc[(e as any).category] =
      (acc[(e as any).category] || 0) + Number((e as any).amount);
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SummaryCard title="Total Spent" value={`₹${totalSpent}`} />
        <SummaryCard title="Monthly Budget" value={`₹${budget}`} />
        <SummaryCard title="Remaining" value={`₹${remaining}`} />
      </div>

      {/* Chart Section */}
      <div className="mt-8">
        <Card className="h-64 shadow-sm border bg-white">
          <ChartCard categoryData={categoryTotals} />
        </Card>
      </div>

      {/* Recent Expenses */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>

        <div className="space-y-4">
          {sortedExpenses.map((exp = expenses as any) => (
            <ExpenseCard
              key={exp.id}
              id={exp.id}
              category={exp.category}
              amount={exp.amount}
              date={exp.date}
              payment={exp.payment}
              notes={exp.notes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
