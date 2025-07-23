import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const ncertBookNames = [
  "Mathematics Textbook for Class X",
  "Science Textbook for Class IX",
  "Social Science: Contemporary India - II",
  "English: First Flight",
  "Hindi: Kshitij - 2",
  "Physics: Textbook for Class XII",
  "Chemistry: Textbook for Class XI",
  "Biology: Textbook for Class XII",
  "Economics: Indian Economic Development",
  "History: Themes in Indian History - I",
  "Geography: Fundamentals of Physical Geography",
  "Political Science: Indian Constitution at Work",
];

const initialReceived = [
  {
    id: 1,
    requisitionNo: "REQ-001",
    class: "3",
    bookName: "Maths for Class 3",
    requisitioned: 30,
    received: 20,
  },
  {
    id: 2,
    requisitionNo: "REQ-002",
    class: "5",
    bookName: "Science Explorer",
    requisitioned: 15,
    received: 10,
  },
  {
    id: 3,
    requisitionNo: "REQ-003",
    class: "4",
    bookName: "English Reader",
    requisitioned: 20,
    received: 15,
  },
];

export default function SchoolReceived() {
  const [receivedData, setReceivedData] = useState(initialReceived);

  const handleReceivedChange = (id: number, value: string) => {
    const num = Math.max(0, Number(value.replace(/[^0-9]/g, "")));
    setReceivedData((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              received: num > row.requisitioned ? row.requisitioned : num,
            }
          : row,
      ),
    );
  };

  const handleAddRow = () => {
    const newId = receivedData.length > 0 ? Math.max(...receivedData.map((item) => item.id)) + 1 : 1;
    const randomBookName = ncertBookNames[Math.floor(Math.random() * ncertBookNames.length)];
    const newRow = {
      id: newId,
      requisitionNo: `REQ-${String(newId).padStart(3, '0')}`,
      class: `Class ${Math.floor(Math.random() * 10) + 1}`,
      bookName: randomBookName,
      requisitioned: Math.floor(Math.random() * 100) + 50,
      received: 0,
    };
    setReceivedData((prev) => [...prev, newRow]);
  };

  return (
    <AdminLayout
      title="Books Received"
      description="View all books received by your school"
      adminLevel="SCHOOL ADMIN"
    >
      <Card className="w-full max-w-5xl mx-auto bg-gradient-to-br from-green-100 to-green-50 border-green-300">
        <CardHeader>
          <CardTitle className="text-lg text-green-900">
              Books Received
            </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border bg-white rounded-lg">
              <thead>
                <tr className="bg-green-200 text-green-900">
                  <th className="px-4 py-2 border">Requisition No</th>
                  <th className="px-4 py-2 border">Class</th>
                  <th className="px-4 py-2 border">Book Name</th>
                  <th className="px-4 py-2 border">Requisition Asked</th>
                  <th className="px-4 py-2 border">Received</th>
                  <th className="px-4 py-2 border">Left</th>
                </tr>
              </thead>
              <tbody>
                {receivedData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-500">
                      No books received yet.
                    </td>
                  </tr>
                ) : (
                  receivedData.map((row) => (
                    <tr key={row.id} className="text-center">
                      <td className="px-4 py-2 border">{row.requisitionNo}</td>
                      <td className="px-4 py-2 border">{row.class}</td>
                      <td className="px-4 py-2 border">{row.bookName}</td>
                      <td className="px-4 py-2 border">{row.requisitioned}</td>
                      <td className="px-4 py-2 border">
                        <Input
                          type="number"
                          min={0}
                          max={row.requisitioned}
                          value={row.received}
                          onChange={(e) =>
                            handleReceivedChange(row.id, e.target.value)
                          }
                          className="w-20 px-2 py-1 border rounded text-center"
                        />
                      </td>
                      <td className="px-4 py-2 border font-semibold">
                        {row.requisitioned - row.received}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <Button onClick={handleAddRow}>
              <Plus className="h-4 w-4 mr-2" /> Add New
            </Button>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
