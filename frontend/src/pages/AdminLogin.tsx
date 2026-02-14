import { useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../services/api";
import { Lock, Mail, KeyRound, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.login({ email, password });

      if (res.success) {
        localStorage.setItem("isAdmin", "true");
        toast.success("Welcome back, Admin!");
        navigate("/dashboard");
      }
    } catch (err: any) {
      toast.error("Invalid credentials. Try admin@gmail.com / 1234");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <div className="bg-brand-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <Lock className="text-brand-accent" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-brand-dark tracking-tight">
            Admin Portal
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Sign in to manage website content
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-3.5 text-gray-400"
                size={20}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                placeholder="admin@gmail.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Password
            </label>
            <div className="relative">
              <KeyRound
                className="absolute left-4 top-3.5 text-gray-400"
                size={20}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                placeholder="••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-accent hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Access Dashboard"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
