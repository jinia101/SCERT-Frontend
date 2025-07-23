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
import {
  Printer,
  FileText,
  School,
  Building2,
  Plus,
  Trash2,
} from "lucide-react";
import { useRef } from "react";

// Dummy inventory from RegistrationOfBooks
const dummyBooks = [
  {
    fy: "2023-24",
    className: "Class 3",
    subject: "Mathematics",
    title: "Maths for Class 3",
    rate: "120",
    currentRate: "130",
    quantity: 50,
  },
  {
    fy: "2023-24",
    className: "Class 4",
    subject: "Science",
    title: "Science Explorer",
    rate: "125",
    currentRate: "135",
    quantity: 20,
  },
  {
    fy: "2022-23",
    className: "Class 5",
    subject: "English",
    title: "English Reader",
    rate: "110",
    currentRate: "120",
    quantity: 10,
  },
];

const classOptions = Array.from(new Set(dummyBooks.map((b) => b.className)));
const subjectOptions = Array.from(new Set(dummyBooks.map((b) => b.subject)));
const titleOptions = Array.from(new Set(dummyBooks.map((b) => b.title)));

const dummyPreviousChallans = [
  { id: "ECH-001", to: "Inspectorate A", date: "2024-06-01" },
  { id: "ECH-002", to: "Inspectorate B", date: "2024-06-05" },
  { id: "ECH-003", to: "Inspectorate C", date: "2024-06-10" },
];

