import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export default function SchoolList() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const district = queryParams.get("district");
  const block = queryParams.get("block");

  // NOTE: The current hardcoded school data does not contain district/block information.
  // In a real application, you would fetch filtered data from an API based on district/block.
  const allSchools = [
    { udise: "16010100108", name: "DAKSHIN LANKAMURA J.B SCHOOL", district: "West Tripura", block: "Agartala Municipal Corporation", principal: "Mr. R.K. Sharma", booksReceived: 1200 },
    { udise: "16010100109", name: "LANKAMURA H.S. SCHOOL", district: "West Tripura", block: "Agartala Municipal Corporation", principal: "Ms. S. Devi", booksReceived: 1500 },
    { udise: "16010100110", name: "DAKSHIN NARAYANPUR SB SCHOOL", district: "West Tripura", block: "Agartala Municipal Corporation", principal: "Mr. A. Singh", booksReceived: 900 },
    { udise: "16010100207", name: "MADHYA BHUBANBAN H.S SCHOOL", district: "West Tripura", block: "Dhukli", principal: "Mrs. P. Kaur", booksReceived: 1100 },
    { udise: "16010100209", name: "PASCHIM BHUBANBAN ENG.MED. SCHOOL", district: "West Tripura", block: "Dhukli", principal: "Mr. V. Singh", booksReceived: 1300 },
    { udise: "16010100223", name: "SANMURA S.B.SCHOOL", district: "West Tripura", block: "Dhukli", principal: "Ms. R. Begum", booksReceived: 800 },
    { udise: "16010100224", name: "LANKAMURA WORD NO-3 J.B SCHOOL", district: "West Tripura", block: "Dhukli", principal: "Mr. K. Das", booksReceived: 1000 },
    { udise: "16010100225", name: "NARSINGARH HS SCHOOL", district: "West Tripura", block: "Mohanpur", principal: "Mrs. L. Devi", booksReceived: 1400 },
    { udise: "16010100226", name: "SUKHAMOY H.S SCHOOL", district: "West Tripura", block: "Mohanpur", principal: "Mr. S. Kumar", booksReceived: 1600 },
    { udise: "16010100227", name: "AMBEDKAR MEMORIAL HIGH SCHOOL.", district: "West Tripura", block: "Mohanpur", principal: "Ms. G. Rani", booksReceived: 1250 },
    { udise: "16010100306", name: "BARJALA HS SCHOOL", district: "West Tripura", block: "Hezamara", principal: "Mr. B. Roy", booksReceived: 950 },
    { udise: "16010100307", name: "DURJOYNAGAR SB SCHOOL", district: "West Tripura", block: "Hezamara", principal: "Ms. C. Ghosh", booksReceived: 1050 },
    { udise: "16010100419", name: "SOUTH BARJALA J.B SCHOOL", district: "West Tripura", block: "Mandai", principal: "Mr. D. Saha", booksReceived: 700 },
    { udise: "16010101001", name: "NEW SCHOOL 1", district: "Dhalai", block: "Ambassa", principal: "Mr. E. Khan", booksReceived: 600 },
    { udise: "16010101002", name: "NEW SCHOOL 2", district: "Dhalai", block: "Ambassa", principal: "Ms. F. Begum", booksReceived: 850 },
    { udise: "16010101003", name: "NEW SCHOOL 3", district: "Dhalai", block: "Gandachera", principal: "Mr. G. Das", booksReceived: 920 },
    { udise: "16010101004", name: "NEW SCHOOL 4", district: "Dhalai", block: "Gandachera", principal: "Ms. H. Devi", booksReceived: 780 },
    { udise: "16010101005", name: "NEW SCHOOL 5", district: "Gomati", block: "Udaipur", principal: "Mr. I. Singh", booksReceived: 1150 },
    { udise: "16010101006", name: "NEW SCHOOL 6", district: "Gomati", block: "Udaipur", principal: "Ms. J. Kaur", booksReceived: 1020 },
    { udise: "16010101007", name: "NEW SCHOOL 7", district: "Gomati", block: "Amarpur", principal: "Mr. K. Sharma", booksReceived: 890 },
    { udise: "16010101008", name: "NEW SCHOOL 8", district: "Gomati", block: "Amarpur", principal: "Ms. L. Devi", booksReceived: 750 },

  const schools = allSchools.filter(school => {
    let match = true;
    if (district && school.district !== district) {
      match = false;
    }
    if (block && school.block !== block) {
      match = false;
    }
    return match;
  });

  let title = "School List";
  let description = "List of all schools with their UDISE codes.";

  if (district && block) {
    title = `Schools in ${block} (${district})`;
    description = `List of schools in ${block} block, ${district} district.`;
  } else if (district) {
    title = `Schools in ${district}`;
    description = `List of schools in ${district} district.`;
  } else if (block) {
    title = `Schools in ${block}`; // This case might not be reachable with current routing
    description = `List of schools in ${block} block.`;
  }

  return (
    <AdminLayout
      title={title}
      description={description}
    >
      <Card>
        <CardHeader>
          <CardTitle>Schools</CardTitle>
          <CardDescription>
            Here you can view all registered schools.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {schools.length > 0 ? (
              schools.map((school, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <h4 className="font-medium">{school.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      UDISE Code: {school.udise}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Principal: {school.principal}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Books Received: {school.booksReceived}
                    </p>
                  </div>
                  
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">No schools found for the selected criteria.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}