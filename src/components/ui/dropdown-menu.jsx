import React, { useState } from "react";
import { ListFilter, Check } from "lucide-react";

const categories = ["Όλα", "Ebook", "Code", "Template"];

export default function CategoryDropdown({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <ListFilter className="h-5 w-5" />
        Φίλτρα
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => {
                  const selected = cat === "Όλα" ? "" : cat;
                  setSelectedCategory(selected);
                  onSelect(selected);
                  setOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedCategory === (cat === "Όλα" ? "" : cat)
                    ? "font-semibold"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {cat}
                {selectedCategory === (cat === "Όλα" ? "" : cat) && (
<Check className="w-4 h-4 text-blue-500" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
