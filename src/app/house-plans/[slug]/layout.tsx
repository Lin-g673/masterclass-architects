import type { Metadata } from "next";
import { housePlans } from "../plansData";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const plan = housePlans.find((item) => item.slug === slug);

  if (!plan) {
    return {
      title: "House Plan Not Found | Apiyo Design Studio",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${plan.title} House Plan in Kenya`;

  const description =
    `${plan.shortDescription} Explore this ${plan.bedrooms}-bedroom ` +
    `${plan.category.toLowerCase()} house plan with ${plan.area} m² ` +
    `of floor area by Apiyo Design Studio.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.apiyodesignstudio.co.ke/house-plans/${plan.slug}`,
    },
  };
}

export default function HousePlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}