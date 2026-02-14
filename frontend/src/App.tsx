import { Routes, Route } from "react-router";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="font-sans text-brand-primary bg-brand-light min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminLogin />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