export default function BlockEChallan() {
  const [challanNo, setChallanNo] = useState("/TEXTBOOK/OML/SCERT/2025");
  const [date, setDate] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [agency, setAgency] = useState("");
  const [rows, setRows] = useState([
    {
      className: "",
      subject: "",
      title: "",
      total: "",
      perPacket: "",
      fullPackets: "",
      loose: "",
    },
  ]);
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const printRef = useRef(null);

  // Generate a dummy eChallan ID (incremental based on previous)
  const nextIdNum = dummyPreviousChallans.length + 1;
  const generatedId = `ECH-${String(nextIdNum).padStart(3, "0")}`;

  const handleRowChange = (idx, field, value) => {
    setRows((rows) =>
      rows.map((row, i) => (i === idx ? { ...row, [field]: value } : row)),
    );
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        className: "",
        subject: "",
        title: "",
        total: "",
        perPacket: "",
        fullPackets: "",
        loose: "",
      },
    ]);
  };

  const handleRemoveRow = (idx) => {
    setRows((rows) => rows.filter((_, i) => i !== idx));
  };

  // Filter previous eChallans
  const filteredChallans = dummyPreviousChallans.filter((c) => {
    const matchesId = c.id.toLowerCase().includes(search.toLowerCase());
    const matchesDate = filterDate ? c.date === filterDate : true;
    return matchesId && matchesDate;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <AdminLayout
      title="Block Level e-Challan Generation"
      description="Generate and view e-Challans for Printing Agency, IS, and Private Schools at the block level."
      adminLevel="BLOCK ADMIN"
    >
      <Card className="w-full max-w-4xl mx-auto mb-10 bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-300 shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl text-yellow-900">
            Generate eChallan
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Print area start */}
          <div ref={printRef} className="print:bg-white print:text-black">
            <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6 print:!block print:!relative print:!shadow-none print:!border print:!rounded-none">
              <div className="text-center font-bold text-lg mb-2">
                Government of Tripura
                <br />
                State Council of Educational Research & Training
                <br />
                Tripura, Agartala.
              </div>
              <hr className="my-2" />
              <div className="mb-2 font-semibold">
                To
                <br />
                The Inspector of Schools
              </div>
              <div className="flex gap-4 mb-2">
                <Input placeholder="(Inspectorate)" className="max-w-xs" />
                <Input placeholder="(District)" className="max-w-xs" />
              </div>
              <div className="mb-2 font-semibold">
                Subject:{" "}
                <span className="font-normal">
                  Supply of Textbooks for .... for the Academic Year 2025-2026.
                </span>
              </div>
              <div className="mb-2">
                Sir / Madam,
                <br />I would like to request you to receive{" "}
                <Input
                  className="inline-block w-24 mx-2"
                  placeholder="nos."
                />{" "}
                nos. ..................
                <br />
                In this regard, the essential particulars are cited below:-
              </div>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-400 text-sm">
                  <tbody>
                    <tr>
                      <td className="border px-2 py-1 font-semibold">
                        Challan No :
                      </td>
                      <td className="border px-2 py-1">
                        <Input
                          value={challanNo}
                          onChange={(e) => setChallanNo(e.target.value)}
                          className="w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1 font-semibold">Date :</td>
                      <td className="border px-2 py-1">
                        <Input
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1 font-semibold">
                        No. of the Vehicle :
                      </td>
                      <td className="border px-2 py-1">
                        <Input
                          value={vehicle}
                          onChange={(e) => setVehicle(e.target.value)}
                          className="w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1 font-semibold">
                        Agency / Driver :
                      </td>
                      <td className="border px-2 py-1">
                        <Input
                          value={agency}
                          onChange={(e) => setAgency(e.target.value)}
                          className="w-full"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="font-semibold mb-2">
                Particulars of the OML Textbooks which are being supplied to the
                Inspectorate from SCERT :
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-400 text-xs">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-2 py-1">Sl. No.</th>
                      <th className="border px-2 py-1">Class</th>
                      <th className="border px-2 py-1">Subject</th>
                      <th className="border px-2 py-1">Title</th>
                      <th className="border px-2 py-1">
                        Total No. of Books Supplied
                      </th>
                      <th className="border px-2 py-1">
                        No. of Books in each packet
                      </th>
                      <th className="border px-2 py-1">No. of Full Packets</th>
                      <th className="border px-2 py-1">No. of Loose Books</th>
                      <th className="border px-2 py-1">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, idx) => (
                      <tr key={idx}>
                        <td className="border px-2 py-1 text-center">
                          {idx + 1}
                        </td>
                        <td className="border px-2 py-1">
                          <select
                            className="border rounded px-2 py-1 w-full"
                            value={row.className}
                            onChange={(e) =>
                              handleRowChange(idx, "className", e.target.value)
                            }
                          >
                            <option value="">Select</option>
                            {classOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="border px-2 py-1">
                          <select
                            className="border rounded px-2 py-1 w-full"
                            value={row.subject}
                            onChange={(e) =>
                              handleRowChange(idx, "subject", e.target.value)
                            }
                          >
                            <option value="">Select</option>
                            {subjectOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="border px-2 py-1">
                          <select
                            className="border rounded px-2 py-1 w-full"
                            value={row.title}
                            onChange={(e) =>
                              handleRowChange(idx, "title", e.target.value)
                            }
                          >
                            <option value="">Select</option>
                            {titleOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="border px-2 py-1">
                          <Input
                            value={row.total}
                            onChange={(e) =>
                              handleRowChange(idx, "total", e.target.value)
                            }
                            className="w-20"
                            type="number"
                            min="0"
                          />
                        </td>
                        <td className="border px-2 py-1">
                          <Input
                            value={row.perPacket}
                            onChange={(e) =>
                              handleRowChange(idx, "perPacket", e.target.value)
                            }
                            className="w-20"
                            type="number"
                            min="0"
                          />
                        </td>
                        <td className="border px-2 py-1">
                          <Input
                            value={row.fullPackets}
                            onChange={(e) =>
                              handleRowChange(
                                idx,
                                "fullPackets",
                                e.target.value,
                              )
                            }
                            className="w-20"
                            type="number"
                            min="0"
                          />
                        </td>
                        <td className="border px-2 py-1">
                          <Input
                            value={row.loose}
                            onChange={(e) =>
                              handleRowChange(idx, "loose", e.target.value)
                            }
                            className="w-20"
                            type="number"
                            min="0"
                          />
                        </td>
                        <td className="border px-2 py-1 text-center">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveRow(idx)}
                            disabled={rows.length === 1}
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-end mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAddRow}
                    className="gap-2"
                  >
                    <Plus className="w-4 h-4" /> Add Row
                  </Button>
                </div>
              </div>
              <div className="mt-6 text-sm">
                Kindly acknowledge the receipt of the same.
                <br />
                <br />
                <div className="flex flex-col md:flex-row md:justify-between mt-6">
                  <div className="mb-4 md:mb-0">
                    <div className="font-semibold">Yours faithfully</div>
                    <div>
                      Authorized Officer/Official
                      <br />
                      SCERT, Tripura
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">
                      Signature of the Recipient from Inspectorate
                      <br />
                      (With Seal)
                    </div>
                    <div className="mt-8 font-semibold">
                      Signature of the Driver
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 print:mt-8">
                <span className="font-semibold text-primary print:text-black">
                  eChallan ID:
                </span>
                <span className="bg-primary/10 text-primary font-mono px-4 py-2 rounded border border-primary/20 text-lg print:bg-white print:text-black print:border-black">
                  {generatedId}
                </span>
              </div>
            </div>
          </div>
          {/* Print area end */}
          <div className="flex justify-end mt-4 print:hidden">
            <Button
              type="button"
              className="px-8 py-2 font-semibold bg-blue-600 text-white"
              onClick={handlePrint}
            >
              Generate & Download
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* Previous eChallans Section */}
      <div className="w-full max-w-4xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
          <div className="text-lg font-semibold text-primary">
            Previous eChallans
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Search by eChallan ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-xs"
            />
            <Input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="max-w-xs"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredChallans.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-8">
              No eChallans found.
            </div>
          ) : (
            filteredChallans.map((challan) => (
              <Card
                key={challan.id}
                className="border border-primary/20 shadow-md bg-white"
              >
                <CardHeader>
                  <CardTitle className="text-base font-semibold text-primary">
                    eChallan ID: {challan.id}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    To: {challan.to}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Date: {challan.date}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
      <style>{`
  @media print {
    body * { visibility: hidden !important; }
    .print\:bg-white, .print\:text-black, .print\:block, .print\:relative, .print\:shadow-none, .print\:border, .print\:rounded-none {
      visibility: visible !important;
      position: relative !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      background: #fff !important;
      color: #000 !important;
    }
    .print\:hidden { display: none !important; }
  }
`}</style>
    </AdminLayout>
  );
}