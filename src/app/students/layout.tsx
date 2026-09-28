import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture Student Support & Software Training | Apiyo Design Studio",
  description:
    "Explore architecture student support, design guidance and architectural software training at Apiyo Design Studio, including Archicad, AutoCAD and SketchUp.",
};

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}