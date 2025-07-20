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
import {
  BookOpen,
  TrendingDown,
  DollarSign,
  PlusCircle,
  Trash2,
  Edit2,
} from "lucide-react";

const fyOptions = ["2022-23", "2023-24", "2024-25"];
const classOptions = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
const subjectOptions = [
  "Mathematics",
  "Science",
  "English",
  "Hindi",
  "Social Studies",
];

const dummyBooks = [
  {
    fy: "2023-24",
    className: "Class 3",
    subject: "Mathematics",
    title: "Maths for Class 3",
    rate: "120",
    currentRate: "130",
    quantity: 50,
  },
  {
    fy: "2023-24",
    className: "Class 4",
    subject: "Science",
    title: "Science Explorer",
    rate: "125",
    currentRate: "135",
    quantity: 20,
  },
  {
    fy: "2022-23",
    className: "Class 5",
    subject: "English",
    title: "English Reader",
    rate: "110",
    currentRate: "120",
    quantity: 10,
  },
];

export default function RegistrationOfBooks() {
  const [fy, setFy] = useState("");
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("120"); // Example previous rate
  const [currentRate, setCurrentRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [books, setBooks] = useState(dummyBooks);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterValue, setFilterValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editBook, setEditBook] = useState(null);

  // Stats calculations
  const booksLastYear = books.filter((b) => b.fy === "2023-24").length;
  const leastQtyBook = books.reduce(
    (min, b) => (min && min.quantity < b.quantity ? min : b),
    books[0],
  );
  const avgPrice = books.length
    ? (
        books.reduce((sum, b) => sum + Number(b.currentRate), 0) / books.length
      ).toFixed(2)
    : 0;
  const recentBook = books[books.length - 1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== -1 && editBook) {
      // Edit mode
      const updatedBooks = [...books];
      updatedBooks[editIndex] = editBook;
      setBooks(updatedBooks);
      setEditIndex(-1);
      setEditBook(null);
    } else {
      setBooks([
        ...books,
        {
          fy,
          className,
          subject,
          title,
          rate,
          currentRate,
          quantity: Number(quantity),
        },
      ]);
    }
    setFy("");
    setClassName("");
    setSubject("");
    setTitle("");
    setRate("120");
    setCurrentRate("");
    setQuantity("");
  };

  const handleDelete = (idx: number) => {
    setBooks(books.filter((_, i) => i !== idx));
  };

  const handleEdit = (idx: number) => {
    setEditIndex(idx);
    setEditBook({ ...books[idx] });
  };

  const handleEditChange = (field: string, value: string) => {
    setEditBook({ ...editBook, [field]: value });
  };

  // Filtering logic
  let filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.className.toLowerCase().includes(search.toLowerCase()) ||
      book.subject.toLowerCase().includes(search.toLowerCase()),
  );
  if (filterType !== "All" && filterValue) {
    filteredBooks = filteredBooks.filter((book) =>
      filterType === "Subject"
        ? book.subject === filterValue
        : book.className === filterValue,
    );
  }

  // Colorful card backgrounds
  const cardColors = [
    "bg-gradient-to-br from-blue-100 to-blue-50",
    "bg-gradient-to-br from-green-100 to-green-50",
    "bg-gradient-to-br from-pink-100 to-pink-50",
    "bg-gradient-to-br from-yellow-100 to-yellow-50",
    "bg-gradient-to-br from-purple-100 to-purple-50",
    "bg-gradient-to-br from-orange-100 to-orange-50",
  ];

  return (
    <AdminLayout
      title="Register Book"
      description="Add a new book to the state inventory"
      adminLevel="STATE ADMIN"
    >
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Books Registered (Last 1 Year)
            </CardTitle>
            <BookOpen className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">
              {booksLastYear}
            </div>
            <p className="text-xs text-blue-700">in FY 2023-24</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-pink-100 to-pink-50 border-pink-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Least Quantity in Stock
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-900">
              {leastQtyBook?.title || "-"}
            </div>
            <p className="text-xs text-pink-700">
              Qty: {leastQtyBook?.quantity ?? "-"}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Price</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">₹{avgPrice}</div>
            <p className="text-xs text-green-700">of all books</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Recently Added Book
            </CardTitle>
            <PlusCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-900">
              {recentBook?.title || "-"}
            </div>
            <p className="text-xs text-yellow-700">
              Class: {recentBook?.className || "-"}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-center min-h-[60vh]">
        <Card className="w-full max-w-xl shadow-lg bg-gradient-to-br from-purple-100 to-purple-50 border-purple-300">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-900">
              Book Registration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 items-center">
                <label className="font-medium text-purple-900">FY</label>
                <select
                  className="border rounded px-3 py-2 bg-background"
                  value={editIndex !== -1 && editBook ? editBook.fy : fy}
                  onChange={(e) =>
                    editIndex !== -1 && editBook
                      ? handleEditChange("fy", e.target.value)
                      : setFy(e.target.value)
                  }
                  required
                >
                  <option value="">Select FY</option>
                  {fyOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                <label className="font-medium text-purple-900">Class</label>
                <select
                  className="border rounded px-3 py-2 bg-background"
                  value={
                    editIndex !== -1 && editBook
                      ? editBook.className
                      : className
                  }
                  onChange={(e) =>
                    editIndex !== -1 && editBook
                      ? handleEditChange("className", e.target.value)
                      : setClassName(e.target.value)
                  }
                  required
                >
                  <option value="">Select Class</option>
                  {classOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                <label className="font-medium text-purple-900">Subject</label>
                <select
                  className="border rounded px-3 py-2 bg-background"
                  value={
                    editIndex !== -1 && editBook ? editBook.subject : subject
                  }
                  onChange={(e) =>
                    editIndex !== -1 && editBook
                      ? handleEditChange("subject", e.target.value)
                      : setSubject(e.target.value)
                  }
                  required
                >
                  <option value="">Select Subject</option>
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                <label className="font-medium text-purple-900">Title</label>
                <Input
                  type="text"
                  value={editIndex !== -1 && editBook ? editBook.title : title}
                  onChange={(e) =>
                    editIndex !== -1 && editBook
                      ? handleEditChange("title", e.target.value)
                      : setTitle(e.target.value)
                  }
                  placeholder="Enter book title"
                  required
                  className="border-purple-300"
                />

                <label className="font-medium text-purple-900">Rate</label>
                <Input
                  type="text"
                  value={editIndex !== -1 && editBook ? editBook.rate : rate}
                  readOnly
                  className="bg-muted border-purple-300"
                />

                <label className="font-medium text-purple-900">
                  Current Rate
                </label>
                <Input
                  type="number"
                  value={
                    editIndex !== -1 && editBook
                      ? editBook.currentRate
                      : currentRate
                  }
                  onChange={(e) =>
                    editIndex !== -1 && editBook
                      ? handleEditChange("currentRate", e.target.value)
                      : setCurrentRate(e.target.value)
                  }
                  placeholder="Enter current rate"
                  required
                  className="border-purple-300"
                />

                <label className="font-medium text-purple-900">Quantity</label>
                <Input
                  type="number"
                  value={
                    editIndex !== -1 && editBook ? editBook.quantity : quantity
                  }
                  onChange={(e) =>
                    editIndex !== -1 && editBook
                      ? handleEditChange("quantity", e.target.value)
                      : setQuantity(e.target.value)
                  }
                  placeholder="Enter quantity"
                  required
                  className="border-purple-300"
                />
              </div>
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="w-1/2 text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500"
                >
                  {editIndex !== -1 ? "UPDATE" : "SUBMIT"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Search Bar and Filter */}
        <div className="w-full max-w-2xl mt-8 mb-4 flex flex-col md:flex-row gap-4 items-center">
          <Input
            type="text"
            placeholder="Search books by title, class, or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded shadow border-blue-300"
          />
          <div className="flex gap-2 w-full md:w-auto">
            <select
              className="border rounded px-3 py-2 border-green-300 bg-background"
              value={filterType}
              onChange={(e) => {
                setFilterType(e.target.value);
                setFilterValue("");
              }}
            >
              <option value="All">All</option>
              <option value="Subject">Subject</option>
              <option value="Class">Class</option>
            </select>
            {filterType !== "All" && (
              <select
                className="border rounded px-3 py-2 border-green-300 bg-background"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              >
                <option value="">Select {filterType}</option>
                {(filterType === "Subject" ? subjectOptions : classOptions).map(
                  (opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ),
                )}
              </select>
            )}
          </div>
        </div>

        {/* Book Cards */}
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book, idx) => (
            <Card
              key={idx}
              className={`shadow-md border-2 ${cardColors[idx % cardColors.length]}`}
            >
              <CardHeader>
                <CardTitle className="text-lg">{book.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div>
                    <b>FY:</b> {book.fy}
                  </div>
                  <div>
                    <b>Class:</b> {book.className}
                  </div>
                  <div>
                    <b>Subject:</b> {book.subject}
                  </div>
                  <div>
                    <b>Rate:</b> {book.rate}
                  </div>
                  <div>
                    <b>Current Rate:</b> {book.currentRate}
                  </div>
                  <div>
                    <b>Quantity:</b> {book.quantity}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-400 to-blue-400 text-white"
                    onClick={() => handleEdit(idx)}
                  >
                    <Edit2 className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-red-400 to-pink-400 text-white"
                    onClick={() => handleDelete(idx)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
