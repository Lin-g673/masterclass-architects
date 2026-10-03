import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ImageProtection from "./components/ImageProtection";

const garamond = localFont({
  src: "./fonts/GaramondPremierPro-LightDisplay.otf",
  variable: "--font-garamond",
  display: "swap",
});

const avenir = localFont({
  src: [
    {
      path: "./fonts/AvenirNext-UltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNext-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNext-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNext-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNext-Demi.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apiyo Design Studio | Architecture & Interior Design in Kenya",
  description:
    "Apiyo Design Studio provides architectural design, house plans, interior design, 3D visualization and renovation services in Nairobi and across Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${avenir.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}