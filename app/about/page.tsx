import Hero from "../components/Hero";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-32">
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
          <h1 className="text-(--foreground) text-3xl sm:text-4xl font-semibold tracking-tight">About Me</h1>
          <p className="mt-6 text-(--body) leading-relaxed">
            I am a driven full-stack developer with a strong foundation in HTML, CSS, JavaScript, React, TailwindCSS,
            Node.js, Express and MongoDB, honed through intensive bootcamps with Springboard and 100Devs. Transitioning
            from a fast-paced role at an Amazon warehouse and weekend bartending, I bring a problem-solving mindset
            and a knack for creating efficient, user-focused solutions. <br />
            Whether designing responsive, visually appealing front-ends with React and TailwindCSS or building scalable
            backends with Node.js, Express, and MongoDB, I thrive on turning ideas into functional, impactful applications.
            <br />
            Beyond coding, I am passionate about continuous learning and staying abreast of industry trends to deliver
            cutting-edge solutions. In my free time I enjoy cooking new things or perfecting dishes I know, taking hikes,
            gaming, producing music in Ableton and cheering on my favorite teams with loved ones.
          </p>
        </div>
      </main>
    </div>
  );
}