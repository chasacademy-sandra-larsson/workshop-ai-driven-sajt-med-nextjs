"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const topics = [
  { id: "animals", emoji: "🐾", label: "Djur" },
  { id: "space", emoji: "🚀", label: "Rymden" },
  { id: "history", emoji: "🏛️", label: "Historia" },
  { id: "food", emoji: "🍕", label: "Mat" },
  { id: "sports", emoji: "⚽", label: "Sport" },
  { id: "science", emoji: "🔬", label: "Vetenskap" },
];

export default function TopicPicker() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  function handleStart() {
    if (selected) {
      router.push(`/game/${selected}`);
    }
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-6">
      <h2 className="text-xl font-semibold text-center mb-4">Välj ett ämne</h2>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-all hover:border-purple-500 hover:-translate-y-0.5 ${
              selected === topic.id
                ? "border-purple-500 bg-purple-500/10"
                : "border-gray-700 bg-gray-900"
            }`}
            onClick={() => setSelected(topic.id)}
          >
            <span className="text-3xl block mb-1">{topic.emoji}</span>
            <span className="text-gray-100">{topic.label}</span>
          </button>
        ))}
      </div>

      <div className="text-center">
        <button
          className={`bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all hover:bg-purple-700 hover:-translate-y-0.5 ${
            !selected ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handleStart}
          disabled={!selected}
        >
          Starta spelet
        </button>
      </div>
    </div>
  );
}
