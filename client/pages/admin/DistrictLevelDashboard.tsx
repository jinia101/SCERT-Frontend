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
  Package,
  Plus,
  Send,
  Download,
  Users,
  AlertCircle,
  User,
  BookCheck, // Add BookCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function DistrictLevelDashboard() {
  const stats = [
    {
      label: "Available Books",
      value: "342,100",
      icon: BookOpen,
      change: "+8.3%",
    },
    { label: "Blocks Managed", value: "12", icon: School, change: "0%" },
    {
      label: "Schools in District",
      value: "987",
      icon: School,
      change: "+1.2%",
    },
    {
      label: "Distribution Rate",
      value: "92.4%",
      icon: TrendingUp,
      change: "+2.8%",
    },
  ];

  const pendingRequests = [
    {
      block: "Block A - Central",
      requestedBooks: 2500,
      priority: "High",
      dueDate: "2024-01-15",
    },
    {
      block: "Block B - North",
      requestedBooks: 1800,
      priority: "Medium",
      dueDate: "2024-01-18",
    },
    {
      block: "Block C - South",
      requestedBooks: 3200,
      priority: "High",
      dueDate: "2024-01-20",
    },
    {
      block: "Block D - East",
      requestedBooks: 1500,
      priority: "Low",
      dueDate: "2024-01-25",
    },
  ];

  const blocks = [
    {
      name: "Block A - Central",
      supervisor: "Dr. Anil Sharma",
      schools: 89,
      books: 32450,
      pending: 2,
    },
    {
      name: "Block B - North",
      supervisor: "Prof. Maya Gupta",
      schools: 76,
      books: 28900,
      pending: 1,
    },
    {
      name: "Block C - South",
      supervisor: "Mr. Ravi Kumar",
      schools: 94,
      books: 35670,
      pending: 3,
    },
    {
      name: "Block D - East",
      supervisor: "Ms. Kavita Joshi",
      schools: 82,
      books: 30890,
      pending: 0,
    },
  ];

  const navigate = useNavigate();

  return (
    <AdminLayout
      title="District Level Dashboard (DEO)"
      description="Manage book distribution across all blocks in your district"
      
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-8">
        {[
          {
            label: "Profile",
            icon: User,
            path: "/admin/district/profile",
          },
          {
            label: "Requisition",
            icon: Package,
            path: "/admin/district/requisition",
          },
          {
            label: "Issues",
            icon: AlertCircle,
            path: "/admin/district/issues",
          },
          {
            label: "Notification",
            icon: Users,
            path: "/admin/district/notifications",
          },
          {
            label: "Backlog Entry",
            icon: Plus,
            path: "/admin/school/backlog-entry",
          },
          {
            label: "e-Challan",
            icon: BookCheck,
            path: "/admin/district/echallan",
          },
          {
            label: "Received",
            icon: BookCheck,
            path: "/admin/school/received",
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

      <div className="grid lg:grid-cols-1 gap-6">
        {/* Block Management */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Block Management</CardTitle>
              <CardDescription>
                Monitor and manage all blocks in your district
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blocks.map((block, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <h4 className="font-medium">{block.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        IS: {block.supervisor}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {block.schools} schools • {block.books.toLocaleString()}{" "}
                        books
                      </p>
                    </div>
                    <div className="text-right space-y-2">
                      {block.pending > 0 ? (
                        <Badge variant="destructive">
                          {block.pending} pending requests
                        </Badge>
                      ) : (
                        <Badge variant="default">All up to date</Badge>
                      )}
                      <div>
                        <Button size="sm" variant="outline" onClick={() => navigate("/admin/district/requisition")}>
                          Manage
                        </Button>
                      </div>
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
