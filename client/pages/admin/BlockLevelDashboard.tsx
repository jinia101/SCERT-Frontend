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
  School,
  TrendingUp,
  AlertCircle,
  Plus,
  Send,
  Eye,
  Users,
  Package,
  BookCheck,
  Search,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function BlockLevelDashboard() {
  const navigate = useNavigate();
  const stats = [
    {
      label: "Books in Stock",
      value: "35,670",
      icon: BookOpen,
      change: "+5.2%",
    },
    { label: "Schools Managed", value: "94", icon: School, change: "+2%" },
    { label: "Active Requests", value: "7", icon: AlertCircle, change: "-12%" },
    {
      label: "Distribution Rate",
      value: "88.7%",
      icon: TrendingUp,
      change: "+4.1%",
    },
  ];

  const schoolRequests = [
    {
      school: "Government Primary School - Sector 1",
      books: 450,
      subject: "Mathematics",
      grade: "Class 3-5",
      status: "urgent",
    },
    {
      school: "Municipal High School - Central",
      books: 320,
      subject: "Science",
      grade: "Class 6-8",
      status: "normal",
    },
    {
      school: "Community School - North",
      books: 180,
      subject: "English",
      grade: "Class 1-2",
      status: "normal",
    },
    {
      school: "Primary School - West Block",
      books: 290,
      subject: "Hindi",
      grade: "Class 3-5",
      status: "urgent",
    },
  ];

  const schools = [
    {
      name: "Government Primary School - Sector 1",
      principal: "Mrs. Sunita Rao",
      students: 340,
      booksIssued: 3200,
      lastUpdate: "2 days ago",
    },
    {
      name: "Municipal High School - Central",
      principal: "Mr. Vikash Singh",
      students: 580,
      booksIssued: 5800,
      lastUpdate: "1 day ago",
    },
    {
      name: "Community School - North",
      principal: "Ms. Priya Khanna",
      students: 220,
      booksIssued: 2100,
      lastUpdate: "3 hours ago",
    },
    {
      name: "Primary School - West Block",
      principal: "Dr. Ramesh Kumar",
      students: 290,
      booksIssued: 2850,
      lastUpdate: "5 hours ago",
    },
  ];

  return (
    <AdminLayout
      title="Block Level Dashboard (IS)"
      description="Institutional Supervisor - Manage schools and book distribution in your block"
      adminLevel={null}
    >
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
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
                  <span className="text-green-600">{stat.change}</span> from
                  last month
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
            path: "/admin/block/profile",
          },
          {
            label: "Requisition",
            icon: Package,
            path: "/admin/block/requisition",
          },
          { label: "Issues", icon: AlertCircle, path: "/admin/block/issues" },
          {
            label: "Notification",
            icon: Users,
            path: "/admin/block/notifications",
          },
          {
            label: "e-Challan",
            icon: BookCheck,
            path: "/admin/block/echallan",
          },
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
        {/* School Management */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>School Management</CardTitle>
              <CardDescription>Monitor schools in your block</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schools.map((school, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <h4 className="font-medium">{school.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Principal: {school.principal}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {school.students} students •{" "}
                        {school.booksIssued.toLocaleString()} books issued
                      </p>
                    </div>
                    <div className="text-right space-y-2">
                      <p className="text-xs text-muted-foreground">
                        Updated {school.lastUpdate}
                      </p>
                      <div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* School Requests */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>School Requests</CardTitle>
              <CardDescription>
                Pending book requests from schools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schoolRequests.map((request, index) => (
                  <div key={index} className="space-y-3 p-3 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium line-clamp-2">
                          {request.school}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {request.books} {request.subject} books
                        </p>
                        <p className="text-xs text-muted-foreground">
                          For {request.grade}
                        </p>
                      </div>
                      <Badge
                        variant={
                          request.status === "urgent"
                            ? "destructive"
                            : "default"
                        }
                        className="text-xs"
                      >
                        {request.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Fulfill
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Review
                      </Button>
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
