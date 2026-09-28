import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture Student Support & Software Training | Apiyo Design Studio",
  description:
  "Architecture student support and practical ArchiCAD, AutoCAD, SketchUp and Lumion training in Kenya. Get guidance with design, 3D modelling, rendering and architectural presentations.",
};

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}