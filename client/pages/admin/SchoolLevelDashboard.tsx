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
  AlertCircle,
  TrendingUp,
  User,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <AdminLayout
      title="School Level Dashboard"
      description="Manage your school's book inventory and track student book distribution"
      adminLevel={null}
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

      {/* Quick Actions Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8">
        {[
          {
            label: "Profile",
            icon: Users,
            path: "/admin/school/profile",
          },
          {
            label: "Requisition",
            icon: Package,
            path: "/admin/school/requisition",
          },
          {
            label: "Notification",
            icon: Users,
            path: "/admin/school/notifications-create",
          },
          { label: "Received", icon: Package, path: "/admin/school/received" },
          {
            label: "Distribute",
            icon: BookCheck,
            path: "/admin/school/distribute",
          },
          { label: "Issues", icon: AlertCircle, path: "/admin/school/issues" },
          {
            label: "Backlog Entry",
            icon: Plus,
            path: "/admin/school/backlog-entry",
          },
        ].map((action, idx) => {
          const Icon = action.icon;
          return (
            <Card
              key={action.label}
              className="cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(action.path)}
            >
              <CardContent className="flex flex-col items-center justify-center py-6">
                <Icon className="h-8 w-8 mb-2 text-primary" />
                <span className="font-medium text-center text-sm">
                  {action.label}
                </span>
              </CardContent>
            </Card>
          );
        })}
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
        </div>
      </div>
    </AdminLayout>
  );
}
