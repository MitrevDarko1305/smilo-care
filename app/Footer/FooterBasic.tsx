import React from "react";
import Link from "next/link";
import RevealOnScroll from "../Animations/RevealOnScroll";



export default function Footer() {
  return (
    <footer className="bg-[#f6f8f2] py-12 sm:pt-24 ">
      <RevealOnScroll>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <RevealOnScroll>
        <Link
        href="#hero"
        className="text-[25px] font-semibold tracking-tight text-primary hover:text-foreground transition-colors duration-300"
        >
        Smilo - Care <span className="text-transparent"></span>
        </Link>
        </RevealOnScroll>

        <nav
          aria-label="Footer"
          className="mt-8 grid sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 sm:flex sm:justify-center sm:gap-8"
        >
          {["Services", "FAQ", "Why Trust Us", "Guidance"].map(
            (item) => (
              <div key={item}>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-500 hover:text-primary"
                >
                  {item}
                </a>
              </div>
            )
          )}
        </nav>

        <div className="mt-12 border-t border-gray-900/10 pt-8 sm:mt-16 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-6 sm:order-2">

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/darko-mitrev/" target="_blank" className="text-gray-400 hover:text-primary">
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 512 512"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M116.504 500.219V170.654H6.975v329.565zM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953C122.997 36.394 99.934 11.78 62.467 11.78 24.994 11.78.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953zM177.124 500.219V170.654H286.67v47.794c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#!" className="text-gray-400 hover:text-primary">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M30.996 16.091c0-8.281-6.714-14.994-14.996-14.994S1.004 7.81 1.004 16.093c0 7.455 5.44 13.639 12.566 14.8V20.427h-3.808v-4.336h3.808v-3.302c0-2.923 2.37-5.293 5.293-5.293 1.199.017 2.359.123 3.491.312v3.69h-1.892c-1.197 0-2.168.97-2.168 2.168v2.812h4.159l-.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/mitrevdesign/" target="_blank" className="text-gray-400 hover:text-primary">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/MitrevDarko1305" target="_blank" className="text-gray-400 hover:text-primary">
              <span className="sr-only">GitHub</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 48 48"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 1.9A21.6 21.6 0 0017.2 44c1 .2 1.8-.9 1.8-1.8v-2.8c-6 1.3-7.9-2.9-7.9-2.9a6.5 6.5 0 00-2.2-3.2c-1.8-1.2.1-1.3.1-1.3a4.3 4.3 0 013.3 2c1.7 2.9 5.5 2.6 6.7 2.1a5.4 5.4 0 01.5-2.9C12.7 32 9 28 9 22.6A10.7 10.7 0 0111.9 15a6.2 6.2 0 01.3-6.4 8.9 8.9 0 016.4 2.9 15.1 15.1 0 0110.8-.1 9 9 0 016.4-2.8 6.5 6.5 0 01.4 6.4A10.7 10.7 0 0139 22.6c0 5.4-3.7 9.4-10.5 10.6a5.4 5.4 0 01.5 2.9v6.2a1.8 1.8 0 001.9 1.8A21.7 21.7 0 0024 1.9z" />
              </svg>
            </a>
          </div>

         
          <p className="mt-6 text-sm leading-6 text-gray-400 sm:mt-0 md:order-1">
            © 2026  All rights reserved –
             <a className=" text-primary hover:text-foreground" href="https://mitrevdarko.dev" target="_blank">  Mitrevdesign</a> 
          </p>
        
        </div>
      </div>
      </RevealOnScroll>
    </footer>
  );
}