export default function Footer() {
  return (
    <footer className="border-t border-(--foreground)/10">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-(--foreground)/60 flex items-center justify-between">
        <span>© {new Date().getFullYear()} / Daniel Marinelarena</span>
        <div className="flex items-center gap-4">
          <a className="hover:opacity-100 opacity-80 transition-opacity" href="#">
            GitHub
          </a>
          <a className="hover:opacity-100 opacity-80 transition-opacity" href="#">
            LinkedIn
          </a>
          <a className="hover:opacity-100 opacity-80 transition-opacity" href="#">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}