import { Card, CardContent } from "@/components/ui/card";

export default function ExpenseCard({
  title,
  amount,
  category,
  date,
}: {
  title: string;
  amount: number;
  category: string;
  date: string;
}) {
  return (
    <Card className="shadow-sm border bg-white hover:shadow-md transition">
      <CardContent className="p-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-lg">{title}</p>
          <p className="text-sm text-gray-500">
            {category} • {date}
          </p>
        </div>

        <p className="font-semibold text-lg">₹{amount}</p>
      </CardContent>
    </Card>
  );
}
