import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  title: "Apiyo Design Studio",
  description: "Architecture • Interior Design • 3D Visualization • Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${bodoni.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col bg-[#071321]">
        {children}
      </body>
    </html>
  );
}
import { Cormorant_Garamond, Inter } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const inter = Inter({
  subsets: ["latin"],
});
<body className={inter.className}>
</body>