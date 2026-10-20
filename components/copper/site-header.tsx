import Link from "next/link";
import { Logo } from "@/components/copper/logo";
import { ModeToggle } from "@/components/copper/mode-toggle";

const NAV_LINKS = [
  { href: "#products", label: "Products" },
  { href: "#plus", label: "Copper Plus" },
  { href: "#privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="bg-background/90 sticky top-0 z-50 border-b backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 sm:px-6">
        <Link href="/" aria-label="Copper State Labs home">
          <Logo className="w-36 sm:w-44" />
        </Link>
        <nav
          aria-label="Main navigation"
          className="order-last w-full sm:order-none sm:ml-auto sm:w-auto"
        >
          <ul className="flex justify-center gap-6 text-sm font-semibold sm:justify-end">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-primary focus-visible:text-primary inline-block py-1 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
