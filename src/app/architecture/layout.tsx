import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Design Services in Kenya | Apiyo Design Studio",
  description:
    "Explore architectural design services by Apiyo Design Studio in Nairobi and across Kenya, from bespoke homes and apartments to commercial buildings, renovations and masterplanning.",
};

export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}