import Link from "next/link";
import { navLinks, owner } from "@/store";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[color:rgb(245_241_234_/_0.8)] border-b border-ink/10">
      <div className="max-w-site mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-tightish">
          {owner.wordmark.replace(/\.$/, "")}
          <span className="text-accent">.</span>
        </Link>
        <ul className="flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors relative group"
              >
                {link.label}
                <span className="absolute left-0 right-0 -bottom-1 h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
