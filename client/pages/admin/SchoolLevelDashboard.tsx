import AdminLayout from "@/components/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  TrendingDown,
  Package,
  Plus,
  Search,
  BookCheck,
} from "lucide-react";

export default function SchoolLevelDashboard() {
  const stats = [
    { label: "Books Available", value: "2,850", icon: BookOpen, change: "-8%" },
    { label: "Students Enrolled", value: "340", icon: Users, change: "+3%" },
    { label: "Books Issued", value: "2,156", icon: BookCheck, change: "+15%" },
    { label: "Low Stock Items", value: "12", icon: Package, change: "+25%" },
  ];

  const lowStockBooks = [
    {
      title: "Mathematics Grade 4",
      currentStock: 8,
      required: 45,
      subject: "Mathematics",
    },
    {
      title: "Science Grade 5",
      currentStock: 12,
      required: 38,
      subject: "Science",
    },
    {
      title: "English Grammar Grade 3",
      currentStock: 5,
      required: 42,
      subject: "English",
    },
    {
      title: "Hindi Reader Grade 2",
      currentStock: 15,
      required: 48,
      subject: "Hindi",
    },
  ];

  const recentTransactions = [
    {
      action: "Books Issued",
      details: "Grade 4 - Mathematics (25 books)",
      teacher: "Mrs. Sharma",
      time: "2 hours ago",
    },
    {
      action: "Books Returned",
      details: "Grade 3 - English (18 books)",
      teacher: "Mr. Patel",
      time: "4 hours ago",
    },
    {
      action: "New Stock Received",
      details: "Science books (150 units)",
      teacher: "Librarian",
      time: "1 day ago",
    },
    {
      action: "Books Issued",
      details: "Grade 5 - Hindi (32 books)",
      teacher: "Ms. Gupta",
      time: "1 day ago",
    },
  ];

  const booksBySubject = [
    {
      subject: "Mathematics",
      total: 580,
      issued: 425,
      available: 155,
      percentage: 73,
    },
    {
      subject: "Science",
      total: 420,
      issued: 312,
      available: 108,
      percentage: 74,
    },
    {
      subject: "English",
      total: 650,
      issued: 498,
      available: 152,
      percentage: 77,
    },
    {
      subject: "Hindi",
      total: 590,
      issued: 445,
      available: 145,
      percentage: 75,
    },
    {
      subject: "Social Studies",
      total: 380,
      issued: 276,
      available: 104,
      percentage: 73,
    },
    {
      subject: "Computer Science",
      total: 230,
      issued: 200,
      available: 30,
      percentage: 87,
    },
  ];

  return (
    <AdminLayout
      title="School Level Dashboard"
      description="Manage your school's book inventory and track student book distribution"
      adminLevel="SCHOOL ADMIN"
    >
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.change.startsWith("+");
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span
                    className={isPositive ? "text-green-600" : "text-red-600"}
                  >
                    {stat.change}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Request New Books
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <BookCheck className="h-4 w-4" />
          Issue Books
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          Search Inventory
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Books by Subject */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Books by Subject</CardTitle>
              <CardDescription>
                Current inventory status by subject
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {booksBySubject.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{subject.subject}</h4>
                      <span className="text-sm text-muted-foreground">
                        {subject.issued}/{subject.total} ({subject.percentage}%
                        issued)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${subject.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{subject.available} available</span>
                      <span>{subject.issued} issued</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Low Stock Alert */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-500" />
                Low Stock Alert
              </CardTitle>
              <CardDescription>Books requiring restocking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lowStockBooks.map((book, index) => (
                  <div key={index} className="space-y-2 p-3 border rounded-lg">
                    <h5 className="font-medium text-sm">{book.title}</h5>
                    <div className="flex justify-between text-xs">
                      <span className="text-red-600">
                        Stock: {book.currentStock}
                      </span>
                      <span className="text-muted-foreground">
                        Need: {book.required}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {book.subject}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest book movements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-sm font-medium">{transaction.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {transaction.details}
                    </p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{transaction.teacher}</span>
                      <span>{transaction.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
