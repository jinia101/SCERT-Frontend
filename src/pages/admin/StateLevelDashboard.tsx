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
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import LoginForm from "./LoginForm";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function StateLevelDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const stats = [
    {
      label: "Total Books",
      value: "2,847,563",
      icon: BookOpen,
      change: "+12.5%",
    },
    { label: "Districts", value: "8", icon: Building2, change: "0%" },
    { label: "Total IS", value: "100", icon: Users, change: "+0%" },
    { label: "Total Schools", value: "3,500", icon: Users, change: "+2.1%" },
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
      name: "Dhalai",
      schools: 500,
      books: 200000,
      utilization: 90,
      totalRequisition: 150000,
    },
    {
      name: "Gomati",
      schools: 450,
      books: 180000,
      utilization: 88,
      totalRequisition: 130000,
    },
    {
      name: "Khowai",
      schools: 300,
      books: 120000,
      utilization: 92,
      totalRequisition: 90000,
    },
    {
      name: "North Tripura",
      schools: 550,
      books: 220000,
      utilization: 85,
      totalRequisition: 180000,
    },
    {
      name: "Sepahijala",
      schools: 400,
      books: 160000,
      utilization: 93,
      totalRequisition: 140000,
    },
    {
      name: "South Tripura",
      schools: 600,
      books: 240000,
      utilization: 89,
      totalRequisition: 200000,
    },
    {
      name: "Unakoti",
      schools: 250,
      books: 100000,
      utilization: 95,
      totalRequisition: 80000,
    },
    {
      name: "West Tripura",
      schools: 700,
      books: 280000,
      utilization: 91,
      totalRequisition: 230000,
    },
  ];

  // Analytics data
  const districtBookDistribution = [
    { district: "Dhalai", distributed: 180000, target: 200000 },
    { district: "Gomati", distributed: 160000, target: 180000 },
    { district: "Khowai", distributed: 110000, target: 120000 },
    { district: "North Tripura", distributed: 200000, target: 220000 },
    { district: "Sepahijala", distributed: 150000, target: 160000 },
    { district: "South Tripura", distributed: 220000, target: 240000 },
    { district: "Unakoti", distributed: 95000, target: 100000 },
    { district: "West Tripura", distributed: 260000, target: 280000 },
  ];

  const monthlyTrend = [
    { month: "Jan", books: 120000 },
    { month: "Feb", books: 150000 },
    { month: "Mar", books: 180000 },
    { month: "Apr", books: 200000 },
    { month: "May", books: 175000 },
    { month: "Jun", books: 220000 },
    { month: "Jul", books: 240000 },
    { month: "Aug", books: 210000 },
  ];

  const stockLevels = [
    { district: "Dhalai", currentStock: 20000, minRequired: 15000 },
    { district: "Gomati", currentStock: 18000, minRequired: 12000 },
    { district: "Khowai", currentStock: 10000, minRequired: 8000 },
    { district: "North Tripura", currentStock: 22000, minRequired: 18000 },
    { district: "Sepahijala", currentStock: 16000, minRequired: 14000 },
    { district: "South Tripura", currentStock: 24000, minRequired: 20000 },
    { district: "Unakoti", currentStock: 8000, minRequired: 6000 },
    { district: "West Tripura", currentStock: 28000, minRequired: 25000 },
  ];

  const districtPercentage = [
    { name: "West Tripura", value: 25, color: "#8884d8" },
    { name: "South Tripura", value: 20, color: "#82ca9d" },
    { name: "North Tripura", value: 18, color: "#ffc658" },
    { name: "Dhalai", value: 15, color: "#ff7300" },
    { name: "Gomati", value: 12, color: "#00c49f" },
    { name: "Sepahijala", value: 6, color: "#ff6b6b" },
    { name: "Khowai", value: 3, color: "#4ecdc4" },
    { name: "Unakoti", value: 1, color: "#45b7d1" },
  ];

  const chartConfig = {
    distributed: {
      label: "Distributed",
      color: "hsl(var(--chart-1))",
    },
    target: {
      label: "Target",
      color: "hsl(var(--chart-2))",
    },
    books: {
      label: "Books",
      color: "hsl(var(--chart-3))",
    },
    currentStock: {
      label: "Current Stock",
      color: "hsl(var(--chart-4))",
    },
    minRequired: {
      label: "Min Required",
      color: "hsl(var(--chart-5))",
    },
  };

  const navigate = useNavigate();

  if (!isLoggedIn) {
    return <LoginForm onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <AdminLayout
      title="State Level Dashboard"
      description="Manage book inventory across all districts in the state"
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
            label: "Edit Profile",
            icon: User,
            path: "/admin/state/create-profile",
          },
          {
            label: "Requisition",
            icon: Package,
            path: "/admin/state/requisition",
          },
          {
            label: "Received Items",
            icon: Package,
            path: "/admin/state/received",
          },
          {
            label: "e-Challan",
            icon: BookCheck,
            path: "/admin/state/state-echallan",
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
            path: "/admin/school/backlog-entry",
          },
          {
            label: "Requisition Window",
            icon: Package,
            path: "/admin/state/requisition-window",
          },
          {
            label: "Reports",
            icon: BookCheck,
            path: "/admin/state/reports",
          },
          {
            label: "Private School Approval",
            icon: BookCheck,
            path: "/admin/state/private-school-approval",
          },
          {
            label: "Charts & Visualization",
            icon: BarChart3,
            path: "/admin/state/charts-visualization",
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

      {/* Analytics Section */}
      <div className="my-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">
            Comprehensive analytics and insights for book distribution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* District-wise Book Distribution Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>District-wise Book Distribution</CardTitle>
              <CardDescription>
                Distribution progress vs targets across districts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <BarChart data={districtBookDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="district"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar
                    dataKey="distributed"
                    fill="#8884d8"
                    name="Distributed"
                  />
                  <Bar dataKey="target" fill="#82ca9d" name="Target" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Monthly Book Distribution Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Distribution Trend</CardTitle>
              <CardDescription>
                Book distribution trend over the past months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <LineChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="books"
                    stroke="#8884d8"
                    strokeWidth={3}
                    dot={{ fill: "#8884d8", strokeWidth: 2, r: 4 }}
                    name="Books Distributed"
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* District-wise Book Stock Levels */}
          <Card>
            <CardHeader>
              <CardTitle>District-wise Stock Levels</CardTitle>
              <CardDescription>
                Current stock vs minimum required levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <BarChart data={stockLevels}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="district"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar
                    dataKey="currentStock"
                    fill="#00c49f"
                    name="Current Stock"
                  />
                  <Bar
                    dataKey="minRequired"
                    fill="#ff7300"
                    name="Min Required"
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* District-wise Book Distribution Percentage Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>District Distribution Percentage</CardTitle>
              <CardDescription>
                Percentage share of books by district
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <PieChart>
                  <Pie
                    data={districtPercentage}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {districtPercentage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-background border rounded-lg p-2 shadow-lg">
                            <p className="font-medium">{data.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {data.value}% of total distribution
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-1 gap-6">
        {/* Districts Overview */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>List of Districts</CardTitle>
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
                        {district.schools} government schools |{" "}
                        {district.totalRequisition} books requisitioned
                      </p>
                    </div>
                    <div className="text-right space-y-2">
                      <div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            navigate(
                              `/admin/state/district-details/${district.name}`,
                            )
                          }
                        >
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
