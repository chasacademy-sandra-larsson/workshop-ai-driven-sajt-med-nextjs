import TopicPicker from "./components/TopicPicker";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">
        Fakta eller påhitt?
      </h1>
      <p className="text-center text-gray-400 mb-8">
        AI:n ger dig ett påstående. Kan du avgöra om det är sant eller påhittat?
      </p>

      <TopicPicker />
    </div>
  );
}
