"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {

 return (
  <>
    <footer
  className="
  border-t
  border-white/10
  py-24
  overflow-hidden
  "
>

  <div className="w-full px-20 lg:px-32">

    <div
      className="
      grid
      lg:grid-cols-[1.8fr_1fr_1fr_1fr_0.8fr]
      gap-20
      "
    >

      {/* BRAND */}
      <div className="flex flex-col items-center">

        <img
          src="/logo/logo-white.png"
          alt="Apiyo Design Studio"
          className="
          w-80
          object-contain
          mb-8
          "
        />

        <p
          className="
          uppercase
          tracking-[5px]
          text-[#D4A85A]
          text-sm
          text-center
          "
        >
          Architecture • Interiors • Visualization
        </p>

      </div>

      {/* QUICK LINKS */}
      <div>

        <p
          className="
          uppercase
          tracking-[4px]
          text-[#D4A85A]
          mb-8
          "
        >
          Quick Links
        </p>

        <div className="flex flex-col gap-4">

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            Home
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            House Plans
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            Custom Design
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            Interior Design
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            3D Visualization
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            Student Services
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            Contact
          </a>

        </div>

      </div>

      {/* SERVICES */}
      <div>

        <p
          className="
          uppercase
          tracking-[4px]
          text-[#D4A85A]
          mb-8
          "
        >
          Services
        </p>

        <div className="flex flex-col gap-4 text-gray-300">

          <p>Architectural Design</p>

          <p>Interior Design</p>

          <p>3D Visualization</p>

          <p>Custom Home Design</p>

          <p>House Plans</p>

          <p>Student Services</p>

        </div>

      </div>

      {/* CONTACT */}
      <div>

        <p
          className="
          uppercase
          tracking-[4px]
          text-[#D4A85A]
          mb-8
          "
        >
          Contact
        </p>

        <div className="space-y-5">

          <div className="flex items-center gap-4">

            <Mail
              size={18}
              className="text-[#D4A85A]"
            />

            <span className="text-gray-300">
              info@apiyodesignstudio.co.ke
            </span>

          </div>

          <div className="flex items-center gap-4">

            <Phone
              size={18}
              className="text-[#D4A85A]"
            />

            <span className="text-gray-300">
              0720 468 033
            </span>

          </div>

          <div className="flex items-center gap-4">

            <MapPin
              size={18}
              className="text-[#D4A85A]"
            />

            <span className="text-gray-300">
              Nairobi, Kenya
            </span>

          </div>

        </div>

      </div>

      {/* FOLLOW US */}
      <div>

        <p
          className="
          uppercase
          tracking-[4px]
          text-[#D4A85A]
          mb-8
          "
        >
          Follow Us
        </p>

        <div className="flex gap-5 flex-wrap">

          <FaInstagram
            className="
            text-[#D4A85A]
            text-xl
            cursor-pointer
            hover:text-white
            hover:scale-125
            transition-all
            duration-300
            "
          />

          <FaFacebookF
            className="
            text-[#D4A85A]
            text-xl
            cursor-pointer
            hover:text-white
            hover:scale-125
            transition-all
            duration-300
            "
          />

          <FaLinkedinIn
            className="
            text-[#D4A85A]
            text-xl
            cursor-pointer
            hover:text-white
            hover:scale-125
            transition-all
            duration-300
            "
          />

          <FaXTwitter
            className="
            text-[#D4A85A]
            text-xl
            cursor-pointer
            hover:text-white
            hover:scale-125
            transition-all
            duration-300
            "
          />

          <FaWhatsapp
            className="
            text-[#D4A85A]
            text-xl
            cursor-pointer
            hover:text-white
            hover:scale-125
            transition-all
            duration-300
            "
          />

        </div>

      </div>

    </div>

    {/* DIVIDER */}
    <div
      className="
      h-px
      bg-gradient-to-r
      from-transparent
      via-[#D4A85A]/40
      to-transparent
      my-16
      "
    />

    {/* COPYRIGHT */}
    <div
      className="
      text-center
      text-gray-500
      text-sm
      "
    >
      © 2026 Apiyo Design Studio. All Rights Reserved.
    </div>

  </div>

</footer>

{/* FLOATING WHATSAPP */}
<a
  href="https://wa.me/254720468033"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-5
    right-5
    md:bottom-8
    md:right-8
    z-50

    w-14
    h-14
    md:w-16
    md:h-16

    rounded-full
    backdrop-blur-xl
    bg-white/10
    border
    border-white/20

    flex
    items-center
    justify-center

    transition-all
    duration-300

    hover:bg-[#D4A85A]
    hover:scale-110
    hover:shadow-[0_0_30px_rgba(212,168,90,0.35)]
  "
>
  <FaWhatsapp
    className="
      text-white
      text-xl
      md:text-2xl
    "
  />
</a>

  </>
  );
}