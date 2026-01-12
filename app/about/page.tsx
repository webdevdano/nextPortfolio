import Hero from "../components/Hero";
import { Item, Section } from "../components/ContentBlocks";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/20/solid";


export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-32">
        <Hero
          carousel="manual"
          eagerCount={2}
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
            In my free time I enjoy cooking new things or perfecting dishes I know, taking hikes, going to the gym,
            gaming and cheering on my favorite teams with loved ones.<br/>
            If you&apos;re looking for a dedicated developer eager to contribute and grow, let&apos;s connect!
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/daniel-marinelarena-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="glass-sheen inline-flex items-center gap-2 rounded-full border border-(--foreground)/25 bg-(--foreground)/5 px-4 py-2 text-sm font-medium text-(--foreground) hover:bg-(--foreground)/8 hover:border-(--foreground)/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground)/35"
            >
              <span
                className="inline-flex items-center justify-center rounded-full border border-(--foreground)/30 bg-(--foreground)/8 p-1.5"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286ZM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13ZM7.119 20.452H3.556V9h3.563v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003Z"
                  />
                </svg>
              </span>
              LinkedIn
            </a>

            <a
              href="mailto:webdevdano@gmail.com"
              aria-label="Email"
              title="Email"
              className="glass-sheen inline-flex items-center gap-2 rounded-full border border-(--foreground)/25 bg-(--foreground)/5 px-4 py-2 text-sm font-medium text-(--foreground) hover:bg-(--foreground)/8 hover:border-(--foreground)/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground)/35"
            >
              <span
                className="inline-flex items-center justify-center rounded-full border border-(--foreground)/30 bg-(--foreground)/8 p-1.5"
                aria-hidden="true"
              >
                <EnvelopeIcon className="h-4 w-4" />
              </span>
              Email
            </a>
          </div>

          <div className="mt-4">
            <a
              href="/PortfolioMedia/Daniel_Marinelarena_WebDev-Resume.pdf"
              download
              className="glass-sheen inline-flex items-center gap-2 rounded-full border border-(--foreground)/25 bg-(--foreground)/5 px-4 py-2 text-sm font-medium text-(--foreground) hover:bg-(--foreground)/8 hover:border-(--foreground)/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground)/35"
              aria-label="Download resume PDF"
            >
              <span
                className="inline-flex items-center justify-center rounded-full border border-(--foreground)/30 bg-(--foreground)/8 p-1.5"
                aria-hidden="true"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
              </span>
              Resume (PDF)
            </a>
          </div>

          <Section title="Work Experience">
          
                      <Item heading="Full Stack Developer - (Client Projects)" meta="2025 — Present · Freelancer">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Designed and developed full-stack web applications using the MERN stack and Next.js,
                            delivering responsive, mobile-first user experiences.</li>
                          <li>Implemented Stripe payment processing, including checkout flows and secure transaction
                            handling, for e-commerce functionality. As well as an admin dashboards enabling business 
                            owners to manage products, pricing, and content without developer intervention.</li>
                          <li>Refactored and enhanced existing applications with TypeScript and Tailwind CSS, 
                            improving maintainability, performance, and UI consistency.</li>
                          <li>Deployed applications to Netlify, Render and Vercel, managing environment variables,
                            build pipelines, and production configurations.</li>
                        </ul>
                      </Item>
          
                      <Item heading="Front-End / Full Stack Developer" meta="2023 — Present · Various Projects">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Built and deployed multiple full-stack applications including a barbershop booking 
                            platform and an e-commerce site using React, Node.js, Express, and MongoDB.</li>
                          <li>Implemented authentication, RESTful APIs, and database relationships to support real-world business logic.</li>
                          <li>Collaborated in a remote, team-based learning environment emphasizing industry best practices, code reviews, 
                            and production-ready standards.</li>
                        </ul>
                      </Item>
          
                      <Item heading='Bartender / Barback' meta='2021 - Present · Event Aces'>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Provided exceptional customer service in a fast-paced event environment, ensuring guest satisfaction.</li>
                          <li>Managed and worked in high-pressure, fast-paced environments serving hundreds of customers per shift, developing strong communication,
                            time management, and reliability.</li>
                          <li>Maintained cleanliness and organization of the bar area, adhering to health and safety regulations. Trusted with inventory management,
                            logistics, and end of event operations experience directly transferable to production ownership in engineering teams.</li>
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
                        -700 Hour course <br/>
                        -Covering key aspects of front-end & back-end development, algorithms, databases and data structures.
                        <br/>
                        Front-End Development <br/>
                        -HTML5 (Semantic Markup, Accessibility/WCAG)
                        -CSS (Later TailwindCSS for rapid, responsive styling) <br/>
                        -JavaScript (ES6+ (Promises, Async/Await, Destructuring))
                        -DOM Manipulation, Event-Driven Programming <br/>
                        -Fetch API, Axios for API integration <br/>
                        -Frameworks/Libraries-  React.js for building dynamic user interfaces, state management with Redux and Context API, routing with React Router <br/>
                        -Testing- Jest and React Testing Library for unit and integration testing <br/>
                        -Version Control- Git (Branching, Merging, Pull Requests), GitHub for collaboration and project management <br/>
                        -Deployment- Netlify/Vercel for static front-end deployment, CI/CD with GitHub Actions <br/>
                        -TypeScript- Strong typing, interfaces, generics, and type safety in both front-end and back-end codebases. <br/>
          
                        Back-End Development<br/>
                        -Node.js- Asynchronous Programming, File System Operations, Building Scalable APIs <br/>
                        -Express.js- RESTful APIs, Middleware, JWT Authentication, Error Handling <br/>
                        -Databases- MongoDB, Appwrite (Authentication, NoSQL Databases, Storage) <br/>
                        -Version Control- Git (Branching, Merging, Pull Requests), GitHub for collaboration and project management <br/>
                        -Deployment- Netlify/Render for static and full-stack app deployment, CI/CD with GitHub Actions
                      </Item>
                      <Item
                        heading="100Devs"
                        meta={
                          <>
                            <span>Online / Bootcamp</span>
                            <br />
                            <span>2023 — 2024</span>
                          </>
                        }
                      >
                        Completed 55-class curriculum via live and recorded sessions on YouTube, covering beginner-to-advanced 
                        full-stack development with HTML, CSS, JavaScript, Node.js, Express, MongoDB, and real-world projects.
                      </Item>
                    </Section>
          
        </div>
      </main>
    </div>
  );
}