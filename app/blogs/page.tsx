import type { Metadata } from "next"
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogs } from "@/lib/blogs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Antigravity = dynamic(() => import('@/components/Antigravity'), { ssr: false });

export const metadata: Metadata = {
  title: "Blog | LaunchPixel - AI Automation, Web Development & Business Insights",
  description: "Expert insights on AI automation, web development, SEO, and digital transformation. Learn practical strategies to reduce costs, improve performance, and future-proof your business with LaunchPixel.",
  keywords: "AI automation, web development, business automation, SEO optimization, AI agents, RPA, minimalist design, customer experience automation, ROI measurement, AI governance, launchpixel, launch pixel",
  openGraph: {
    title: "LaunchPixel Blog - AI Automation & Web Development Insights",
    description: "Practical guides on AI automation, web design, SEO, and business transformation",
    type: "website",
    url: "https://launchpixel.com/blogs",
  },
  alternates: {
    canonical: "https://launchpixel.com/blogs",
  },
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      {/* Antigravity Background */}
      <div className="fixed inset-0 z-0">
        <Antigravity
          count={400}
          magnetRadius={13}
          ringRadius={10}
          waveSpeed={0.6}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="sphere"
          fieldStrength={10}
        />
      </div>
      
      <main className="pt-20 sm:pt-24 md:pt-16 relative z-10">
      <div className="container mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            LaunchPixel Insights
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Practical guides on AI automation, web development, and business transformation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="group overflow-hidden bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-indigo-950/60 border border-indigo-900 text-indigo-300">
                    {blog.category}
                  </Badge>
                </div>
                <CardTitle className="text-white group-hover:text-indigo-300 transition-colors">
                  {blog.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {blog.date} · {blog.readTime}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 line-clamp-2">
                  {blog.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-gray-800 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-400">LaunchPixel Team</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:text-indigo-200"
                >
                  <Link href={`/blogs/${blog.slug}`}>Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      </main>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "LaunchPixel Blog",
            "description": "Expert insights on AI automation, web development, SEO, and digital transformation",
            "url": "https://launchpixel.com/blogs",
            "publisher": {
              "@type": "Organization",
              "name": "LaunchPixel",
              "alternateName": ["Launch Pixel", "launchpixel"],
              "logo": {
                "@type": "ImageObject",
                "url": "https://launchpixel.com/logo.gif"
              },
              "sameAs": [
                "https://twitter.com/launchpixel",
                "https://linkedin.com/company/launchpixel"
              ]
            },
            "blogPost": blogs.map(blog => ({
              "@type": "BlogPosting",
              "headline": blog.title,
              "description": blog.description,
              "datePublished": new Date(blog.date).toISOString(),
              "author": {
                "@type": "Organization",
                "name": "LaunchPixel"
              },
              "publisher": {
                "@type": "Organization",
                "name": "LaunchPixel"
              },
              "url": `https://launchpixel.com/blogs/${blog.slug}`,
              "keywords": blog.tags.join(", ")
            }))
          })
        }}
      />

      <Footer />
    </div>
  );
}