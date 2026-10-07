import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Design Services in Kenya",
  description:
    "Explore architectural design services by Apiyo Design Studio in Nairobi and across Kenya, from bespoke homes and apartments to commercial buildings, renovations and masterplanning.",
alternates: {
  canonical: "/architecture",
},};

export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}