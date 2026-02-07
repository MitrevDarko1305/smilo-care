"use client"
{/* eslint-disable @next/next/no-html-link-for-pages 
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Navbar() {
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasStartedScrolling(window.scrollY > 0);

    // set initial state on mount (important on refresh mid-page)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink =
    "cursor-pointer relative text-sm tracking-wide text-foreground/70 hover:text-primary " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-primary " +
    "after:transition-[width] after:duration-300 after:ease-out hover:after:w-full";

  return (
     <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="px-[20px] py-[20px] flex justify-between items-center tracking-wide transition-all duration-300">
        <Link
          href="#hero"
          className={[
            "text-[25px] font-semibold hover:text-foreground tracking-tight transition-colors duration-300",
            hasStartedScrolling ? "text-primary" : "text-foreground/60",
          ].join(" ")}
        >
          Smilo - Care <span className="text-transparent hover:text-foreground">.</span>
        </Link>

        <ul className="flex items-center gap-[45px]">
          <li className={navLink}><Link href="/">Home</Link></li>
          <li className={navLink}><Link href="/services">Services</Link></li>
          <li className={navLink}><Link href="/about">Why Trust Us</Link></li>
          <li className={navLink}><Link href="/faq">FAQ</Link></li>
          <li className={navLink}><Link href="/appointment">Appointment</Link></li>
          <li className={navLink}><Link href="/blog">Guidance</Link></li>
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 bg-primary rounded-lg text-sm tracking-wide text-white hover:bg-foreground transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
*/}




import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setHasStartedScrolling(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // optional: prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLink =
    "cursor-pointer relative text-sm tracking-wide text-foreground/70 hover:text-primary " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-primary " +
    "after:transition-[width] after:duration-300 after:ease-out hover:after:w-full";

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "Why Trust Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/appointment", label: "Appointment" },
    { href: "/blog", label: "Guidance" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm relative">
      <div className="px-[20px] py-[20px] flex justify-between items-center tracking-wide transition-all duration-300">
        <Link
          href="/#hero"
          className={[
            "text-[25px] font-semibold hover:text-foreground tracking-tight transition-colors duration-300",
            hasStartedScrolling ? "text-primary" : "text-foreground/60",
          ].join(" ")}
        >
          Smilo - Care{" "}
          <span className="text-transparent hover:text-foreground">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-[45px]">
          {links.map((l) => (
            <li key={l.href} className={navLink}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 bg-primary rounded-lg text-sm tracking-wide text-white hover:bg-foreground transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 transition"
        >
          {/* simple icon */}
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-5 w-6">
            <span
              className={[
                "absolute left-0 top-0 h-[2px] w-6 bg-foreground transition-transform duration-200",
                mobileOpen ? "translate-y-[9px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[9px] h-[2px] w-6 bg-foreground transition-opacity duration-200",
                mobileOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[18px] h-[2px] w-6 bg-foreground transition-transform duration-200",
                mobileOpen ? "-translate-y-[9px] -rotate-45" : "",
              ].join(" ")}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={[
          "lg:hidden z-50 overflow-hidden transition-[max-height,opacity] duration-300",
          mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="px-[20px] pb-[18px] pt-[6px] border-t border-black/10 bg-white">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-foreground/80 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-primary rounded-lg text-sm tracking-wide text-white hover:bg-foreground transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Optional overlay (click to close) */}
      {mobileOpen && (
        <button
          aria-label="Close menu overlay"
          className="lg:hidden z-40  bg-black/20"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}


