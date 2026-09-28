import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Apiyo Design Studio | Architecture & Design in Kenya",
  description:
    "Get to know Apiyo Design Studio, a Kenya-based architectural design studio offering architecture, interior design, house plans and 3D visualization.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}