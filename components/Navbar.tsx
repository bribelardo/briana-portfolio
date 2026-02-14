import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="border-b-2 border-[#473144] bg-[#473144]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="text-xs font-bold tracking-[0.25em] uppercase text-white transition-colors hover:text-[#FFCAD4]"
        >
          Briana Mae Belardo
        </Link>
        <nav className="flex items-center">
          <ul className="flex items-center gap-6 text-xs font-semibold tracking-[0.2em] uppercase">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative text-white transition-colors hover:text-[#FFCAD4] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FFCAD4] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

