import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Design Consultation",
  description:
    "Start your project with Apiyo Design Studio. Enquire about architectural design, house plans, interior design, renovations and 3D visualization in Kenya.",
  alternates: { canonical: "/consultation" },
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}