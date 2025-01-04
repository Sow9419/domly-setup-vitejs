import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OTPVerification from "./pages/OTPVerification";
import ForgotPassword from "./pages/ForgotPassword";
import CreateProfile from "./pages/CreateProfile";
import CreateWorkspace from "./pages/CreateWorkspace";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/create-workspace" element={<CreateWorkspace />} />
          <Route path="/favorites" element={<Index />} />
          <Route path="/trips" element={<Index />} />
          <Route path="/profile" element={<Index />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;