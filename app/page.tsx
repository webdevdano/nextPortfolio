import Hero from "./components/Hero";
import { Item, Section } from "./components/ContentBlocks";
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
              Freelancer with a passion for coding, cooking, music & a lot of love for the outdoors.
              Looking to land and grow with a company giving 110%, becoming the best version of myself to date.
            </p>
          </section>

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

            <Item heading="Front-End / Full Stack Developer" meta="2022 — Present · Various Projects">
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

          {/* Skills */}
          <Section title="Technical Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
                <h3 className="text-(--foreground) font-medium">Next.js</h3>
                <p className="mt-2 text-sm text-(--body) leading-relaxed">
                  Building modern apps with the App Router, server components, and great DX.
                </p>
              </div>
              <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
                <h3 className="text-(--foreground) font-medium">UI Engineering</h3>
                <p className="mt-2 text-sm text-(--body) leading-relaxed">
                  Component systems, accessible patterns, and performance-minded styling.
                </p>
              </div>
              <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
                <h3 className="text-(--foreground) font-medium">Design Tools</h3>
                <p className="mt-2 text-sm text-(--body) leading-relaxed">
                  Prototyping and iterating quickly with a design-first mindset.
                </p>
              </div>
              <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
                <h3 className="text-(--foreground) font-medium">TypeScript</h3>
                <p className="mt-2 text-sm text-(--body) leading-relaxed">
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
