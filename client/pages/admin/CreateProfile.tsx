import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, Edit2 } from "lucide-react";

export default function CreateProfile() {
  const [districts, setDistricts] = useState([
    {
      id: "D001",
      name: "District A",
      phone: "9876543210",
      blocks: [
        {
          id: "B001",
          name: "Block A1",
          phone: "9988776655",
          schools: [
            { id: "S001", name: "School A1a", udise: "16010100101" },
            { id: "S002", name: "School A1b", udise: "16010100102" },
            { id: "S003", name: "School A1c", udise: "16010100103" },
          ],
        },
        {
          id: "B002",
          name: "Block A2",
          phone: "9977665544",
          schools: [
            { id: "S004", name: "School A2a", udise: "16010100201" },
            { id: "S005", name: "School A2b", udise: "16010100202" },
            { id: "S006", name: "School A2c", udise: "16010100203" },
          ],
        },
        {
          id: "B003",
          name: "Block A3",
          phone: "9966554433",
          schools: [
            { id: "S007", name: "School A3a", udise: "16010100301" },
            { id: "S008", name: "School A3b", udise: "16010100302" },
            { id: "S009", name: "School A3c", udise: "16010100303" },
          ],
        },
      ],
    },
    {
      id: "D002",
      name: "District B",
      phone: "9123456789",
      blocks: [
        {
          id: "B004",
          name: "Block B1",
          phone: "9234567890",
          schools: [
            { id: "S010", name: "School B1a", udise: "16020100101" },
            { id: "S011", name: "School B1b", udise: "16020100102" },
            { id: "S012", name: "School B1c", udise: "16020100103" },
          ],
        },
        {
          id: "B005",
          name: "Block B2",
          phone: "9345678901",
          schools: [
            { id: "S013", name: "School B2a", udise: "16020100201" },
            { id: "S014", name: "School B2b", udise: "16020100202" },
            { id: "S015", name: "School B2c", udise: "16020100203" },
          ],
        },
        {
          id: "B006",
          name: "Block B3",
          phone: "9456789012",
          schools: [
            { id: "S016", name: "School B3a", udise: "16020100301" },
            { id: "S017", name: "School B3b", udise: "16020100302" },
            { id: "S018", name: "School B3c", udise: "16020100303" },
          ],
        },
      ],
    },
    {
      id: "D003",
      name: "District C",
      phone: "9567890123",
      blocks: [
        {
          id: "B007",
          name: "Block C1",
          phone: "9678901234",
          schools: [
            { id: "S019", name: "School C1a", udise: "16030100101" },
            { id: "S020", name: "School C1b", udise: "16030100102" },
            { id: "S021", name: "School C1c", udise: "16030100103" },
          ],
        },
        {
          id: "B008",
          name: "Block C2",
          phone: "9789012345",
          schools: [
            { id: "S022", name: "School C2a", udise: "16030100201" },
            { id: "S023", name: "School C2b", udise: "16030100202" },
            { id: "S024", name: "School C2c", udise: "16030100203" },
          ],
        },
        {
          id: "B009",
          name: "Block C3",
          phone: "9890123456",
          schools: [
            { id: "S025", name: "School C3a", udise: "16030100301" },
            { id: "S026", name: "School C3b", udise: "16030100302" },
            { id: "S027", name: "School C3c", udise: "16030100303" },
          ],
        },
      ],
    },
    {
      id: "D004",
      name: "District D",
      phone: "9012345678",
      blocks: [
        {
          id: "B010",
          name: "Block D1",
          phone: "9123456789",
          schools: [
            { id: "S028", name: "School D1a", udise: "16040100101" },
            { id: "S029", name: "School D1b", udise: "16040100102" },
            { id: "S030", name: "School D1c", udise: "16040100103" },
          ],
        },
        {
          id: "B011",
          name: "Block D2",
          phone: "9234567890",
          schools: [
            { id: "S031", name: "School D2a", udise: "16040100201" },
            { id: "S032", name: "School D2b", udise: "16040100202" },
            { id: "S033", name: "School D2c", udise: "16040100203" },
          ],
        },
        {
          id: "B012",
          name: "Block D3",
          phone: "9345678901",
          schools: [
            { id: "S034", name: "School D3a", udise: "16040100301" },
            { id: "S035", name: "School D3b", udise: "16040100302" },
            { id: "S036", name: "School D3c", udise: "16040100303" },
          ],
        },
      ],
    },
    {
      id: "D005",
      name: "District E",
      phone: "9456789012",
      blocks: [
        {
          id: "B013",
          name: "Block E1",
          phone: "9567890123",
          schools: [
            { id: "S037", name: "School E1a", udise: "16050100101" },
            { id: "S038", name: "School E1b", udise: "16050100102" },
            { id: "S039", name: "School E1c", udise: "16050100103" },
          ],
        },
        {
          id: "B014",
          name: "Block E2",
          phone: "9678901234",
          schools: [
            { id: "S040", name: "School E2a", udise: "16050100201" },
            { id: "S041", name: "School E2b", udise: "16050100202" },
            { id: "S042", name: "School E2c", udise: "16050100203" },
          ],
        },
        {
          id: "B015",
          name: "Block E3",
          phone: "9789012345",
          schools: [
            { id: "S043", name: "School E3a", udise: "16050100301" },
            { id: "S044", name: "School E3b", udise: "16050100302" },
            { id: "S045", name: "School E3c", udise: "16050100303" },
          ],
        },
      ],
    },
    {
      id: "D006",
      name: "District F",
      phone: "9890123456",
      blocks: [
        {
          id: "B016",
          name: "Block F1",
          phone: "9012345678",
          schools: [
            { id: "S046", name: "School F1a", udise: "16060100101" },
            { id: "S047", name: "School F1b", udise: "16060100102" },
            { id: "S048", name: "School F1c", udise: "16060100103" },
          ],
        },
        {
          id: "B017",
          name: "Block F2",
          phone: "9123456789",
          schools: [
            { id: "S049", name: "School F2a", udise: "16060100201" },
            { id: "S050", name: "School F2b", udise: "16060100202" },
            { id: "S051", name: "School F2c", udise: "16060100203" },
          ],
        },
        {
          id: "B018",
          name: "Block F3",
          phone: "9234567890",
          schools: [
            { id: "S052", name: "School F3a", udise: "16060100301" },
            { id: "S053", name: "School F3b", udise: "16060100302" },
            { id: "S054", name: "School F3c", udise: "16060100303" },
          ],
        },
      ],
    },
    {
      id: "D007",
      name: "District G",
      phone: "9345678901",
      blocks: [
        {
          id: "B019",
          name: "Block G1",
          phone: "9456789012",
          schools: [
            { id: "S055", name: "School G1a", udise: "16070100101" },
            { id: "S056", name: "School G1b", udise: "16070100102" },
            { id: "S057", name: "School G1c", udise: "16070100103" },
          ],
        },
        {
          id: "B020",
          name: "Block G2",
          phone: "9567890123",
          schools: [
            { id: "S058", name: "School G2a", udise: "16070100201" },
            { id: "S059", name: "School G2b", udise: "16070100202" },
            { id: "S060", name: "School G2c", udise: "16070100203" },
          ],
        },
        {
          id: "B021",
          name: "Block G3",
          phone: "9678901234",
          schools: [
            { id: "S061", name: "School G3a", udise: "16070100301" },
            { id: "S062", name: "School G3b", udise: "16070100302" },
            { id: "S063", name: "School G3c", udise: "16070100303" },
          ],
        },
      ],
    },
    {
      id: "D008",
      name: "District H",
      phone: "9789012345",
      blocks: [
        {
          id: "B022",
          name: "Block H1",
          phone: "9890123456",
          schools: [
            { id: "S064", name: "School H1a", udise: "16080100101" },
            { id: "S065", name: "School H1b", udise: "16080100102" },
            { id: "S066", name: "School H1c", udise: "16080100103" },
          ],
        },
        {
          id: "B023",
          name: "Block H2",
          phone: "9012345678",
          schools: [
            { id: "S067", name: "School H2a", udise: "16080100201" },
            { id: "S068", name: "School H2b", udise: "16080100202" },
            { id: "S069", name: "School H2c", udise: "16080100203" },
          ],
        },
        {
          id: "B024",
          name: "Block H3",
          phone: "9123456789",
          schools: [
            { id: "S070", name: "School H3a", udise: "16080100301" },
            { id: "S071", name: "School H3b", udise: "16080100302" },
            { id: "S072", name: "School H3c", udise: "16080100303" },
          ],
        },
      ],
    },
  ]);

  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [editingDistrictId, setEditingDistrictId] = useState(null);
  const [editingBlockId, setEditingBlockId] = useState(null);
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");

  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
    setSelectedBlock(null); // Reset selected block when a new district is chosen
    setEditingDistrictId(null); // Exit edit mode for districts
  };

  const handleBlockClick = (block) => {
    setSelectedBlock(block);
    setEditingBlockId(null); // Exit edit mode for blocks
  };

  const handleBackToDistricts = () => {
    setSelectedDistrict(null);
    setSelectedBlock(null);
    setEditingDistrictId(null);
    setEditingBlockId(null);
  };

  const handleBackToBlocks = () => {
    setSelectedBlock(null);
    setEditingBlockId(null);
  };

  const handleEditDistrictPhone = (districtId, currentPhone) => {
    setEditingDistrictId(districtId);
    setEditedPhoneNumber(currentPhone);
  };

  const handleSaveDistrictPhone = (districtId) => {
    setDistricts((prevDistricts) =>
      prevDistricts.map((district) =>
        district.id === districtId
          ? { ...district, phone: editedPhoneNumber }
          : district,
      ),
    );
    setEditingDistrictId(null);
    setEditedPhoneNumber("");
  };

  const handleEditBlockPhone = (blockId, currentPhone) => {
    setEditingBlockId(blockId);
    setEditedPhoneNumber(currentPhone);
  };

  const handleSaveBlockPhone = (blockId) => {
    setDistricts((prevDistricts) =>
      prevDistricts.map((district) =>
        district.id === selectedDistrict.id
          ? {
              ...district,
              blocks: district.blocks.map((block) =>
                block.id === blockId
                  ? { ...block, phone: editedPhoneNumber }
                  : block,
              ),
            }
          : district,
      ),
    );
    setEditingBlockId(null);
    setEditedPhoneNumber("");
  };

  return (
    <AdminLayout
      title="Create Profile"
      description="Select a district, block, and school to create a profile."
      adminLevel="STATE ADMIN"
    >
      <div className="space-y-8 py-8">
        {!selectedDistrict && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Select a District</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {districts.map((district) => (
                <Card
                  key={district.id}
                  className="shadow-md border-2 border-blue-300 cursor-pointer hover:bg-blue-50"
                  onClick={() => handleDistrictClick(district)}
                >
                  <CardHeader>
                    <CardTitle>{district.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p>ID: {district.id}</p>
                      {editingDistrictId === district.id ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={editedPhoneNumber}
                            onChange={(e) => setEditedPhoneNumber(e.target.value)}
                            className="border rounded px-2 py-1 w-32 mr-2"
                          />
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveDistrictPhone(district.id);
                            }}
                          >
                            Save
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <p>Phone: {district.phone}</p>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="ml-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditDistrictPhone(district.id, district.phone);
                            }}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {selectedDistrict && !selectedBlock && (
          <>
            <Button onClick={handleBackToDistricts} className="mb-4">
              <ChevronLeft className="h-4 w-4 mr-2" /> Back to Districts
            </Button>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Blocks in {selectedDistrict.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedDistrict.blocks.map((block) => (
                <Card
                  key={block.id}
                  className="shadow-md border-2 border-green-300 cursor-pointer hover:bg-green-50"
                  onClick={() => handleBlockClick(block)}
                >
                  <CardHeader>
                    <CardTitle>{block.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p>ID: {block.id}</p>
                      {editingBlockId === block.id ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={editedPhoneNumber}
                            onChange={(e) => setEditedPhoneNumber(e.target.value)}
                            className="border rounded px-2 py-1 w-32 mr-2"
                          />
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveBlockPhone(block.id);
                            }}
                          >
                            Save
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <p>Phone: {block.phone}</p>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="ml-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditBlockPhone(block.id, block.phone);
                            }}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {selectedBlock && (
          <>
            <Button onClick={handleBackToBlocks} className="mb-4">
              <ChevronLeft className="h-4 w-4 mr-2" /> Back to Blocks
            </Button>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Schools in {selectedBlock.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedBlock.schools.map((school) => (
                <Card
                  key={school.id}
                  className="shadow-md border-2 border-pink-300"
                >
                  <CardHeader>
                    <CardTitle>{school.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>UDISE: {school.udise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}