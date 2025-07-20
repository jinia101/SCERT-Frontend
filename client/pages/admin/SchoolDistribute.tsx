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
import { Plus, Edit2, Save } from "lucide-react";

const classOptions = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
const bookOptions = [
  "Maths for Class 3",
  "Science Explorer",
  "English Reader",
  "Hindi Basics",
];

// Add initial student counts for each class
const initialClassStudentCounts = classOptions.map((className) => ({
  className,
  studentCount: 0,
}));

type Distribution = {
  id: number;
  date: string;
  book: string;
  className: string;
  section: string;
  numBooks: number;
};

const initialDistributions: Distribution[] = [
  {
    id: 1,
    date: "2024-06-01",
    book: "Maths for Class 3",
    className: "Class 3",
    section: "A",
    numBooks: 2,
  },
  {
    id: 2,
    date: "2024-05-28",
    book: "Science Explorer",
    className: "Class 4",
    section: "B",
    numBooks: 1,
  },
];

export default function SchoolDistribute() {
  const [distributions, setDistributions] =
    useState<Distribution[]>(initialDistributions);
  const [book, setBook] = useState("");
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [numBooks, setNumBooks] = useState("");
  const [classStudentCounts, setClassStudentCounts] = useState(
    initialClassStudentCounts,
  );
  // Track which cards are in edit mode
  const [editModes, setEditModes] = useState(
    initialClassStudentCounts.map(() => false),
  );
  // For new class input
  const [newClassName, setNewClassName] = useState("");
  const [newClassCount, setNewClassCount] = useState(0);
  const [addingClass, setAddingClass] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !book ||
      !className ||
      !numBooks ||
      isNaN(Number(numBooks)) ||
      Number(numBooks) <= 0
    )
      return;
    setDistributions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        date: new Date().toISOString().slice(0, 10),
        book,
        className,
        section,
        numBooks: Number(numBooks),
      },
    ]);
    setBook("");
    setClassName("");
    setSection("");
    setNumBooks("");
  };

  // Handler for updating student count for a class
  const handleStudentCountChange = (idx: number, value: string) => {
    const count = Math.max(0, parseInt(value) || 0);
    setClassStudentCounts((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, studentCount: count } : item,
      ),
    );
  };

  // Handler for toggling edit mode
  const handleEditToggle = (idx: number) => {
    setEditModes((prev) => prev.map((mode, i) => (i === idx ? !mode : mode)));
  };

  // Handler for saving (just disables edit mode)
  const handleSave = (idx: number) => {
    setEditModes((prev) => prev.map((mode, i) => (i === idx ? false : mode)));
  };

  // Handler for starting to add a new class
  const handleAddClassStart = () => {
    setAddingClass(true);
    setNewClassName("");
    setNewClassCount(0);
  };

  // Handler for saving a new class
  const handleAddClassSave = () => {
    if (!newClassName.trim()) return;
    setClassStudentCounts((prev) => [
      ...prev,
      { className: newClassName.trim(), studentCount: newClassCount },
    ]);
    setEditModes((prev) => [...prev, false]);
    setAddingClass(false);
    setNewClassName("");
    setNewClassCount(0);
  };

  // Handler for editing a newly added class
  const handleEditNewClass = (idx: number) => {
    setEditModes((prev) => prev.map((mode, i) => (i === idx ? true : mode)));
  };

  return (
    <AdminLayout
      title="Distribute Books"
      description="Record and view book distributions to students"
      adminLevel="SCHOOL ADMIN"
    >
      {/* Student Count Cards for Each Class */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {classStudentCounts.map((cls, idx) => (
          <Card
            key={cls.className}
            className="bg-gradient-to-br from-green-100 to-green-50 border-green-300"
          >
            <CardHeader className="flex flex-row items-center justify-between gap-2">
              <div>
                <CardTitle className="text-base text-green-900">
                  {cls.className}
                </CardTitle>
                <CardDescription>Set number of students</CardDescription>
              </div>
              {editModes[idx] ? (
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleSave(idx)}
                  title="Save"
                >
                  <Save className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleEditToggle(idx)}
                  title="Edit"
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min={0}
                  value={cls.studentCount}
                  onChange={(e) =>
                    handleStudentCountChange(idx, e.target.value)
                  }
                  className="w-24"
                  disabled={!editModes[idx]}
                />
                <span className="text-sm text-gray-600">students</span>
              </div>
            </CardContent>
          </Card>
        ))}
        {/* Add new class card */}
        {addingClass ? (
          <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-300">
            <CardHeader>
              <CardTitle className="text-base text-green-900">
                New Class
              </CardTitle>
              <CardDescription>
                Enter class name and student count
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <Input
                  placeholder="Class Name"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  className="w-full"
                />
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min={0}
                    value={newClassCount}
                    onChange={(e) =>
                      setNewClassCount(
                        Math.max(0, parseInt(e.target.value) || 0),
                      )
                    }
                    className="w-24"
                  />
                  <span className="text-sm text-gray-600">students</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button
                    onClick={handleAddClassSave}
                    size="sm"
                    variant="default"
                  >
                    <Save className="w-4 h-4 mr-1" /> Save
                  </Button>
                  <Button
                    onClick={() => setAddingClass(false)}
                    size="sm"
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            className="h-full min-h-[120px] min-w-[220px] w-full flex flex-col items-center justify-center border-dashed border-2 border-green-300 bg-green-50 hover:bg-green-100"
            variant="ghost"
            onClick={handleAddClassStart}
            title="Add new class"
          >
            <Plus className="w-8 h-8 text-green-700 mb-1" />
            <span className="text-xs text-green-700">Add Class</span>
          </Button>
        )}
      </div>
      {/* Existing Distribute Books Card */}
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-300 mb-8">
        <CardHeader>
          <CardTitle className="text-lg text-yellow-900">
            Distribute Books
          </CardTitle>
          <CardDescription>Assign books to a class</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleAdd}>
            <Input
              placeholder="Book Name"
              value={book}
              onChange={(e) => setBook(e.target.value)}
              required
            />
            <select
              className="border rounded px-3 py-2 bg-background"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            >
              <option value="">Select Class</option>
              {classOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <Input
              placeholder="Section (optional)"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="max-w-xs"
            />
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-sm">
                Number of Books to Distribute
              </div>
              <Input
                type="number"
                min={1}
                placeholder="Enter number"
                value={numBooks}
                onChange={(e) => setNumBooks(e.target.value)}
                className="max-w-xs"
                required
              />
            </div>
            <Button type="submit">Distribute</Button>
          </form>
        </CardContent>
      </Card>
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300">
        <CardHeader>
          <CardTitle className="text-lg text-blue-900">
            Past Distributions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {distributions.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                No distributions found.
              </div>
            ) : (
              distributions.map((dist) => (
                <div
                  key={dist.id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-3 border rounded-lg bg-white mb-2"
                >
                  <div>
                    <div className="font-semibold">{dist.book}</div>
                    <div className="text-xs text-gray-500">
                      Class: {dist.className}{" "}
                      {dist.section && `| Section: ${dist.section}`}
                    </div>
                    <div className="text-xs text-gray-500">
                      Date: {dist.date}
                    </div>
                  </div>
                  <span className="text-green-700 font-semibold">
                    Qty: {dist.numBooks}
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
