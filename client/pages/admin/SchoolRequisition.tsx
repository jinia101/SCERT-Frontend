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
// Dummy stock data per class
const stockPerClass = {
  "Class 1": [
    { subject: "Mathematics", book: "Maths for Class 1", stock: 12 },
    { subject: "English", book: "English Reader 1", stock: 10 },
    { subject: "Hindi", book: "Hindi Basics 1", stock: 8 },
  ],
  "Class 2": [
    { subject: "Mathematics", book: "Maths for Class 2", stock: 15 },
    { subject: "English", book: "English Reader 2", stock: 11 },
    { subject: "Hindi", book: "Hindi Basics 2", stock: 9 },
  ],
  "Class 3": [
    { subject: "Mathematics", book: "Maths for Class 3", stock: 20 },
    { subject: "Science", book: "Science Explorer", stock: 10 },
    { subject: "English", book: "English Reader", stock: 15 },
  ],
  "Class 4": [
    { subject: "Mathematics", book: "Maths for Class 4", stock: 18 },
    { subject: "Science", book: "Science Explorer 4", stock: 12 },
    { subject: "English", book: "English Reader 4", stock: 13 },
  ],
  "Class 5": [
    { subject: "Mathematics", book: "Maths for Class 5", stock: 16 },
    { subject: "Science", book: "Science Explorer 5", stock: 14 },
    { subject: "English", book: "English Reader 5", stock: 12 },
  ],
};
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

// Add dummy data for students per class
const studentsPerClass = {
  "Class 1": 30,
  "Class 2": 28,
  "Class 3": 32,
  "Class 4": 27,
  "Class 5": 25,
};

export default function SchoolRequisition() {
  const [requisitions, setRequisitions] = useState(initialRequisitions);
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedStockClass, setSelectedStockClass] = useState(classOptions[0]);

  // Find stock for selected book
  const allBooks = Object.values(stockPerClass).flat();
  const selectedBookStock = selectedBook
    ? allBooks.find((b) => b.book === selectedBook)?.stock
    : null;
  // Get number of students in selected class
  const selectedClassStudents = selectedClass
    ? studentsPerClass[selectedClass]
    : null;

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
          <CardTitle className="text-lg text-yellow-900">Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <select
              className="border rounded px-3 py-2 bg-background"
              value={selectedStockClass}
              onChange={(e) => setSelectedStockClass(e.target.value)}
            >
              {classOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg bg-white">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="px-4 py-2 text-left">Subject</th>
                  <th className="px-4 py-2 text-left">Book Name</th>
                  <th className="px-4 py-2 text-left">Stock</th>
                </tr>
              </thead>
              <tbody>
                {stockPerClass[selectedStockClass].map((row, idx) => (
                  <tr key={row.book + idx} className="border-b">
                    <td className="px-4 py-2">{row.subject}</td>
                    <td className="px-4 py-2">{row.book}</td>
                    <td className="px-4 py-2">{row.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 flex-wrap items-center">
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
              <select
                className="border rounded px-3 py-2 bg-background"
                value={selectedBook}
                onChange={(e) => setSelectedBook(e.target.value)}
                required
              >
                <option value="">Select Book Name</option>
                {allBooks.map((b) => (
                  <option key={b.book} value={b.book}>
                    {b.book}
                  </option>
                ))}
              </select>
            </div>
            {/* Show number of students and stock available after selections */}
            {selectedClass && (
              <div className="flex gap-8 text-sm text-gray-700">
                <div>
                  Number of Students in {selectedClass}:{" "}
                  <span className="font-semibold">{selectedClassStudents}</span>
                </div>
                {selectedBook && (
                  <div>
                    Stock Available:{" "}
                    <span className="font-semibold">{selectedBookStock}</span>
                  </div>
                )}
              </div>
            )}
            <Input
              type="number"
              min={1}
              placeholder="Number of books needed"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="max-w-xs"
              required
            />
            <Button type="submit">Create Requisition</Button>
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
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg bg-white">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-4 py-2 text-left">Requisition No</th>
                  <th className="px-4 py-2 text-left">Class</th>
                  <th className="px-4 py-2 text-left">Subject</th>
                  <th className="px-4 py-2 text-left">Book Name</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {requisitions.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center text-gray-500 py-8">
                      No requisitions found.
                    </td>
                  </tr>
                ) : (
                  requisitions.map((req) => (
                    <tr key={req.id} className="border-b">
                      <td className="px-4 py-2">{`REQ-${req.id.toString().padStart(3, "0")}`}</td>
                      <td className="px-4 py-2">{req.className}</td>
                      <td className="px-4 py-2">{req.subject}</td>
                      <td className="px-4 py-2">{req.book}</td>
                      <td className="px-4 py-2">{req.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
