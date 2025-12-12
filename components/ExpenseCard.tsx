import { Card, CardContent } from "@/components/ui/card";

export default function ExpenseCard({
  id,
  amount,
  category,
  payment,
  date,
  notes,
}: {
  id: string;
  amount: number;
  category: string;
  payment: string;
  date: string;
  notes: string;
}) {
  return (
    <Card className="shadow-sm border bg-white hover:shadow-md transition">
      <CardContent className="p-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-lg">{category}</p>
          <p className="text-sm text-gray-500">
            {payment} • {date}
          </p>
          <br></br>
          <p>{notes}</p>
        </div>

        <p className="font-semibold text-lg">₹{amount}</p>
      </CardContent>
    </Card>
  );
}
