import { Trash2, Plus } from "lucide-react";

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

export default ArrayEditor;
