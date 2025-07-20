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
import { Printer, FileText, School, Building2 } from "lucide-react";

const challanTypes = [
  { label: "Printing Agency", value: "printing" },
  { label: "IS", value: "is" },
  { label: "Private School", value: "private" },
];

const dummyChallans = [
  {
    id: 1,
    type: "Printing Agency",
    to: "ABC Printing Co.",
    date: "2024-06-01",
    ref: "CHL-001",
  },
  {
    id: 2,
    type: "IS",
    to: "Inspection Section",
    date: "2024-05-28",
    ref: "CHL-002",
  },
  {
    id: 3,
    type: "Private School",
    to: "Sunrise Public School",
    date: "2024-05-20",
    ref: "CHL-003",
  },
];

export default function EChallan() {
  const [selectedType, setSelectedType] = useState("printing");
  const [to, setTo] = useState("");
  const [showTemplate, setShowTemplate] = useState(false);

  // Filter challans for the last 1 month (dummy logic)
  const recentChallans = dummyChallans.filter((c) => true); // All for now

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTemplate(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AdminLayout
      title="eChallan Generation"
      description="Generate and view eChallans for Printing Agency, IS, and Private Schools"
      adminLevel="STATE ADMIN"
    >
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total eChallans
            </CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">
              {dummyChallans.length}
            </div>
            <p className="text-xs text-blue-700">in last 1 month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              For Printing Agency
            </CardTitle>
            <Printer className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">
              {dummyChallans.filter((c) => c.type === "Printing Agency").length}
            </div>
            <p className="text-xs text-green-700">generated</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-pink-100 to-pink-50 border-pink-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              For IS & Private School
            </CardTitle>
            <School className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-900">
              {dummyChallans.filter((c) => c.type !== "Printing Agency").length}
            </div>
            <p className="text-xs text-pink-700">generated</p>
          </CardContent>
        </Card>
      </div>

      {/* eChallan Generation Form */}
      <Card className="w-full max-w-2xl mx-auto mb-10 bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-300">
        <CardHeader>
          <CardTitle className="text-xl text-yellow-900">
            Generate eChallan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleGenerate}>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="font-medium text-yellow-900">
                Challan Type
              </label>
              <select
                className="border rounded px-3 py-2 bg-background"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                required
              >
                {challanTypes.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <Input
                placeholder="To (Agency/School/IS)"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
                className="max-w-xs"
              />
              <Button type="submit">Generate</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* eChallan Template Preview */}
      {showTemplate && (
        <div className="flex justify-center mb-10">
          <div className="bg-blue-50 border border-gray-400 p-8 rounded-lg w-full max-w-2xl relative print:bg-white">
            <div
              className="absolute right-4 top-4 text-xs text-gray-400 print:hidden cursor-pointer"
              onClick={() => setShowTemplate(false)}
            >
              Close
            </div>
            <div className="bg-white p-6 rounded shadow-md border border-gray-300">
              <div className="mb-2">To,</div>
              <div className="mb-2">{to || "......"}</div>
              <div className="flex justify-center mb-4">
                <Button
                  className="bg-blue-200 text-blue-900 cursor-default"
                  type="button"
                >
                  Challan to{" "}
                  {challanTypes.find((c) => c.value === selectedType)?.label ||
                    "-"}
                </Button>
              </div>
              <div className="mb-2">.......................</div>
              <div className="mb-2">
                .......................................................................................
              </div>
              <div className="mb-2">
                .......................................................................................
              </div>
              <div className="mb-2">
                .......................................................................................
              </div>
              <div className="mb-2">
                .......................................................................................
              </div>
              <div className="flex justify-end mb-6">
                .......................
              </div>
              <div className="flex justify-center">
                <Button
                  className="bg-yellow-300 text-black font-bold text-lg px-8"
                  type="button"
                  onClick={handlePrint}
                >
                  Print
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Past 1 Month eChallans List */}
      <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-purple-100 to-pink-50 border-purple-300">
        <CardHeader>
          <CardTitle className="text-lg text-purple-900">
            Past 1 Month eChallans
          </CardTitle>
          <CardDescription>
            All eChallans generated in the last month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-gradient-to-r from-purple-200 to-pink-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Date</th>
                  <th className="py-3 px-4 text-left font-semibold">Type</th>
                  <th className="py-3 px-4 text-left font-semibold">To</th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Reference
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentChallans.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-6 text-gray-500">
                      No eChallans found.
                    </td>
                  </tr>
                ) : (
                  recentChallans.map((challan, idx) => (
                    <tr
                      key={challan.id}
                      className={
                        idx % 2 === 0
                          ? "bg-gradient-to-r from-purple-50 to-pink-50"
                          : "bg-white"
                      }
                    >
                      <td className="py-2 px-4">{challan.date}</td>
                      <td className="py-2 px-4">{challan.type}</td>
                      <td className="py-2 px-4">{challan.to}</td>
                      <td className="py-2 px-4">{challan.ref}</td>
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
