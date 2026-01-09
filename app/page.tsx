import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background]">
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-16">
        <Hero
          carousel="auto"
          media={[
            { kind: "image", src: "/next.svg", alt: "Next" },
            { kind: "image", src: "/vercel.svg", alt: "Vercel" },
            { kind: "image", src: "/globe.svg", alt: "Globe" },
            { kind: "image", src: "/window.svg", alt: "Window" },
          ]}
        />

        <section className="mt-10">
          <h1 className="text-(--foreground) text-5xl font-semibold tracking-tight">Your Name</h1>
          <p className="mt-3 text-(--foreground)/60 text-lg">Design Engineer</p>
          <p className="mt-6 max-w-2xl text-(--foreground)/70 leading-relaxed">
            Minimal portfolio with a personal media strip. Visit the About page to see the full
            layout.
          </p>
        </section>
      </main>
    </div>
  );
}
