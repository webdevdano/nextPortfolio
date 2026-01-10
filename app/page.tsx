import Hero from "./components/Hero";
import { Section } from "./components/ContentBlocks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background]">
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-32 ">
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

            <p className="mt-6 max-w-2xl text-(--body) leading-relaxed">
              Freelancer with a passion for coding, cooking, music & the outdoors. <br/>
              Looking to land a career in tech and grow with a company giving 110%, becoming a better version of myself each day.
            </p>
          </section>

          
          {/* Skills */}
          <Section title="Technical Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
                <h3 className="text-(--foreground) font-medium">Front-End</h3>
                <p className="mt-2 text-sm text-(--body) leading-relaxed">
                  Next.js, React, TailwindCSS, TypeScript, HTML5, CSS3, JavaScript (ES6+)
                </p>
              </div>
              <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
                <h3 className="text-(--foreground) font-medium">Back-End</h3>
                <p className="mt-2 text-sm text-(--body) leading-relaxed">
                  Node.js, Express.js, MongoDB, RESTful APIs, JWT Authentication
                </p>
              </div>
              <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
                <h3 className="text-(--foreground) font-medium">Tools + Other Platforms</h3>
                <p className="mt-2 text-sm text-(--body) leading-relaxed">
                  Git, GitHub, Vercel, Stripe, Render, Netlify
                </p>
              </div>
              <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
                <h3 className="text-(--foreground) font-medium">Michellaneous</h3>
                <p className="mt-2 text-sm text-(--body) leading-relaxed">
                  Responsive Design, CRUD Applications, Bartending, Dancing pretty good sometimes
                </p>
              </div>
            </div>
          </Section>

          <Section title="Recent Projects">
            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <h3 className="text-(--foreground) font-medium">Hidden Gifts</h3>
              <p className="mt-2 text-sm text-(--body) leading-relaxed">
                Recent commissioned E-Commerce website built with Next.js, React, Node, Express, MongoDB, and TailwindCSS. <br/>
                Features include product browsing, shopping cart, user authentication, Stripe payment integration and an admin panel with CRUD functions.
              </p>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}
