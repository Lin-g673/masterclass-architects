import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Architectural Visualization & Rendering",
  description:
    "Bring your project to life with architectural 3D rendering, interior visualization, exterior renders and animation by Apiyo Design Studio in Kenya.",
alternates: {
  canonical: "/3d",
},};

export default function VisualizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}