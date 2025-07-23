import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

export default function DistrictDetails() {
  const navigate = useNavigate();
  const { districtName } = useParams();

  // Dummy data for blocks within a district
  const allBlocks = {
    "Dhalai": [
      { name: "Ambassa", schools: 100 },
      { name: "Gandachera", schools: 80 },
    ],
    "Gomati": [
      { name: "Udaipur", schools: 120 },
      { name: "Amarpur", schools: 90 },
    ],
    "West Tripura": [
      { name: "Agartala Municipal Corporation", schools: 150 },
      { name: "Dhukli", schools: 80 },
      { name: "Mohanpur", schools: 70 },
      { name: "Hezamara", schools: 60 },
    ],
    // Add other districts and their blocks as needed
  };

  const blocks = allBlocks[districtName] || [];

  return (
    <AdminLayout
      title={`${districtName || "District"} Details`}
      description={`Manage blocks within ${districtName || "this district"}`}
    >
      <Card>
        <CardHeader>
          <CardTitle>Blocks in {districtName}</CardTitle>
          <CardDescription>
            Here you can view and manage blocks within this district.
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
                    {block.schools} schools
                  </p>
                </div>
                <div>
                  <Button size="sm" variant="outline" onClick={() => navigate(`/admin/schools?district=${districtName}&block=${block.name}`)}>
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
