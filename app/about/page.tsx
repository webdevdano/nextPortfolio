import Hero from "../components/Hero";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-(--foreground) text-sm font-medium tracking-wide">{title}</h2>
      <div className="mt-5 space-y-6">{children}</div>
    </section>
  );
}

function Item({
  heading,
  meta,
  children,
}: {
  heading: string;
  meta: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-(--foreground) font-medium">{heading}</h3>
          <p className="mt-1 text-sm text-(--foreground)/50">{meta}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-(--foreground)/70 leading-relaxed">{children}</div>
    </div>
  );
}

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

        <section className="mt-10">
          <h1 className="text-(--foreground) text-5xl font-semibold tracking-tight">Your Name</h1>
          <p className="mt-3 text-(--foreground)/60 text-lg">Design Engineer</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <a className="text-(--foreground) opacity-70 hover:opacity-100 transition-opacity" href="#">
              GitHub
            </a>
            <a className="text-(--foreground) opacity-70 hover:opacity-100 transition-opacity" href="#">
              LinkedIn
            </a>
            <a className="text-(--foreground) opacity-70 hover:opacity-100 transition-opacity" href="#">
              Email
            </a>
          </div>

          <p className="mt-6 max-w-2xl text-(--foreground)/70 leading-relaxed">
            I build elegant, fast web experiences and design systems. I like turning complex
            problems into simple, polished interfaces.
          </p>
        </section>

        <Section title="Work Experience">
          <Item heading="Company" meta="2024 — Present · Title">
            <ul className="list-disc pl-5 space-y-2">
              <li>Shipped UI improvements across key product flows.</li>
              <li>Built reusable components to speed up delivery.</li>
              <li>Improved performance and accessibility across the app.</li>
            </ul>
          </Item>
          <Item heading="Company" meta="2021 — 2024 · Title">
            <ul className="list-disc pl-5 space-y-2">
              <li>Led design system adoption for multiple teams.</li>
              <li>Collaborated with engineering and product to define UX.</li>
            </ul>
          </Item>
        </Section>

        <Section title="Studies">
          <Item heading="University" meta="Degree / Focus">
            Coursework and projects focused on software engineering and product design.
          </Item>
          <Item heading="Program" meta="Online / Certificate">
            Continued learning in front-end engineering and personal branding.
          </Item>
        </Section>

        <Section title="Technical Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <h3 className="text-(--foreground) font-medium">Next.js</h3>
              <p className="mt-2 text-sm text-(--foreground)/70 leading-relaxed">
                Building modern apps with the App Router, server components, and great DX.
              </p>
            </div>
            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <h3 className="text-(--foreground) font-medium">UI Engineering</h3>
              <p className="mt-2 text-sm text-(--foreground)/70 leading-relaxed">
                Component systems, accessible patterns, and performance-minded styling.
              </p>
            </div>
            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <h3 className="text-(--foreground) font-medium">Design Tools</h3>
              <p className="mt-2 text-sm text-(--foreground)/70 leading-relaxed">
                Prototyping and iterating quickly with a design-first mindset.
              </p>
            </div>
            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <h3 className="text-(--foreground) font-medium">TypeScript</h3>
              <p className="mt-2 text-sm text-(--foreground)/70 leading-relaxed">
                Strong types, safer refactors, and cleaner APIs.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}