import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { User, CheckCircle, XCircle, Edit2 } from "lucide-react";

const dummyAccounts = (level) =>
  [...Array(5).keys()].map((i) => ({
    id: i + 1,
    name: `${level} User ${i + 1}`,
    mobile: `98${Math.floor(1000000 + Math.random() * 9000000)}`,
    approved: Math.random() > 0.5,
  }));

const levels = [
  {
    label: "District Level (DEO)",
    color: "from-blue-100 to-blue-50",
    border: "border-blue-300",
    icon: <User className="h-5 w-5 text-blue-500" />,
  },
  {
    label: "Block Level (IS)",
    color: "from-green-100 to-green-50",
    border: "border-green-300",
    icon: <User className="h-5 w-5 text-green-500" />,
  },
  {
    label: "School Level",
    color: "from-pink-100 to-pink-50",
    border: "border-pink-300",
    icon: <User className="h-5 w-5 text-pink-500" />,
  },
];

export default function CreateProfile() {
  const [accounts, setAccounts] = useState({
    DEO: dummyAccounts("DEO"),
    IS: dummyAccounts("IS"),
    School: dummyAccounts("School"),
  });
  const [editIdx, setEditIdx] = useState({ level: null, idx: -1 });
  const [editMobile, setEditMobile] = useState("");

  const handleToggle = (level, idx) => {
    setAccounts((prev) => ({
      ...prev,
      [level]: prev[level].map((acc, i) =>
        i === idx ? { ...acc, approved: !acc.approved } : acc,
      ),
    }));
  };

  const handleEdit = (level, idx) => {
    setEditIdx({ level, idx });
    setEditMobile(accounts[level][idx].mobile);
  };

  const handleUpdate = () => {
    setAccounts((prev) => ({
      ...prev,
      [editIdx.level]: prev[editIdx.level].map((acc, i) =>
        i === editIdx.idx ? { ...acc, mobile: editMobile } : acc,
      ),
    }));
    setEditIdx({ level: null, idx: -1 });
    setEditMobile("");
  };

  return (
    <AdminLayout
      title="Manage Profiles"
      description="State admin can enable, disable, or update accounts for all levels"
      adminLevel="STATE ADMIN"
    >
      <div className="space-y-12 py-8">
        {levels.map((level, lidx) => (
          <div key={level.label}>
            <h2
              className={`text-2xl font-bold mb-6 text-center bg-gradient-to-r ${level.color} py-2 rounded shadow border ${level.border}`}
            >
              {level.label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accounts[["DEO", "IS", "School"][lidx]].map((acc, idx) => (
                <Card
                  key={acc.id}
                  className={`shadow-md border-2 bg-gradient-to-br ${level.color} ${level.border}`}
                >
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      {level.icon}
                      <CardTitle className="text-lg">{acc.name}</CardTitle>
                    </div>
                    {acc.approved ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <b>Mobile No.:</b>{" "}
                      {editIdx.level === ["DEO", "IS", "School"][lidx] &&
                      editIdx.idx === idx ? (
                        <input
                          className="border rounded px-2 py-1 w-32"
                          value={editMobile}
                          onChange={(e) => setEditMobile(e.target.value)}
                        />
                      ) : (
                        acc.mobile
                      )}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-green-400 to-blue-400 text-white"
                        onClick={() =>
                          handleToggle(["DEO", "IS", "School"][lidx], idx)
                        }
                      >
                        {acc.approved ? "Disable" : "Enable"}
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white"
                        onClick={() =>
                          handleEdit(["DEO", "IS", "School"][lidx], idx)
                        }
                      >
                        <Edit2 className="h-4 w-4 mr-1" /> Update
                      </Button>
                      {editIdx.level === ["DEO", "IS", "School"][lidx] &&
                        editIdx.idx === idx && (
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-400 to-blue-400 text-white"
                            onClick={handleUpdate}
                          >
                            Save
                          </Button>
                        )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
