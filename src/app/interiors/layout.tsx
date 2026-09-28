import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services in Kenya | Apiyo Design Studio",
  description:
    "Explore residential and commercial interior design services by Apiyo Design Studio. We create thoughtful interiors, detailed designs and fit-out solutions for clients in Kenya and abroad.",
};

export default function InteriorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}