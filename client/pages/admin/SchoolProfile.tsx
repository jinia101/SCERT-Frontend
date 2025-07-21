import AdminLayout from "@/components/AdminLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  Mail,
  Phone,
  BadgeCheck,
  Lock,
  School,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SchoolProfile() {
  const [editing, setEditing] = useState(false);
  const [headmasterName, setHeadmasterName] = useState("Amit Verma");
  const [headmasterId, setHeadmasterId] = useState("HM12345");
  const [headmasterPassword, setHeadmasterPassword] = useState("password123");
  const [tempName, setTempName] = useState(headmasterName);
  const [tempId, setTempId] = useState(headmasterId);
  const [tempPassword, setTempPassword] = useState(headmasterPassword);

  const handleEdit = () => {
    setTempName(headmasterName);
    setTempId(headmasterId);
    setTempPassword(headmasterPassword);
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = () => {
    setHeadmasterName(tempName);
    setHeadmasterId(tempId);
    setHeadmasterPassword(tempPassword);
    setEditing(false);
  };

  return (
    <AdminLayout
      title="Profile"
      description="School admin profile and school details"
      adminLevel="SCHOOL ADMIN"
    >
      <div className="max-w-2xl mx-auto mt-8">
        <Card className="mb-8 shadow-xl border border-primary/20 bg-gradient-to-br from-orange-50 to-pink-50">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20 shadow-md ring-2 ring-primary/30">
                <AvatarImage src="/profile.png" alt="Profile" />
                <AvatarFallback>
                  <User className="w-10 h-10" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-bold text-primary">
                  Sunrise Public School
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1 text-base">
                  <Mail className="w-4 h-4 text-muted-foreground" />{" "}
                  schooladmin@sunrise.edu.in
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6 mt-2">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <School className="w-5 h-5 text-orange-500" /> School Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">District Name:</span>
                  <span className="text-muted-foreground ml-1">
                    Greenfield District
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">DEO Name:</span>
                  <span className="text-muted-foreground ml-1">
                    Rajesh Kumar
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">Inspector of School:</span>
                  <span className="text-muted-foreground ml-1">
                    Priya Sharma
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-2 mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-orange-500" /> Headmaster
                Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">Name:</span>
                  {editing ? (
                    <Input
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="ml-2 mt-1"
                    />
                  ) : (
                    <span className="text-muted-foreground ml-1">
                      {headmasterName}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">ID:</span>
                  {editing ? (
                    <Input
                      value={tempId}
                      onChange={(e) => setTempId(e.target.value)}
                      className="ml-2 mt-1"
                    />
                  ) : (
                    <span className="text-muted-foreground ml-1">
                      {headmasterId}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">Email:</span>
                  <span className="text-muted-foreground ml-1">
                    amit.verma@sunrise.edu.in
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">Phone:</span>
                  <span className="text-muted-foreground ml-1">
                    +91 98765 43210
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">Password:</span>
                  {editing ? (
                    <Input
                      value={tempPassword}
                      onChange={(e) => setTempPassword(e.target.value)}
                      className="ml-2 mt-1"
                      type="password"
                    />
                  ) : (
                    <span className="text-muted-foreground ml-1">••••••••</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-8 justify-end">
              {editing ? (
                <>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>Save</Button>
                </>
              ) : (
                <Button onClick={handleEdit}>Edit</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
