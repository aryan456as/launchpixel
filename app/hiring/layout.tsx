import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Campus Ambassador Program | LaunchPixel - Join Our Team",
  description: "Join LaunchPixel as a Campus Ambassador. Earn commissions, gain experience, and build your professional network. Remote internship opportunity for students passionate about AI and technology.",
  keywords: "campus ambassador, student internship, remote work, LaunchPixel careers, student jobs, paid internship, commission-based work, technology internship, AI company jobs, flexible work",
  openGraph: {
    title: "Campus Ambassador Program | LaunchPixel",
    description: "Join our team as a Campus Ambassador and earn while you learn",
    type: "website",
  },
}

export default function HiringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
