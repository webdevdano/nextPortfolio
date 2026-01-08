import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background]">
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-16">
        <Hero
          name="Your Name"
          title="Design Engineer"
          bio="Minimal, dark portfolio inspired by Magic Portfolio. Visit the About page to see the full layout."
        />
      </main>
    </div>
  );
}
