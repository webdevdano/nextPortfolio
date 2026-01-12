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
              I&apos;m a full-stack developer who loves building fast, polished web apps.<br/>
              Outside of coding, I&apos;m into cooking, music, and the outdoors.<br /> I&apos;m currently looking for a 
              team where I can contribute, learn and continue becoming a better developer.
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
                <h3 className="text-(--foreground) font-medium">Third-Party Platforms</h3>
                <p className="mt-2 text-sm text-(--body) leading-relaxed">
                  Git, GitHub, Vercel, Stripe, Render, Netlify
                </p>
              </div>
              <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
                <h3 className="text-(--foreground) font-medium">Miscellaneous</h3>
                <p className="mt-2 text-sm text-(--body) leading-relaxed">
                  Responsive Design, CRUD Applications, Performance/UX (loading + error states),
                  Accessibility (keyboard + semantic HTML)

                </p>
              </div>
            </div>
          </Section>


          {/* Recent Projects */} 
          <Section title="Recent Projects">
            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="min-w-0">
                  <h3 className="text-(--foreground) font-medium">Hidden Gifts</h3>
                  <p className="mt-2 text-sm text-(--body) leading-relaxed">
                    Recent commissioned E-Commerce website built with Next.js, React, Node, Express, MongoDB, and TailwindCSS. <br />
                    Features include product browsing, shopping cart, user authentication, Stripe payment integration and an admin panel with CRUD functions.
                  </p>
                </div>

                <div
                  className="group w-full sm:w-64 shrink-0"
                  tabIndex={0}
                  aria-label="Hidden Gifts preview (hover to expand)"
                  title="Hover to expand"
                >
                  <div className="relative overflow-visible">
                    <div className="relative overflow-hidden rounded-2xl border border-(--foreground)/10 bg-(--background)/40 transition-transform duration-300 ease-out sm:group-hover:scale-[1.7] sm:group-hover:-translate-y-6 sm:group-hover:-translate-x-6 sm:group-hover:z-20 sm:group-focus-visible:scale-[1.7] sm:group-focus-visible:-translate-y-6 sm:group-focus-visible:-translate-x-6 sm:group-focus-visible:z-20">
                      <video
                        className="h-40 w-full object-cover"
                        src="/PortfolioMedia/Videos/Projects/HiddenGifts.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="min-w-0">
                  <h3 className="text-(--foreground) font-medium">UnitedFarms</h3>
                  <p className="mt-2 text-sm text-(--body) leading-relaxed">
                    Fullstack farm locator helping users discover local farms, products, and availability.<br/>
                    Developed with Next.js, React + Typescript, Tailwind, and MERN Backend. <br/>
                    Including user login, search, API integration for location data and content management.<br/>
                    Biggest technical lift was implementing reliable geolocation filtering and secure API endpoints.<br/>
                  </p>
                </div>

                <div
                  className="group w-full sm:w-64 shrink-0"
                  tabIndex={0}
                  aria-label="UnitedFarms preview (hover to expand)"
                  title="Hover to expand"
                >
                  <div className="relative overflow-visible">
                    <div className="relative overflow-hidden rounded-2xl border border-(--foreground)/10 bg-(--background)/40 transition-transform duration-300 ease-out sm:group-hover:scale-[1.7] sm:group-hover:-translate-y-6 sm:group-hover:-translate-x-6 sm:group-hover:z-20 sm:group-focus-visible:scale-[1.7] sm:group-focus-visible:-translate-y-6 sm:group-focus-visible:-translate-x-6 sm:group-focus-visible:z-20">
                      <video
                        className="h-40 w-full object-cover"
                        src="/PortfolioMedia/Videos/Projects/UnitedFarms.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="min-w-0">
                  <h3 className="text-(--foreground) font-medium">Surfs Up E-Commerce</h3>
                  <p className="mt-2 text-sm text-(--body) leading-relaxed">
                    Surf gear & apparel store built to showcase products with clean visuals and frictionless purchasing.<br/>
                    Developed using React + TypeScript, TailwindCSS, MERN backend and Stripe integration for secure payments. <br/>
                    Focused on responsive design and fast loading for mobile shoppers.  <br/>
                    Handled cart persistence, product filtering, and order management. 
                  </p>
                </div>

                <div
                  className="group w-full sm:w-64 shrink-0"
                  tabIndex={0}
                  aria-label="Surfs Up preview (hover to expand)"
                  title="Hover to expand"
                >
                  <div className="relative overflow-visible">
                    <div className="relative overflow-hidden rounded-2xl border border-(--foreground)/10 bg-(--background)/40 transition-transform duration-300 ease-out sm:group-hover:scale-[1.7] sm:group-hover:-translate-y-6 sm:group-hover:-translate-x-6 sm:group-hover:z-20 sm:group-focus-visible:scale-[1.7] sm:group-focus-visible:-translate-y-6 sm:group-focus-visible:-translate-x-6 sm:group-focus-visible:z-20">
                      <video
                        className="h-40 w-full object-cover"
                        src="/PortfolioMedia/Videos/Projects/SurfsUp.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Neighbors hidden for now */}
            {/*
            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <h3 className="text-(--foreground) font-medium">Neighbors</h3>
              <p className="mt-2 text-sm text-(--body) leading-relaxed">
                Twitter/X Clone social media app with login/storage made with Next, React, TypeScript, Node,
                Express, MongoDB and TailwindCSS.
                Still in progress looking to make more changes soon
              </p>
            </div>
            */}

            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="min-w-0">
                  <h3 className="text-(--foreground) font-medium">FreshCutz</h3>
                  <p className="mt-2 text-sm text-(--body) leading-relaxed">
                    Barbershop appointment platform allowing customers to book services and pay securely.<br/>  
                    Full MERN application with React + TypeScript frontend, Node/Express/MongoDB backend and styling with TailwindCSS.<br/>
                    Integrated Stripe for payments and implemented secure user authentication.<br/>
                    Biggest challenge was creating a smooth calendar + availability system that prevents double-bookings.
                  </p>
                </div>

                <div
                  className="group w-full sm:w-64 shrink-0"
                  tabIndex={0}
                  aria-label="FreshCutz preview (hover to expand)"
                  title="Hover to expand"
                >
                  <div className="relative overflow-visible">
                    <div className="relative overflow-hidden rounded-2xl border border-(--foreground)/10 bg-(--background)/40 transition-transform duration-300 ease-out sm:group-hover:scale-[1.7] sm:group-hover:-translate-y-6 sm:group-hover:-translate-x-6 sm:group-hover:z-20 sm:group-focus-visible:scale-[1.7] sm:group-focus-visible:-translate-y-6 sm:group-focus-visible:-translate-x-6 sm:group-focus-visible:z-20">
                      <video
                        className="h-40 w-full object-cover"
                        src="/PortfolioMedia/Videos/Projects/FreshCutz.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="min-w-0">
                  <h3 className="text-(--foreground) font-medium">TasksOnTasks</h3>
                  <p className="mt-2 text-sm text-(--body) leading-relaxed">
                    Full-featured task management app for individuals, built with React + TypeScript, TailwindCSS, Node/Express/MongoDB backend.<br/>
                    Includes user authentication, CRUD operations, drag-and-drop tasks, and persistent storage.<br/>
                    Focused on clean UX and responsive design across devices. 
                    Overcame auth + state management complexity with good folder structure and custom hooks.  
                  </p>
                </div>

                <div
                  className="group w-full sm:w-64 shrink-0"
                  tabIndex={0}
                  aria-label="TasksOnTasks preview (hover to expand)"
                  title="Hover to expand"
                >
                  <div className="relative overflow-visible">
                    <div className="relative overflow-hidden rounded-2xl border border-(--foreground)/10 bg-(--background)/40 transition-transform duration-300 ease-out sm:group-hover:scale-[1.7] sm:group-hover:-translate-y-6 sm:group-hover:-translate-x-6 sm:group-hover:z-20 sm:group-focus-visible:scale-[1.7] sm:group-focus-visible:-translate-y-6 sm:group-focus-visible:-translate-x-6 sm:group-focus-visible:z-20">
                      <video
                        className="h-40 w-full object-cover"
                        src="/PortfolioMedia/Videos/Projects/TasksOnTasks.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}
