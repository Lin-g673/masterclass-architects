import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ImageProtection from "./components/ImageProtection";

const garamond = localFont({
  src: "./fonts/GaramondPremierPro-LightDisplay.otf",
  variable: "--font-garamond",
 display: "optional",
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
  metadataBase: new URL("https://www.apiyodesignstudio.co.ke"),

  title: {
    default: "Apiyo Design Studio | Architecture & Interior Design in Kenya",
    template: "%s | Apiyo Design Studio",
  },

  description:
    "Apiyo Design Studio provides architectural design, house plans, interior design, 3D visualization and renovation services in Nairobi and across Kenya.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.apiyodesignstudio.co.ke",
    siteName: "Apiyo Design Studio",
    title: "Apiyo Design Studio | Architecture & Interior Design in Kenya",
    description:
      "Architectural design, house plans, interior design, 3D visualization and renovation services in Nairobi and across Kenya.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Apiyo Design Studio | Architecture & Interior Design in Kenya",
    description:
      "Architectural design, house plans, interior design, 3D visualization and renovation services in Nairobi and across Kenya.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.apiyodesignstudio.co.ke/#organization",
  name: "Apiyo Design Studio",
  alternateName: "ADS",
  url: "https://www.apiyodesignstudio.co.ke",
  telephone: "+254754525407",
  email: "info@apiyodesignstudio.co.ke",
  description:
    "Apiyo Design Studio is an architectural design studio providing architectural design, house plans, interior design, 3D visualization and renovation services in Nairobi and across Kenya.",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },

  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },

  sameAs: [
    "https://www.instagram.com/apiyo_designstudio/",
    "https://www.facebook.com/apiyodesignstudio/",
    "https://www.tiktok.com/@apiyodesignstudio",
    "https://www.linkedin.com/company/apiyo-design-studio/",
  ],
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
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
    }}
  />
  <ImageProtection />
  {children}
</body>
    </html>
  );
}