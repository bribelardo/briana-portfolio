import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  return (
    <header className="border-b-2 border-[#473144] bg-[#473144]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase text-white transition-colors hover:text-[#FFCAD4]"
        >
          <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white">
            <Image
              src="/bri-pic.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="40px"
            />
          </span>
          Briana Mae Belardo
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-xs font-semibold tracking-[0.2em] uppercase md:flex">
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
          <Link
            href="#newsletter"
            className="inline-flex items-center justify-center rounded-full bg-[#FFCAD4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#473144] transition-all hover:bg-[#473144] hover:text-[#FFCAD4] hover:border hover:border-[#FFCAD4] hover:scale-105"
          >
            Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}

