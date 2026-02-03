"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "";
  const location = searchParams.get("location") || "";

  function updateFilter(key, value) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/products?${params.toString()}`);
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4">
      {/* Category */}
      <select
        value={category}
        onChange={(e) => updateFilter("category", e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Sports">Sports</option>
        <option value="Vehicles">Vehicles</option>
      </select>

      {/* Location */}
      <select
        value={location}
        onChange={(e) => updateFilter("location", e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="">All Locations</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Chattogram">Chattogram</option>
        <option value="Rajshahi">Rajshahi</option>
      </select>
    </div>
  );
}
