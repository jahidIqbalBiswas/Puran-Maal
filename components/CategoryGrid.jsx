const categories = [
  { name: "Mobiles", icon: "📱" },
  { name: "Electronics", icon: "💻" },
  { name: "Vehicles", icon: "🚗" },
  { name: "Property", icon: "🏠" },
  { name: "Home & Living", icon: "🪑" },
  { name: "Fashion", icon: "👕" },
  { name: "Jobs", icon: "💼" },
  { name: "Services", icon: "🛠️" },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition"
        >
          <div className="text-3xl">{cat.icon}</div>
          <p className="text-sm font-medium text-gray-700">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
