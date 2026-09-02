"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "House Plans",
      href: "/house-plans",
    },
    {
      name: "Interior Design",
      href: "/interiors",
    },
    {
      name: "3D Visualization",
      href: "/3d",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Students",
      href: "/students",
    },
    {
      name: "About Us",
      href: "/about",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
          transition-all
          duration-300
          ${
            scrolled || menuOpen
              ? "bg-white shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
              : "bg-transparent"
          }
        `}
      >
        <div
          className={`
            max-w-[1800px]
            mx-auto
            px-5
            md:px-8
            lg:px-12
            xl:px-14
            flex
            items-center
            transition-all
            duration-300

            ${
              scrolled || menuOpen
                ? `
                  h-[54px]
                  md:h-[54px]
                  lg:h-[54px]
                `
                : `
                  h-[64px]
                  md:h-[70px]
                  lg:h-[76px]
                `
            }
          `}
        >
          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Apiyo Design Studio Home"
            className="
              flex
              items-center
              flex-shrink-0
            "
          >
            <img
              src={
                scrolled || menuOpen
                  ? "/logo/logo-black.png"
                  : "/logo/logo-white.png"
              }
              alt="Apiyo Design Studio"
              draggable={false}
              className={`
                w-auto
                select-none
                transition-all
                duration-300

                ${
                  scrolled || menuOpen
                    ? "h-7 md:h-7 lg:h-8"
                    : "h-9 md:h-10 lg:h-11"
                }
              `}
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav
            className={`
              hidden
              xl:flex
              flex-1
              items-center
              justify-center
              gap-7
              2xl:gap-9

              font-[var(--font-avenir)]
              text-[11px]
              2xl:text-[12px]
              font-medium
              uppercase
              tracking-[0.14em]

              ${
                scrolled
                  ? "text-[#1c3a60]"
                  : "text-white"
              }
            `}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative
                  whitespace-nowrap

                  transition-colors
                  duration-300

                  hover:text-[#D4A85A]

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-px
                  after:w-0
                  after:bg-[#D4A85A]
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* =====================================================
              DESKTOP CONSULTATION
          ===================================================== */}

          <Link
            href="/consultation"
            className={`
              hidden
              xl:inline-flex
              items-center
              justify-center

              px-5
              h-[34px]

              rounded-full
              border

              font-[var(--font-avenir)]
              text-[12px]
              font-medium
              tracking-[0.02em]
              whitespace-nowrap

              transition-all
              duration-300

              ${
                scrolled
                  ? `
                    border-[#1c3a60]
                    text-[#1c3a60]
                    hover:bg-[#1c3a60]
                    hover:text-white
                  `
                  : `
                    border-[#D4A85A]
                    text-[#D4A85A]
                    hover:bg-[#D4A85A]
                    hover:text-[#071321]
                  `
              }
            `}
          >
            Book Consultation
          </Link>

          {/* =====================================================
              MOBILE / TABLET CONTROLS
          ===================================================== */}

          <div
            className="
              xl:hidden
              ml-auto
              flex
              items-center
              gap-3
            "
          >
            <Link
              href="/consultation"
              onClick={closeMenu}
              className={`
                inline-flex
                items-center
                justify-center

                h-[34px]
                px-3.5

                rounded-full
                border

                font-[var(--font-avenir)]
                text-[9px]
                sm:text-[10px]
                font-medium
                tracking-[0.02em]
                whitespace-nowrap

                transition-colors
                duration-300

                ${
                  scrolled || menuOpen
                    ? `
                      border-[#1c3a60]
                      text-[#1c3a60]
                    `
                    : `
                      border-[#D4A85A]
                      text-[#D4A85A]
                    `
                }
              `}
            >
              Book Consultation
            </Link>

            <button
              type="button"
              onClick={() =>
                setMenuOpen((current) => !current)
              }
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className={`
                w-9
                h-9

                flex
                items-center
                justify-center

                rounded-full
                border

                transition-all
                duration-300

                ${
                  scrolled || menuOpen
                    ? `
                      border-[#1c3a60]/20
                      text-[#1c3a60]
                    `
                    : `
                      border-white/30
                      text-white
                    `
                }
              `}
            >
              {menuOpen ? (
                <X size={19} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[55]
          xl:hidden

          bg-black/50
          backdrop-blur-[2px]

          transition-opacity
          duration-300

          ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* =====================================================
          MOBILE SLIDE MENU
      ===================================================== */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-[60]

          xl:hidden

          h-[100dvh]
          w-[88%]
          max-w-[390px]

          bg-[#071321]
          text-white

          shadow-[-20px_0_60px_rgba(0,0,0,0.25)]

          transition-transform
          duration-500
          ease-out

          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* MENU HEADER */}

        <div
          className="
            h-[60px]
            px-5

            flex
            items-center
            justify-between

            border-b
            border-white/10
          "
        >
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Apiyo Design Studio Home"
          >
            <img
              src="/logo/logo-white.png"
              alt="Apiyo Design Studio"
              draggable={false}
              className="
                h-8
                w-auto
                select-none
              "
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="
              w-9
              h-9

              rounded-full

              border
              border-white/15

              flex
              items-center
              justify-center

              text-white

              hover:border-[#D4A85A]
              hover:text-[#D4A85A]

              transition-colors
              duration-300
            "
          >
            <X size={19} strokeWidth={1.5} />
          </button>
        </div>

        {/* MENU LINKS */}

        <nav
          className="
            px-6
            pt-4
          "
        >
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="
                group

                flex
                items-center
                justify-between

                py-3

                border-b
                border-white/10

                font-[var(--font-garamond)]
                text-[20px]
                sm:text-[21px]
                font-light
                leading-tight

                transition-colors
                duration-300

                hover:text-[#D4A85A]
              "
            >
              <span>{item.name}</span>

              <span
                className="
                  font-[var(--font-avenir)]
                  text-[8px]
                  tracking-[0.15em]
                  text-white/25

                  group-hover:text-[#D4A85A]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </nav>

        {/* MENU BOTTOM */}

        <div className="px-6 pt-5">
          <Link
            href="/consultation"
            onClick={closeMenu}
            className="
              w-full
              h-[44px]

              inline-flex
              items-center
              justify-center

              rounded-full

              bg-[#D4A85A]
              text-[#071321]

              font-[var(--font-avenir)]
              text-[11px]
              font-medium

              transition-colors
              duration-300

              hover:bg-white
            "
          >
            Book Consultation
          </Link>

          <p
            className="
              mt-4

              font-[var(--font-avenir)]
              text-[8px]
              uppercase
              tracking-[0.18em]

              text-white/30
            "
          >
            Architecture · Interiors · Visualization
          </p>
        </div>
      </aside>
    </>
  );
}