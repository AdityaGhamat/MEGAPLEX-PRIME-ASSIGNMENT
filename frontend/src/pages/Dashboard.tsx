import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";
import {
  LayoutDashboard,
  Type,
  Image as ImageIcon,
  List,
  Save,
  LogOut,
  Plus,
  Trash2,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import SEO from "../components/Seo";

const ArrayEditor = ({
  data,
  onUpdate,
}: {
  data: any[];
  onUpdate: (newData: any[]) => void;
}) => {
  if (!data || data.length === 0)
    return <div className="text-gray-500 italic">No items to edit.</div>;

  const handleItemChange = (index: number, key: string, value: string) => {
    const updatedList = [...data];
    updatedList[index] = { ...updatedList[index], [key]: value };
    onUpdate(updatedList);
  };

  const handleDelete = (index: number) => {
    const updatedList = data.filter((_, i) => i !== index);
    onUpdate(updatedList);
  };

  const handleAdd = () => {
    const template = data.length > 0 ? { ...data[0] } : {};
    Object.keys(template).forEach((key) => (template[key] = ""));
    onUpdate([...data, template]);
  };

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-4 border border-gray-200 rounded-lg bg-gray-50 relative group"
        >
          <button
            type="button"
            onClick={() => handleDelete(index)}
            className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
            title="Delete Item"
          >
            <Trash2 size={18} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(item).map((key) => {
              if (key === "_id") return null;
              return (
                <div key={key}>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                    {key}
                  </label>
                  <input
                    type="text"
                    value={item[key]}
                    onChange={(e) =>
                      handleItemChange(index, key, e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-brand-accent outline-none"
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAdd}
        className="flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-emerald-700 mt-2"
      >
        <Plus size={16} /> Add New Item
      </button>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [activeSection, setActiveSection] = useState("hero");
  const [formData, setFormData] = useState<any>({});

  const {
    data: content,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["content"],
    queryFn: api.getContent,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (content && content[activeSection]) {
      setFormData(content[activeSection]);
    } else {
      setFormData({});
    }
  }, [activeSection, content]);

  const mutation = useMutation({
    mutationFn: (newData: any) => api.updateSection(activeSection, newData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["content"] });
      toast.success("Saved successfully!");
    },
    onError: () => {
      toast.error("Failed to save changes.");
    },
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
    toast.success("Logged out successfully");
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  const menuItems = [
    { id: "hero", label: "Hero Section", icon: <LayoutDashboard size={20} /> },
    { id: "about", label: "About Project", icon: <Type size={20} /> },
    { id: "amenities", label: "Amenities", icon: <List size={20} /> },
    { id: "updates", label: "Construction", icon: <ImageIcon size={20} /> },
    { id: "faq", label: "FAQ", icon: <Type size={20} /> },
    { id: "footer", label: "Footer", icon: <Type size={20} /> },
  ];

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center text-brand-primary">
        <Loader2 className="animate-spin mr-2" /> Loading CMS...
      </div>
    );

  if (isError)
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Error loading content. Please refresh.
      </div>
    );

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Add SEO component here */}
      <SEO title="Admin Dashboard" description="Manage your website content." />

      <aside className="w-64 bg-brand-dark text-white flex flex-col md:flex">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold">
            Admin<span className="text-brand-accent">Panel</span>
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? "bg-brand-accent text-white"
                  : "text-gray-400 hover:bg-white/10"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-white/5 rounded-lg transition"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
              Edit {activeSection}
            </h1>
          </header>

          <form
            onSubmit={handleSave}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            <div className="space-y-8">
              {Object.keys(formData).map((key) => {
                if (key === "_id" || key === "sectionId") return null;

                if (Array.isArray(formData[key])) {
                  return (
                    <div
                      key={key}
                      className="border-t pt-4 first:border-t-0 first:pt-0"
                    >
                      <label className="block text-lg font-bold text-gray-800 mb-3 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()} List
                      </label>
                      <ArrayEditor
                        data={formData[key]}
                        onUpdate={(newList) => handleInputChange(key, newList)}
                      />
                    </div>
                  );
                }

                if (
                  key.includes("description") ||
                  (typeof formData[key] === "string" &&
                    formData[key].length > 60)
                ) {
                  return (
                    <div key={key}>
                      <label className="block text-sm font-bold text-gray-700 mb-2 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </label>
                      <textarea
                        value={formData[key]}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent outline-none h-32"
                      />
                    </div>
                  );
                }

                return (
                  <div key={key}>
                    <label className="block text-sm font-bold text-gray-700 mb-2 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    <input
                      type="text"
                      value={formData[key]}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent outline-none"
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end sticky bottom-0 bg-white p-4 -mx-4 -mb-4 md:static md:bg-transparent md:p-0">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="flex items-center gap-2 bg-brand-dark hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-bold transition disabled:opacity-50 shadow-lg"
              >
                {mutation.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Save size={20} />
                )}
                Save All Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
