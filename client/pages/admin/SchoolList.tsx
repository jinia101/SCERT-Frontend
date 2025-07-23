import React from "react";
import AdminLayout from "@/components/AdminLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useLocation } from "react-router-dom";

const allSchools = [
  {
    udiseCode: "16010100108",
    schoolName: "DAKSHIN LANKAMURA J.B SCHOOL",
    schoolPrincipal: "Mr. A. Sharma",
    noOfStudents: 350,
    booksReceived: 1200,
  },
  {
    udiseCode: "16010100109",
    schoolName: "LANKAMURA H.S. SCHOOL",
    schoolPrincipal: "Ms. B. Devi",
    noOfStudents: 420,
    booksReceived: 1500,
  },
  {
    udiseCode: "16010100110",
    schoolName: "DAKSHIN NARAYANPUR SB SCHOOL",
    schoolPrincipal: "Mr. C. Singh",
    noOfStudents: 280,
    booksReceived: 900,
  },
  {
    udiseCode: "16010100207",
    schoolName: "MADHYA BHUBANBAN H.S SCHOOL",
    schoolPrincipal: "Ms. D. Kumari",
    noOfStudents: 510,
    booksReceived: 1800,
  },
  {
    udiseCode: "16010100209",
    schoolName: "PASCHIM BHUBANBAN ENG.MED. SCHOOL",
    schoolPrincipal: "Mr. E. Das",
    noOfStudents: 390,
    booksReceived: 1350,
  },
  {
    udiseCode: "16010100223",
    schoolName: "SANMURA S.B.SCHOOL",
    schoolPrincipal: "Ms. F. Begum",
    noOfStudents: 220,
    booksReceived: 750,
  },
  {
    udiseCode: "16010100224",
    schoolName: "LANKAMURA WORD NO-3 J.B SCHOOL",
    schoolPrincipal: "Mr. G. Kumar",
    noOfStudents: 310,
    booksReceived: 1100,
  },
  {
    udiseCode: "16010100225",
    schoolName: "NARSINGARH HS SCHOOL",
    schoolPrincipal: "Ms. H. Rani",
    noOfStudents: 480,
    booksReceived: 1600,
  },
  {
    udiseCode: "16010100226",
    schoolName: "SUKHAMOY H.S SCHOOL",
    schoolPrincipal: "Mr. I. Khan",
    noOfStudents: 270,
    booksReceived: 850,
  },
  {
    udiseCode: "16010100227",
    schoolName: "AMBEDKAR MEMORIAL HIGH SCHOOL.",
    schoolPrincipal: "Ms. J. Patel",
    noOfStudents: 550,
    booksReceived: 2000,
  },
  {
    udiseCode: "16010100306",
    schoolName: "BARJALA HS SCHOOL",
    schoolPrincipal: "Mr. K. Reddy",
    noOfStudents: 330,
    booksReceived: 1000,
  },
  {
    udiseCode: "16010100307",
    schoolName: "DURJOYNAGAR SB SCHOOL",
    schoolPrincipal: "Ms. L. Singh",
    noOfStudents: 400,
    booksReceived: 1400,
  },
  {
    udiseCode: "16010100419",
    schoolName: "SOUTH BARJALA J.B SCHOOL",
    schoolPrincipal: "Mr. M. Gupta",
    noOfStudents: 290,
    booksReceived: 950,
  },
  {
    udiseCode: "16010100422",
    schoolName: "ABINASH GOPE SMRITI (SAROJANI) JB SCHOOL",
    schoolPrincipal: "Ms. N. Kaur",
    noOfStudents: 460,
    booksReceived: 1700,
  },
  {
    udiseCode: "16010100423",
    schoolName: "NUTAN PALLI JB SCHOOL",
    schoolPrincipal: "Mr. O. Yadav",
    noOfStudents: 300,
    booksReceived: 1050,
  },
];

export default function SchoolList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const blockName = queryParams.get("blockName");

  // In a real application, you would filter schools based on blockName
  // For now, we'll display all schools as the dummy data doesn't have block info.
  const filteredSchools = allSchools; // Replace with actual filtering if block data is available

  return (
    <AdminLayout
      title={blockName ? `Schools in ${blockName}` : "All Schools"}
      description="List of schools with their UDISE codes"
      adminLevel="DISTRICT ADMIN"
    >
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>
            {blockName ? `Schools in ${blockName}` : "All Schools"}
          </CardTitle>
          <CardDescription>
            Here is a list of schools and their UDISE codes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">School Name</th>
                  <th className="border px-4 py-2 text-left">UDISE Code</th>
                  <th className="border px-4 py-2 text-left">
                    School Principal
                  </th>
                  <th className="border px-4 py-2 text-left">
                    No. of Students
                  </th>
                  <th className="border px-4 py-2 text-left">Books Received</th>
                </tr>
              </thead>
              <tbody>
                {filteredSchools.length === 0 ? (
                  <tr>
                    <td
                      colSpan={2}
                      className="border px-4 py-2 text-center text-gray-500"
                    >
                      No schools found.
                    </td>
                  </tr>
                ) : (
                  filteredSchools.map((school, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border px-4 py-2">{school.schoolName}</td>
                      <td className="border px-4 py-2">{school.udiseCode}</td>
                      <td className="border px-4 py-2">
                        {school.schoolPrincipal}
                      </td>
                      <td className="border px-4 py-2">
                        {school.noOfStudents}
                      </td>
                      <td className="border px-4 py-2">
                        {school.booksReceived}
                      </td>
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
