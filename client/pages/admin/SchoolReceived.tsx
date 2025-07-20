import AdminLayout from "@/components/AdminLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const dummyReceived = [
  {
    id: 1,
    date: "2024-06-01",
    title: "Maths for Class 3",
    quantity: 20,
    requisitioned: 30,
  },
  {
    id: 2,
    date: "2024-05-28",
    title: "Science Explorer",
    quantity: 10,
    requisitioned: 15,
  },
  {
    id: 3,
    date: "2024-05-25",
    title: "English Reader",
    quantity: 15,
    requisitioned: 20,
  },
];

export default function SchoolReceived() {
  return (
    <AdminLayout
      title="Books Received"
      description="View all books received by your school"
      adminLevel="SCHOOL ADMIN"
    >
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-green-100 to-green-50 border-green-300">
        <CardHeader>
          <CardTitle className="text-lg text-green-900">
            Books Received
          </CardTitle>
          <CardDescription>All books received by your school</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dummyReceived.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                No books received yet.
              </div>
            ) : (
              dummyReceived.map((rec) => {
                const percent = Math.min(
                  100,
                  Math.round((rec.quantity / rec.requisitioned) * 100),
                );
                const left = Math.max(0, rec.requisitioned - rec.quantity);
                return (
                  <div
                    key={rec.id}
                    className="flex flex-col gap-2 p-3 border rounded-lg bg-white"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{rec.title}</div>
                        <div className="text-xs text-gray-500">
                          Date: {rec.date}
                        </div>
                        <div className="text-xs text-gray-500">
                          Requisitioned: {rec.requisitioned}
                        </div>
                      </div>
                      <span className="text-green-700 font-semibold">
                        Qty: {rec.quantity}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={percent} className="w-full h-3" />
                      <span className="text-xs text-gray-600 min-w-[60px] text-right">
                        {percent}%
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {left === 0
                        ? "All books received"
                        : `${left} left to receive`}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
