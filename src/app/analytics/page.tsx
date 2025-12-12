import SummaryCard from "@/components/SummaryCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SummaryCard title="This Month's Spending" value="₹12,450" />
        <SummaryCard title="Highest Category" value="Food" />
        <SummaryCard title="Monthly Transactions" value="22" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Bar Chart */}
        <Card className="h-72 shadow-sm border bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Monthly Spending Trend
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full flex items-center justify-center text-gray-400">
            {/* Will add Recharts BarChart later */}
            Bar Chart (Coming Soon)
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="h-72 shadow-sm border bg-white">
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
