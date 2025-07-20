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

const classOptions = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
const subjectOptions = [
  "Mathematics",
  "Science",
  "English",
  "Hindi",
  "Social Studies",
];
const initialStock = [
  { id: 1, title: "Maths for Class 3", inStock: 20, required: 50, addable: 30 },
  { id: 2, title: "Science Explorer", inStock: 10, required: 30, addable: 20 },
  { id: 3, title: "English Reader", inStock: 15, required: 40, addable: 25 },
];
const initialRequisitions = [
  {
    id: 1,
    book: "Maths for Class 3",
    className: "Class 3",
    subject: "Mathematics",
    quantity: 20,
    status: "Pending",
  },
  {
    id: 2,
    book: "Science Explorer",
    className: "Class 4",
    subject: "Science",
    quantity: 10,
    status: "Approved",
  },
];

export default function SchoolRequisition() {
  const [stock] = useState(initialStock);
  const [requisitions, setRequisitions] = useState(initialRequisitions);
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBook || !selectedClass || !selectedSubject || !quantity)
      return;
    setRequisitions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        book: selectedBook,
        className: selectedClass,
        subject: selectedSubject,
        quantity: Number(quantity),
        status: "Pending",
      },
    ]);
    setSelectedBook("");
    setSelectedClass("");
    setSelectedSubject("");
    setQuantity("");
  };

  return (
    <AdminLayout
      title="Book Requisition"
      description="Request new books for your school and track requisition status"
      adminLevel="SCHOOL ADMIN"
    >
      <Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-300 mb-8">
        <CardHeader>
          <CardTitle className="text-lg text-yellow-900">
            Current Stock & Requirement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stock.map((book) => (
              <div
                key={book.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-3 border rounded-lg bg-white mb-2"
              >
                <div className="font-semibold">{book.title}</div>
                <div className="flex gap-4 text-xs">
                  <span className="text-blue-700">
                    In Stock: {book.inStock}
                  </span>
                  <span className="text-pink-700">
                    Required: {book.required}
                  </span>
                  <span className="text-green-700">
                    Addable: {book.addable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-green-100 to-green-50 border-green-300 mb-8">
        <CardHeader>
          <CardTitle className="text-lg text-green-900">
            Create New Requisition
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col md:flex-row gap-4 items-center flex-wrap"
            onSubmit={handleSubmit}
          >
            <Input
              placeholder="Book Name"
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
              className="max-w-xs"
              required
            />
            <select
              className="border rounded px-3 py-2 bg-background"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              required
            >
              <option value="">Select Class</option>
              {classOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <select
              className="border rounded px-3 py-2 bg-background"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              required
            >
              <option value="">Select Subject</option>
              {subjectOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <Input
              type="number"
              min={1}
              max={
                selectedBook
                  ? stock.find((b) => b.title === selectedBook)?.addable || 1
                  : 1
              }
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="max-w-xs"
              required
            />
            <Button type="submit">Request</Button>
          </form>
        </CardContent>
      </Card>
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300">
        <CardHeader>
          <CardTitle className="text-lg text-blue-900">
            Past Requisitions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {requisitions.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                No requisitions found.
              </div>
            ) : (
              requisitions.map((req) => (
                <div
                  key={req.id}
                  className="flex items-center justify-between p-3 border rounded-lg bg-white"
                >
                  <div>
                    <div className="font-semibold">{req.book}</div>
                    <div className="text-xs text-gray-500">
                      Class: {req.className} | Subject: {req.subject}
                    </div>
                    <div className="text-xs text-gray-500">
                      Quantity: {req.quantity}
                    </div>
                  </div>
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
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
