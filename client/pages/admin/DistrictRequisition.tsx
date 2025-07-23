import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const dummyRequisitions = [
  {
    id: 1,
    block: "Mohanpur",
    reqNo: 1,
    book: "Maths for Class 3",
    className: "Class 3",
    subject: "Mathematics",
    enrolled: 52,
    requested: 50,
    remark: "Urgent requirement",
    status: "Pending",
  },
  {
    id: 2,
    block: "Mohanpur",
    reqNo: 2,
    book: "English Reader",
    className: "Class 4",
    subject: "English",
    enrolled: 47,
    requested: 30,
    remark: "",
    status: "Pending",
  },
  {
    id: 3,
    block: "Dhukli",
    reqNo: 1,
    book: "Science Explorer",
    className: "Class 5",
    subject: "Science",
    enrolled: 41,
    requested: 20,
    remark: "First priority",
    status: "Pending",
  },
  {
    id: 4,
    block: "Dhukli",
    reqNo: 2,
    book: "Hindi Basics",
    className: "Class 2",
    subject: "Hindi",
    enrolled: 39,
    requested: 15,
    remark: "",
    status: "Pending",
  },
];

function groupByBlock(requisitions) {
  return requisitions.reduce((acc, req) => {
    if (!acc[req.block]) acc[req.block] = [];
    acc[req.block].push(req);
    return acc;
  }, {});
}

export default function DistrictRequisition() {
  const [requisitions, setRequisitions] = useState(dummyRequisitions);

  const handleApprove = (id) => {
    setRequisitions((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "Approved" } : req)),
    );
  };

  const handleReject = (id) => {
    setRequisitions((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "Rejected" } : req)),
    );
  };

  const grouped = groupByBlock(requisitions);

  return (
    <AdminLayout
      title="Block Requisitions"
      description="View and approve/reject block book requisitions"
      adminLevel="DISTRICT EDUCATION OFFICER"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {Object.entries(grouped).map(([block, reqs]) => (
          <Card key={block} className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">{block}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow border-separate border-spacing-0">
                  <thead className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900">
                    <tr>
                      <th className="px-4 py-2 border-b text-left">Req No</th>
                      <th className="px-4 py-2 border-b text-left">Class</th>
                      <th className="px-4 py-2 border-b text-left">Subject</th>
                      <th className="px-4 py-2 border-b text-left">
                        Book Name
                      </th>
                      <th className="px-4 py-2 border-b text-left">Enrolled</th>
                      <th className="px-4 py-2 border-b text-left">
                        Requested
                      </th>
                      <th className="px-4 py-2 border-b text-left">
                        Remarks by Block
                      </th>
                      <th className="px-4 py-2 border-b text-left">Status</th>
                      <th className="px-4 py-2 border-b text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reqs.map((req, idx) => (
                      <tr
                        key={req.id}
                        className={
                          idx % 2 === 0
                            ? "bg-white hover:bg-blue-50 transition"
                            : "bg-blue-50 hover:bg-blue-100 transition"
                        }
                      >
                        <td className="px-4 py-2 border-b">{req.reqNo}</td>
                        <td className="px-4 py-2 border-b">{req.className}</td>
                        <td className="px-4 py-2 border-b">{req.subject}</td>
                        <td className="px-4 py-2 border-b">{req.book}</td>
                        <td className="px-4 py-2 border-b">{req.enrolled}</td>
                        <td className="px-4 py-2 border-b">{req.requested}</td>
                        <td className="px-4 py-2 border-b">{req.remark}</td>
                        <td className="px-4 py-2 border-b">{req.status}</td>
                        <td className="px-4 py-2 border-b">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              className="bg-green-200 text-green-900 hover:bg-green-300"
                              onClick={() => handleApprove(req.id)}
                              disabled={req.status !== "Pending"}
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              className="bg-red-200 text-red-900 hover:bg-red-300"
                              onClick={() => handleReject(req.id)}
                              disabled={req.status !== "Pending"}
                            >
                              Reject
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
}
