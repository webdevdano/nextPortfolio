import Hero from "../components/Hero";
import { Item, Section } from "../components/ContentBlocks";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-16">
        <Hero
          carousel="manual"
          media={[
            { kind: "image", src: "/PortfolioMedia/Images/HappyIslesSign.jpeg", alt: "Happy Isles" },
            { kind: "video", src: "/PortfolioMedia/Videos/SturtevantFalls1.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/ArcadiaFallsClose.jpeg", alt: "Arcadia Falls" },
            { kind: "image", src: "/PortfolioMedia/Images/BonitaFallsPortrait.jpeg", alt: "Bonita Falls" },
            { kind: "video", src: "/PortfolioMedia/Videos/SanAntonioFallsClose.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/SanAntonioMtnRange.jpeg", alt: "Mountain Range" },
            { kind: "image", src: "/PortfolioMedia/Images/SequoiasCrown.jpeg", alt: "Sequoias" },
            { kind: "image", src: "/PortfolioMedia/Images/SequoiasRoad.jpeg", alt: "Sequoias Road" },
            { kind: "image", src: "/PortfolioMedia/Images/YosemiteNature1.jpeg", alt: "Yosemite" },
            { kind: "image", src: "/PortfolioMedia/Images/HappyIslesParkingSun2.jpeg" },
            { kind: "video", src: "/PortfolioMedia/Videos/YosemiteAS.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/SturtevantFalls.jpeg", alt: "Sturtevant Falls" },
            { kind: "image", src: "/PortfolioMedia/Images/ShermShade.jpeg", alt: "Portrait" },
            { kind: "image", src: "/PortfolioMedia/Images/YosemiteTunnelView.jpeg", alt: "Tunnel View" },
          ]}
        />

        <div className="mt-10 rounded-3xl border border-(--foreground)/12 bg-(--background)/55 backdrop-blur-md p-8">
          <Section title="About Me">
            <Item heading="Daniel Marinelarena" meta="Design Engineer">
              Hello! I&apos;m Daniel, a design engineer with a passion for creating innovative solutions
              that blend functionality with aesthetics. With a background in mechanical engineering
              and a keen eye for detail, I strive to bring ideas to life through thoughtful design
              and meticulous execution.
            </Item>
            <Item heading="My Work" meta="Portfolio Highlights">
              My portfolio showcases a diverse range of projects, from product design to user
              experience enhancements. Each project reflects my commitment to excellence and my
              ability to adapt to various design challenges. I believe in the power of collaboration
              and continuous learning to push the boundaries of what&apos;s possible.
            </Item>
          </Section>
        </div>
      </main>
    </div>
  );
}