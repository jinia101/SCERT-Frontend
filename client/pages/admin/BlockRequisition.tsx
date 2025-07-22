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

const dummyRequisitions = [
  {
    id: 1,
    school: "Sunrise Public School",
    reqNo: 1,
    book: "Maths for Class 3",
    className: "Class 3",
    subject: "Mathematics",
    required: 50,
    remark: "",
  },
  {
    id: 2,
    school: "Sunrise Public School",
    reqNo: 2,
    book: "English Reader",
    className: "Class 4",
    subject: "English",
    required: 30,
    remark: "",
  },
  {
    id: 3,
    school: "Sunrise Public School",
    reqNo: 3,
    book: "Science Explorer",
    className: "Class 5",
    subject: "Science",
    required: 20,
    remark: "",
  },
  {
    id: 4,
    school: "Green Valley School",
    reqNo: 1,
    book: "Hindi Basics",
    className: "Class 2",
    subject: "Hindi",
    required: 15,
    remark: "",
  },
  {
    id: 5,
    school: "Green Valley School",
    reqNo: 2,
    book: "Maths for Class 4",
    className: "Class 4",
    subject: "Mathematics",
    required: 25,
    remark: "",
  },
  {
    id: 6,
    school: "Green Valley School",
    reqNo: 3,
    book: "English Reader",
    className: "Class 3",
    subject: "English",
    required: 18,
    remark: "",
  },
];

function groupBySchool(requisitions) {
  return requisitions.reduce((acc, req) => {
    if (!acc[req.school]) acc[req.school] = [];
    acc[req.school].push(req);
    return acc;
  }, {});
}

export default function BlockRequisition() {
  const [requisitions, setRequisitions] = useState(dummyRequisitions);
  const [remarks, setRemarks] = useState({});

  const handleRemarkChange = (id, value) => {
    setRemarks((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddRemark = (id) => {
    setRequisitions((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, remark: remarks[id] || "" } : req,
      ),
    );
    setRemarks((prev) => ({ ...prev, [id]: "" }));
  };

  const grouped = groupBySchool(requisitions);

  return (
    <AdminLayout
      title="School Requisitions"
      description="View and remark on school book requisitions"
      adminLevel={null}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {Object.entries(grouped).map(([school, reqs]) => (
          <Card key={school} className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">{school}</CardTitle>
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
                      <th className="px-4 py-2 border-b text-left">Required</th>
                      <th className="px-4 py-2 border-b text-left">
                        Action (Add Remarks)
                      </th>
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
                        <td className="px-4 py-2 border-b">{req.required}</td>
                        <td className="px-4 py-2 border-b">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <Input
                              placeholder="Add remark"
                              value={remarks[req.id] || ""}
                              onChange={(e) =>
                                handleRemarkChange(req.id, e.target.value)
                              }
                              className="max-w-xs"
                            />
                            <Button
                              size="sm"
                              className="bg-blue-200 text-blue-900 hover:bg-blue-300"
                              onClick={() => handleAddRemark(req.id)}
                              disabled={!remarks[req.id]}
                            >
                              Add Remark
                            </Button>
                            {req.remark && (
                              <span className="text-xs text-purple-700 font-semibold ml-2">
                                Remark: {req.remark}
                              </span>
                            )}
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
