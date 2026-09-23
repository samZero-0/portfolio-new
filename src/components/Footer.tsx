import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-fg/10 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 text-sm text-fg/50 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted with Next.js.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="transition-colors hover:text-accent-text">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#top" className="transition-colors hover:text-accent-text">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
