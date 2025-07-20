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
  Building2,
  TrendingUp,
  Users,
  Plus,
  Search,
  Filter,
  Package,
  BookCheck,
  AlertCircle,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function StateLevelDashboard() {
  const stats = [
    {
      label: "Total Books",
      value: "2,847,563",
      icon: BookOpen,
      change: "+12.5%",
    },
    { label: "Districts", value: "45", icon: Building2, change: "0%" },
    { label: "Total Schools", value: "8,432", icon: Users, change: "+2.1%" },
    {
      label: "Distribution Rate",
      value: "94.2%",
      icon: TrendingUp,
      change: "+3.2%",
    },
  ];

  const recentActivities = [
    {
      action: "Book allocation approved",
      district: "Mumbai District",
      time: "2 hours ago",
      status: "approved",
    },
    {
      action: "New shipment received",
      district: "Pune District",
      time: "4 hours ago",
      status: "received",
    },
    {
      action: "Inventory request pending",
      district: "Nashik District",
      time: "6 hours ago",
      status: "pending",
    },
    {
      action: "Distribution completed",
      district: "Nagpur District",
      time: "1 day ago",
      status: "completed",
    },
  ];

  const districts = [
    {
      name: "Mumbai District",
      schools: 1245,
      books: 487650,
      utilization: 96,
      deo: "Rajesh Kumar",
    },
    {
      name: "Pune District",
      schools: 987,
      books: 342100,
      utilization: 92,
      deo: "Priya Sharma",
    },
    {
      name: "Nashik District",
      schools: 756,
      books: 289450,
      utilization: 88,
      deo: "Amit Patel",
    },
    {
      name: "Nagpur District",
      schools: 834,
      books: 315670,
      utilization: 94,
      deo: "Sunita Singh",
    },
  ];

  const navigate = useNavigate();

  return (
    <AdminLayout
      title="State Level Dashboard"
      description="Manage book inventory across all districts in the state"
      adminLevel={
        <span className="flex items-center gap-2">
          STATE ADMIN
          <span
            onClick={() => navigate("/admin/state/profile")}
            className="cursor-pointer"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src="/profile.png" alt="Profile" />
              <AvatarFallback>
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
          </span>
        </span>
      }
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
            label: "Registration Of Books",
            icon: BookOpen,
            path: "/admin/state/register-books",
          },
          {
            label: "Create Profile",
            icon: Plus,
            path: "/admin/state/create-profile",
          },
          {
            label: "Login Credentials",
            icon: Users,
            path: "/admin/state/login-credentials",
          },
          {
            label: "Requisition",
            icon: Package,
            path: "/admin/state/requisition",
          },
          {
            label: "Received Items",
            icon: Package,
            path: "/admin/state/received-items",
          },
          {
            label: "e-Challan",
            icon: BookCheck,
            path: "/admin/state/echallan",
          },
          {
            label: "Monitoring",
            icon: TrendingUp,
            path: "/admin/state/monitoring",
          },
          { label: "Issues", icon: AlertCircle, path: "/admin/state/issues" },
          {
            label: "Notification",
            icon: Users,
            path: "/admin/state/notifications",
          },
          {
            label: "Backlog Entry",
            icon: Plus,
            path: "/admin/state/backlog-entry",
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
        {/* Districts Overview */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>District Overview</CardTitle>
              <CardDescription>
                Manage and monitor all districts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {districts.map((district, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <h4 className="font-medium">{district.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        DEO: {district.deo} • {district.schools} schools
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-sm font-medium">
                        {district.books.toLocaleString()} books
                      </p>
                      <Badge
                        variant={
                          district.utilization >= 95
                            ? "default"
                            : district.utilization >= 90
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {district.utilization}% utilized
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest updates across the state</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <Badge
                        variant={
                          activity.status === "approved" ||
                          activity.status === "completed"
                            ? "default"
                            : activity.status === "received"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {activity.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {activity.district}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
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
