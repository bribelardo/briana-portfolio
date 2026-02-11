import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  return (
    <header className="border-b border-black">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="text-xs font-bold tracking-[0.25em] uppercase"
        >
          Briana Mae Belardo
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-xs font-semibold tracking-[0.2em] uppercase md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#newsletter"
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-background transition-colors hover:bg-black"
          >
            Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}

