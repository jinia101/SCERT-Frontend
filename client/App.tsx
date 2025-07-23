import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StateLevelDashboard from "./pages/admin/StateLevelDashboard";
import DistrictLevelDashboard from "./pages/admin/DistrictLevelDashboard";
import BlockLevelDashboard from "./pages/admin/BlockLevelDashboard";
import SchoolLevelDashboard from "./pages/admin/SchoolLevelDashboard";
import RegistrationOfBooks from "./pages/admin/RegistrationOfBooks";
import CreateProfile from "./pages/admin/CreateProfile";
import ReceivedItems from "./pages/admin/ReceivedItems";
import EChallan from "./pages/admin/eChallan";
import Issues from "./pages/admin/Issues";
import Notifications from "./pages/admin/Notifications";
import Requisition from "./pages/admin/Requisition";
import SchoolLoginCredentials from "./pages/admin/SchoolLoginCredentials";
import SchoolRequisition from "./pages/admin/SchoolRequisition";
import SchoolNotifications from "./pages/admin/SchoolNotifications";
import SchoolReceived from "./pages/admin/SchoolReceived";
import SchoolDistribute from "./pages/admin/SchoolDistribute";
import BlockLoginCredentials from "./pages/admin/BlockLoginCredentials";
import BlockCreateProfile from "./pages/admin/BlockCreateProfile";
import BlockRequisition from "./pages/admin/BlockRequisition";
import BlockNotifications from "./pages/admin/BlockNotifications";
import DistrictProfile from "./pages/admin/DistrictProfile";
import DistrictCreateProfile from "./pages/admin/DistrictCreateProfile";
import DistrictRequisition from "./pages/admin/DistrictRequisition";
import DistrictNotifications from "./pages/admin/DistrictNotifications";
import BlockIssues from "./pages/admin/BlockIssues";
import DistrictIssues from "./pages/admin/DistrictIssues";
import SchoolNotificationsCreate from "./pages/admin/SchoolNotificationsCreate";
import SchoolProfile from "./pages/admin/SchoolProfile";
import SchoolBacklogEntry from "./pages/admin/SchoolBacklogEntry";
import BlockProfile from "./pages/admin/BlockProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin/state" element={<StateLevelDashboard />} />
          <Route path="/admin/district" element={<DistrictLevelDashboard />} />
          <Route path="/admin/block" element={<BlockLevelDashboard />} />
          <Route path="/admin/school" element={<SchoolLevelDashboard />} />
          <Route
            path="/admin/state/register-books"
            element={<RegistrationOfBooks />}
          />
          <Route
            path="/admin/state/create-profile"
            element={<CreateProfile />}
          />
          <Route
            path="/admin/state/received-items"
            element={<ReceivedItems />}
          />
          <Route path="/admin/state/echallan" element={<EChallan />} />
          <Route path="/admin/state/issues" element={<Issues />} />
          <Route
            path="/admin/state/notifications"
            element={<Notifications />}
          />
          <Route path="/admin/state/requisition" element={<Requisition />} />
          <Route
            path="/admin/school/login-credentials"
            element={<SchoolLoginCredentials />}
          />
          <Route
            path="/admin/school/requisition"
            element={<SchoolRequisition />}
          />
          <Route
            path="/admin/school/notifications"
            element={<SchoolNotifications />}
          />
          <Route path="/admin/school/received" element={<SchoolReceived />} />
          <Route
            path="/admin/school/distribute"
            element={<SchoolDistribute />}
          />
          <Route path="/admin/school/issues" element={<Issues />} />
          <Route path="/admin/school/profile" element={<SchoolProfile />} />
          <Route
            path="/admin/school/backlog-entry"
            element={<SchoolBacklogEntry />}
          />
          <Route
            path="/admin/block/login-credentials"
            element={<BlockLoginCredentials />}
          />
          <Route
            path="/admin/block/create-profile"
            element={<BlockCreateProfile />}
          />
          <Route
            path="/admin/block/requisition"
            element={<BlockRequisition />}
          />
          <Route
            path="/admin/block/notifications"
            element={<BlockNotifications />}
          />
          <Route path="/admin/block/issues" element={<BlockIssues />} />
          <Route path="/admin/block/echallan" element={<EChallan />} />
          <Route path="/admin/block/profile" element={<BlockProfile />} />
          <Route path="/admin/district/issues" element={<DistrictIssues />} />
          <Route
            path="/admin/school/notifications-create"
            element={<SchoolNotificationsCreate />}
          />
          <Route
            path="/admin/district/profile"
            element={<DistrictProfile />}
          />
          <Route
            path="/admin/district/create-profile"
            element={<DistrictCreateProfile />}
          />
          <Route
            path="/admin/district/requisition"
            element={<DistrictRequisition />}
          />
          <Route
            path="/admin/district/notifications"
            element={<DistrictNotifications />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
