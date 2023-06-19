"use client";
import React from "react";

const Header = () => {
  const HamburgerButton = document.getElementById(
    "hamburger-button"
  ) as HTMLButtonElement;
  const MobileMenu = document.getElementById(
    "mobile-menu"
  ) as HTMLButtonElement;

  const toggleMenu = () => {
    HamburgerButton.classList.toggle("toggle-btn");
    MobileMenu.classList.toggle("hidden");
    MobileMenu.classList.toggle("flex");
  };

  const content = (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero" className=" ">
            🚀 Acme Rockets
          </a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {/* &#9776;- */}
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav className="hidden space-x-8 text-xl sm:block " aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              {" "}
              Contact Us
            </a>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className="top-68 absolute hidden w-full origin-top animate-open-menu flex-col justify-center bg-black text-5xl"
      >
        {/*  <button className="text-8xl self-end px-6" onClick={toggleMenu}>&times;</button> */}
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
          onClick={toggleMenu}
        >
          <a
            href="#hero"
            className="w-full py-6 text-center text-white hover:opacity-90"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#rockets"
            className="w-full py-6 text-center text-white hover:opacity-90"
            onClick={toggleMenu}
          >
            Our Rockets
          </a>
          <a
            href="#testimonials"
            className="w-full py-6 text-center text-white hover:opacity-90"
            onClick={toggleMenu}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="w-full py-6 text-center text-white hover:opacity-90"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
          <a
            href="#footer"
            className="w-full py-6 text-center text-white hover:opacity-90"
            onClick={toggleMenu}
          >
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
  return content;
};

export default Header;
