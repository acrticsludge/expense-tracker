import { Card, CardContent } from "@/components/ui/card";

export default function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Card className="shadow-sm border bg-white">
      <CardContent className="p-6">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-semibold mt-2">{value}</p>
      </CardContent>
    </Card>
  );
}
