
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background]">
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-16">
      
        <Hero
          carousel="manual"
          media={[
            { kind: "video", src: "/PortfolioMedia/Videos/BigSurFalls.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/ShermSelfie.jpeg", alt: "Portrait" },
            { kind: "image", src: "/PortfolioMedia/Images/YosemiteTunnelView.jpeg", alt: "Yosemite Tunnel View" },
            { kind: "video", src: "/PortfolioMedia/Videos/BonitaFalls.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/MistFallsPortrait.jpeg", alt: "Mist Falls" },
            { kind: "video", src: "/PortfolioMedia/Videos/MistFalls.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/MistTrail1.jpeg", alt: "Mist Trail" },
            { kind: "image", src: "/PortfolioMedia/Images/SequoiasRoad.jpeg", alt: "Sequoias Road" },
            { kind: "image", src: "/PortfolioMedia/Images/SequoiasShyness.jpeg", alt: "Sequoias" },
            { kind: "image", src: "/PortfolioMedia/Images/ShermSunset.jpeg", alt: "Sunset" },
            { kind: "video", src: "/PortfolioMedia/Videos/SturtevantFalls1.mp4" },
            { kind: "video", src: "/PortfolioMedia/Videos/YosemiteAS.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/YosemiteFallsClosePortrait.jpeg", alt: "Yosemite Falls Close" },
            { kind: "image", src: "/PortfolioMedia/Images/YosemiteFallsPortrait.jpeg", alt: "Yosemite Falls" },
            { kind: "image", src: "/PortfolioMedia/Images/YosemiteNature1.jpeg", alt: "Yosemite Nature" },
            { kind: "image", src: "/PortfolioMedia/Images/HappyIslesParkingSun1.jpeg", alt: "Happy Isles" },
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
