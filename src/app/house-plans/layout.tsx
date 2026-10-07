import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House Plans & House Designs in Kenya",
  description:
    "Explore house plans and residential designs by Apiyo Design Studio, including bungalows, maisonettes and mansions. Find a design for your project in Kenya, whether you live locally or abroad.",
};

export default function HousePlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}