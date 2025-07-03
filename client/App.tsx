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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
