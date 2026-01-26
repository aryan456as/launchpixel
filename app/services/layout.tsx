import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Automation Services | LaunchPixel - Web Development, AI Apps & Digital Solutions",
  description: "Expert AI automation services including web development, mobile apps, AI applications, brand strategy, UI/UX design, and SEO. Transform your business with LaunchPixel's cutting-edge technology solutions.",
  keywords: "AI automation, web development, mobile app development, AI applications, brand strategy, UI UX design, SEO services, digital transformation, business automation, AI technology, software development, LaunchPixel services",
  openGraph: {
    title: "AI Automation Services | LaunchPixel",
    description: "Transform your business with AI-powered automation, web development, and digital solutions",
    type: "website",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
