// TODO: Person C bygger denna API-route!
//
// Routen ska:
// 1. Ta emot en POST-request med { topic: string } i body
// 2. Använda Gemini API för att generera ETT påstående om ämnet
// 3. Påståendet ska antingen vara sant (fakta) eller falskt (påhittat)
// 4. Returnera JSON: { statement: string, isTrue: boolean }
//
// Tips:
// - Importera GoogleGenAI: import { GoogleGenAI } from "@google/genai"
// - Skapa en instans: const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
// - Generera innehåll: const response = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: "din prompt" })
// - Läs svaret: response.text
// - Be Gemini svara med JSON-format i prompten!
// - Använd Math.random() för att ibland be om fakta, ibland påhitt
//
// Exempel på prompt:
// "Ge mig ett [sant/falskt] påstående om [ämne]. Svara BARA med JSON: { \"statement\": \"...\", \"isTrue\": true/false }"

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { topic } = await request.json();

  // --- TEMPORÄR HÅRDKODAD RESPONS ---
  // Ta bort detta och ersätt med riktig Gemini API-integration!
  const fakta = [
    {
      statement: "En bläckfisk har tre hjärtan",
      isTrue: true,
    },
    {
      statement: "Sandra Bullock är 50 år gammal",
      isTrue: true,
    },
    {
      statement: "Finland har en kung",
      isTrue: false,
    },
  ];

  const random = fakta[Math.floor(Math.random() * fakta.length)];

  return NextResponse.json(random);
}
