"use client";
import ChartCard from "@/components/ChartCard";
import SummaryCard from "@/components/SummaryCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function AnalyticsPage() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("expenses") || "[]");
    setExpenses(stored);
  }, []);

  const totalSpent = expenses.reduce(
    (sum, e) => sum + Number((e as any).amount),
    0
  );

  const categoryTotals = expenses.reduce((acc, e) => {
    acc[(e as any).category] =
      (acc[(e as any).category] || 0) + Number((e as any).amount);
    return acc;
  }, {} as Record<string, number>);

  const highestCategory = Object.entries(categoryTotals).reduce(
    (max, [category, value]) => (value > max.value ? { category, value } : max),
    { category: "", value: 0 }
  ).category;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SummaryCard title="This Month's Spending" value={`₹${totalSpent}`} />
        <SummaryCard title="Highest Category" value={highestCategory} />
        <SummaryCard
          title="Monthly Transactions"
          value={String(expenses.length)}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Bar Chart */}
        <Card className="shadow-sm border bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Monthly Spending Trend
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full flex items-center justify-center text-gray-400">
            <ChartCard categoryData={categoryTotals} />
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="shadow-sm border bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Category Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full flex items-center justify-center text-gray-400">
            {/* Will add Recharts PieChart later */}
            Pie Chart (Coming Soon)
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
