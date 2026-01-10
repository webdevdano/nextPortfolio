import {
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import { FaGithub } from "react-icons/fa";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.504h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.834L0 1.153h7.594l5.243 6.93 6.064-6.93Zm-1.29 19.494h2.04L6.486 3.238H4.3l13.312 17.409Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-(--foreground)/10">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-center gap-3 pb-6">
          <a
            href="https://www.linkedin.com/daniel-marinelarena-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="glass-sheen rounded-full border border-(--foreground)/15 bg-(--background)/55 p-2 text-(--foreground)/70 hover:text-(--foreground) hover:border-(--foreground)/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground)/25"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <path
                fill="currentColor"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286ZM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13ZM7.119 20.452H3.556V9h3.563v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003Z"
              />
            </svg>
          </a>

          <a
            href="https://github.com/webdevdano"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="glass-sheen rounded-full border border-(--foreground)/15 bg-(--background)/55 p-2 text-(--foreground)/70 hover:text-(--foreground) hover:border-(--foreground)/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground)/25"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href="https://x.com/webdevdano"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            title="X"
            className="glass-sheen rounded-full border border-(--foreground)/15 bg-(--background)/55 p-2 text-(--foreground)/70 hover:text-(--foreground) hover:border-(--foreground)/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground)/25"
          >
            <XIcon className="h-5 w-5" />
          </a>

          <a
            href="mailto:webdevdano@gmail.com"
            aria-label="Email"
            title="Email"
            className="glass-sheen rounded-full border border-(--foreground)/15 bg-(--background)/55 p-2 text-(--foreground)/70 hover:text-(--foreground) hover:border-(--foreground)/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground)/25"
          >
            <EnvelopeIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-(--foreground)/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} / Websites by Dano</span>
        </div>
      </div>
    </footer>
  );
}