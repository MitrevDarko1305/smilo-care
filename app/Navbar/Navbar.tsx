"use client";

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
          <li className={navLink}><Link href="/how-it-works">How it works</Link></li>
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


