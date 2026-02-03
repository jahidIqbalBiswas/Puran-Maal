"use client";

export default function SearchBar() {
  return (
    <div className="bg-white text-black rounded-2xl shadow-lg p-4 flex flex-col md:flex-row gap-3">
      {/* Location */}
      <select className="border rounded-lg px-4 py-3 text-sm focus:outline-none">
        <option>All Bangladesh</option>
        <option>Dhaka</option>
        <option>Chattogram</option>
        <option>Rajshahi</option>
        <option>Sylhet</option>
      </select>

      {/* Search */}
      <input
        type="text"
        placeholder="আপনি কী খুঁজছেন?"
        className="flex-1 border rounded-lg px-4 py-3 text-sm focus:outline-none"
      />

      {/* Button */}
      <button className="bg-secondary hover:opacity-90 text-black px-6 py-3 rounded-lg font-semibold">
        Search
      </button>
    </div>
  );
}
