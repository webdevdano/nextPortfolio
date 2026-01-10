export default function Footer() {
  return (
    <footer className="border-t border-(--foreground)/10">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-(--foreground)/60 flex items-center justify-between">
        <span>© {new Date().getFullYear()} / Websites by Dano</span>
      </div>
    </footer>
  );
}