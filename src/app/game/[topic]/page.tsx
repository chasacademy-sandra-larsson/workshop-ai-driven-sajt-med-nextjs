"use client";

// TODO: Person B bygger denna sida!
//
// Sidan ska:
// 1. Läsa "topic" från params (redan gjort nedan)
// 2. Hämta ett påstående från /api/generate (POST med topic i body)
// 3. Visa påståendet i ett kort
// 4. Visa två knappar: "Fakta" och "Påhitt"
// 5. När spelaren klickar — visa om det var rätt eller fel
// 6. Hålla koll på poäng (rätt/totalt)
// 7. Ha en "Nästa fråga"-knapp som hämtar nytt påstående
//
// Exempelanrop till API:et:
//
//   const res = await fetch("/api/generate", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ topic: "animals" }),
//   });
//   const data = await res.json();
//   // data.statement = "Delfiner sover med ett öga öppet"
//   // data.isTrue = true
//

import { use } from "react";

export default function GamePage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = use(params);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">
        Fakta eller påhitt?
      </h1>
      <p className="text-center text-gray-400 mb-8">Ämne: {topic}</p>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-6">
        <p className="text-xl leading-relaxed text-center py-8 mb-6">
          Här ska påståendet visas! Bygg vidare på denna sida.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="flex-1 max-w-[200px] bg-emerald-500 text-white font-semibold py-4 text-lg rounded-lg cursor-pointer transition-all hover:bg-emerald-600 hover:-translate-y-0.5">
            Fakta
          </button>
          <button className="flex-1 max-w-[200px] bg-red-500 text-white font-semibold py-4 text-lg rounded-lg cursor-pointer transition-all hover:bg-red-600 hover:-translate-y-0.5">
            Påhitt
          </button>
        </div>
      </div>

      <p className="text-center text-2xl font-bold">Poäng: 0 / 0</p>
    </div>
  );
}
