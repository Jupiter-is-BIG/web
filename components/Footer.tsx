import { socialConfig } from "@/lib/config/socials";
import { generalConfig } from "@/lib/config/general";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <p className="font-mono text-xs text-black/40">
          © {new Date().getFullYear()} {generalConfig.name}. Last updated: {new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
        </p>
        <nav className="flex gap-6 items-center">
          {socialConfig.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/40 hover:text-black transition-colors"
            >
              <link.icon size={18} />
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}