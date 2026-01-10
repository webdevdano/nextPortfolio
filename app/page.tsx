import Hero from "./components/Hero";
import { Item, Section } from "./components/ContentBlocks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background]">
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-16 ">
        <Hero
          carousel="manual"
          media={[
            { kind: "video", src: "/PortfolioMedia/Videos/BigSurFalls.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/BonitaFallsClose.jpeg", alt: "Close Up Bonita Falls" },
            { kind: "image", src: "/PortfolioMedia/Images/BonitaFallsPortrait.jpeg", alt: "Bonita Falls" },
            { kind: "video", src: "/PortfolioMedia/Videos/BonitaFalls.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/MistFallsPortrait.jpeg", alt: "Mist Falls" },
            { kind: "video", src: "/PortfolioMedia/Videos/MistFalls.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/SequoiasCrown.jpeg", alt: "Sequoias Crown" },
            { kind: "image", src: "/PortfolioMedia/Images/SequoiasRoad.jpeg", alt: "Sequoias Road" },
            { kind: "image", src: "/PortfolioMedia/Images/SequoiasShyness.jpeg", alt: "Sequoias" },
            { kind: "image", src: "/PortfolioMedia/Images/ShermSunset.jpeg", alt: "Sunset" },
            { kind: "image", src: "/PortfolioMedia/Images/YosemiteTunnelView.jpeg" },
            { kind: "video", src: "/PortfolioMedia/Videos/YosemiteAS.mp4" },
            { kind: "image", src: "/PortfolioMedia/Images/YosemiteFallsClosePortrait.jpeg", alt: "Yosemite Falls Close" },
            { kind: "image", src: "/PortfolioMedia/Images/YosemiteFallsPortrait.jpeg", alt: "Yosemite Falls" }
          ]}
        />

        <div className="mt-10 rounded-3xl border border-(--foreground)/12 bg-(--background)/55 backdrop-blur-md p-8">
          <section className="mt-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h1 className="text-(--foreground) text-5xl font-semibold tracking-tight">Daniel Marinelarena</h1>
                <p className="mt-3 text-(--foreground)/60 text-lg">Full Stack Software Developer</p>
              </div>

              <Image
                src="/PortfolioMedia/Images/selfie.jpg"
                alt="Daniel Marinelarena"
                width={160}
                height={160}
                className="h-30 w-30 sm:h-30 sm:w-30 mt-2 mr-5 rounded-full object-cover border border-(--foreground)/15 bg-(--foreground)/3 shrink-0"
              />
            </div>

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
              Freelancer with a passion for coding, cooking, music & a lot of love for the outdoors.
              Looking to land and grow with a company giving 110%, becoming the best version of myself to date.
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

          {/* Studies */}
          <Section title="Studies">
            <Item
              heading="Springboard University"
              meta={
                <>
                  <span>Online / Certificate in Software Engineering</span>
                  <br />
                  <span>2025 — 2025</span>
                </>
              }
            >
              Coursework and projects focused on software engineering and product design.
            </Item>
            <Item
              heading="100Devs"
              meta={
                <>
                  <span>Online / Bootcamp</span>
                  <br />
                  <span>2022 — 2023</span>
                </>
              }
            >
              Continued learning in front-end engineering and personal branding.
            </Item>
          </Section>

          {/* Skills */}
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
        </div>
      </main>
    </div>
  );
}
