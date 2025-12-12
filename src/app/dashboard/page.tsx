import SummaryCard from "@/components/SummaryCard";
import ChartCard from "@/components/ChartCard";
import ExpenseCard from "@/components/ExpenseCard";

export default function Dashboard() {
  const dummyExpenses = [
    {
      id: 1,
      title: "Coffee",
      amount: 120,
      category: "Food",
      date: "2025-01-12",
    },
    {
      id: 2,
      title: "Uber Ride",
      amount: 320,
      category: "Travel",
      date: "2025-01-11",
    },
    {
      id: 3,
      title: "Netflix",
      amount: 499,
      category: "Entertainment",
      date: "2025-01-10",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SummaryCard title="Total Spent" value="₹12,450" />
        <SummaryCard title="Monthly Budget" value="₹20,000" />
        <SummaryCard title="Remaining" value="₹7,550" />
      </div>

      {/* Chart Section */}
      <div className="mt-8">
        <ChartCard />
      </div>

      {/* Recent Expenses */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>

        <div className="space-y-4">
          {dummyExpenses.map((exp) => (
            <ExpenseCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
}
