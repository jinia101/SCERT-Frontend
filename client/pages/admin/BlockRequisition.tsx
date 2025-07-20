import AdminLayout from "@/components/AdminLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const dummyRequisitions = [
  {
    id: 1,
    school: "Sunrise Public School",
    book: "Maths for Class 3",
    className: "Class 3",
    subject: "Mathematics",
    requested: 20,
    inStock: 10,
    required: 50,
    addable: 30,
    quantity: 20,
    status: "Pending",
    remark: "",
  },
  {
    id: 2,
    school: "Green Valley School",
    book: "Science Explorer",
    className: "Class 4",
    subject: "Science",
    requested: 10,
    inStock: 5,
    required: 30,
    addable: 25,
    quantity: 10,
    status: "Approved",
    remark: "Urgent requirement.",
  },
];

export default function BlockRequisition() {
  const [requisitions, setRequisitions] = useState(dummyRequisitions);
  const [remarks, setRemarks] = useState<{ [key: number]: string }>({});

  const handleRemarkChange = (id: number, value: string) => {
    setRemarks((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddRemark = (id: number) => {
    setRequisitions((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, remark: remarks[id] || "" } : req,
      ),
    );
    setRemarks((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <AdminLayout
      title="School Requisitions"
      description="View and remark on school book requisitions"
      adminLevel="INSTITUTIONAL SUPERVISOR"
    >
      <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
        {requisitions.map((req) => (
          <Card
            key={req.id}
            className={`border-2 ${
              req.status === "Approved"
                ? "bg-gradient-to-br from-green-100 to-green-50 border-green-400"
                : "bg-gradient-to-br from-yellow-100 to-pink-50 border-pink-300"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">
                {req.school}
              </CardTitle>
              <CardDescription>
                {req.book} | {req.className} | {req.subject}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <span className="text-xs text-blue-700">
                  In Stock: {req.inStock}
                </span>
                <span className="text-xs text-pink-700">
                  Required: {req.required}
                </span>
                <span className="text-xs text-green-700">
                  Addable: {req.addable}
                </span>
                <span className="text-xs text-gray-700">
                  Requested: {req.requested}
                </span>
                <span className="text-xs text-gray-700">
                  Quantity: {req.quantity}
                </span>
                <span
                  className={
                    req.status === "Approved"
                      ? "text-green-700 font-semibold"
                      : req.status === "Pending"
                        ? "text-yellow-700 font-semibold"
                        : "text-red-700 font-semibold"
                  }
                >
                  {req.status}
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <Input
                  placeholder="Add remark"
                  value={remarks[req.id] || ""}
                  onChange={(e) => handleRemarkChange(req.id, e.target.value)}
                  className="max-w-xs"
                />
                <Button
                  size="sm"
                  className="bg-blue-200 text-blue-900 hover:bg-blue-300"
                  onClick={() => handleAddRemark(req.id)}
                  disabled={!remarks[req.id]}
                >
                  Add Remark
                </Button>
                {req.remark && (
                  <span className="text-xs text-purple-700 font-semibold ml-2">
                    Remark: {req.remark}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
}
