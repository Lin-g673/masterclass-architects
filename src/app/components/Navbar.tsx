"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "House Plans", href: "/house-plans" },
    { name: "Interior Design", href: "/interiors" },
    { name: "3D Visualization", href: "/visualization" },
    { name: "Projects", href: "/projects" },
    { name: "Students", href: "/students" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex items-center px-16 py-6">
        
        <div className="flex items-center flex-shrink-0">
          <img
            src={
              scrolled
                ? "/logo/logo-black.png"
                : "/logo/logo-white.png"
            }
            alt="Apiyo Design Studio"
            className="h-16 transition-all duration-300"
          />
        </div>

        <nav
          className={`hidden xl:flex mx-auto items-center gap-10 text-sm uppercase tracking-[1.5px] ${
            scrolled
              ? "text-[#1c3a60]"
              : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
              relative
              transition-all
              duration-300
              hover:text-[#D4A85A]
              hover:tracking-[3px]
              hover:scale-105
              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:bg-[#1c3a60]
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/consultation"
          className={`px-7 py-3 rounded-full transition-all duration-300 border font-medium ${
            scrolled
              ? "bg-[#1c3a60] text-white border-[#1c3a60] hover:bg-[#D4A85A] hover:text-black hover:border-[#D4A85A]"
              : "border-[#D4A85A] text-[#D4A85A] hover:bg-[#D4A85A] hover:text-black hover:shadow-[0_0_25px_rgba(212,168,90,0.45)]"
          }`}
        >
          Book Consultation
        </Link>

      </div>
    </header>
  );
}