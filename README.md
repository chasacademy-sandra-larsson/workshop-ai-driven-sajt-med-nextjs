# Workshop: Fakta eller påhitt? - Next.js + Gemini API

Bygg en AI-driven webbapp där spelaren ska avgöra om ett påstående är sant eller påhittat. AI:n (Google Gemini) genererar påståendena!

## Mappstruktur

```
starter/    <-- Workshopens startprojekt (detta delar ni ut)
solution/   <-- Komplett lösning (för läraren)
```

## Förarbete (innan workshopen)

1. **Skaffa API-nyckel:** Gå till [Google AI Studio](https://aistudio.google.com/app/apikey), logga in med ett Google-konto och klicka "Create API Key"

## Kom igång

```bash
# Klona repot
git clone <repo-url>
cd ai-driven-sajt-i-nextjs-med-gemini/starter

# Installera beroenden
npm install

# Skapa env-fil med er API-nyckel
touch .env.local
# Lägg till: GEMINI_API_KEY=din-api-nyckel

# Starta utvecklingsservern
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i webbläsaren.

## Hur Gemini API fungerar

Paketet `@google/genai` är redan installerat. Så här används det:

```javascript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: "Ge mig ett roligt fakta om katter",
});

console.log(response.text);
```

**Viktigt:** API-nyckeln ska BARA användas på serversidan (i API-routes), aldrig i klientkomponenter!

## Projektstruktur (starter)

```
src/app/
├── layout.tsx              ✅ Klar - layout med navigation (serverkomponent)
├── globals.css             ✅ Klar - Tailwind CSS
├── page.tsx                ✅ Klar - startsida (serverkomponent)
├── components/
│   └── TopicPicker.tsx     ✅ Klar - ämnesväljare (klientkomponent)
├── game/
│   └── [topic]/
│       └── page.tsx        🔨 Person B bygger - spelsidan (dynamisk route)
└── api/
    └── generate/
        └── route.ts        🔨 Person C bygger - API-route till Gemini
```

Styling görs med **Tailwind CSS** — skriv klasser direkt i `className`. Dokumentation: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Uppgifter

Ni är tre personer. Dela upp arbetet så här:

---

### Person A: Förbättra startsidan (`src/app/page.tsx` + `src/app/components/TopicPicker.tsx`)

Startsidan fungerar redan men kan förbättras. Er uppgift:

1. Lägg till fler ämnen i `topics`-arrayen (t.ex. musik, geografi, teknik)
2. Lägg till en svårighetsgrad-väljare (lätt/medel/svår) — skicka med det till spelsidan (t.ex. via query parameter eller utökad route)
3. Visa spelregler/instruktioner på sidan
4. **Bonus:** Lägg till ett inputfält där spelaren kan skriva in ett eget ämne

**Filer att redigera:** `src/app/components/TopicPicker.tsx` och `src/app/page.tsx`

---

### Person B: Bygg spelsidan (`src/app/game/[topic]/page.tsx`)

Det finns en placeholder — ni ska göra den interaktiv. Er uppgift:

1. Hämta ett påstående från `/api/generate` när sidan laddas (använd `fetch` med POST)
2. Visa påståendet i kortet
3. Gör knapparna "Fakta" och "Påhitt" funktionella — jämför spelarens svar med `isTrue`
4. Visa feedback (rätt/fel) efter varje svar
5. Räkna poäng (rätt svar / totala frågor)
6. Lägg till en "Nästa fråga"-knapp som hämtar ett nytt påstående
7. **Bonus:** Visa en sammanfattning efter 10 frågor

**Filer att redigera:** `src/app/game/[topic]/page.tsx`

**Tips:** Använd `useState` för att hålla koll på state (påstående, poäng, feedback). Använd `useEffect` för att hämta första frågan.

---

### Person C: Bygg API-routen (`src/app/api/generate/route.ts`)

Det finns en hårdkodad placeholder — ni ska koppla in Gemini API. Er uppgift:

1. Importera och konfigurera `@google/genai` med API-nyckeln från `process.env.GEMINI_API_KEY`
2. Ta emot `topic` (och ev. `difficulty`) från request body
3. Skriv en prompt som ber Gemini generera ett påstående som antingen är sant eller falskt
4. Slumpa med `Math.random()` om ni vill ha ett sant eller falskt påstående
5. Parsa Gemini:s svar och returnera `{ statement: string, isTrue: boolean }`
6. Lägg till felhantering (vad händer om API:et inte svarar?)
7. **Bonus:** Anpassa prompten baserat på svårighetsgrad

**Filer att redigera:** `src/app/api/generate/route.ts`

**Tips:** Be Gemini svara med JSON-format i prompten, t.ex:
```
"Ge mig ett SANT påstående om rymden. Svara BARA med JSON i detta format: { \"statement\": \"...\", \"isTrue\": true }"
```

---

## Jobba tillsammans

- **Person C** bör börja direkt — API-routen returnerar hårdkodad data så att Person B inte behöver vänta
- **Person B** kan börja bygga med den hårdkodade datan och byta till riktiga API-anrop när Person C är klar
- **Person A** jobbar oberoende med startsidan
- Kom överens om **dataformatet** tidigt! Just nu ser det ut så här:

```json
{
  "statement": "En bläckfisk har tre hjärtan",
  "isTrue": true
}
```

Om ni vill lägga till fler fält (t.ex. `explanation`, `difficulty`), prata ihop er!

## Diskutera när ni är klara

1. Vad är skillnaden mellan klient- och serverkomponenter i Next.js? Vilka av era filer är vilka?
2. Varför ligger API-anropet till Gemini i en API-route istället för direkt i klientkomponenten?
3. Hur skulle ni kunna använda server-komponenter för att förbättra prestandan?
