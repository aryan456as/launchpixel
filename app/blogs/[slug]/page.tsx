import Link from "next/link"
import { notFound } from "next/navigation"
import { blogs, getBlogBySlug } from "@/lib/blogs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }))
}

export default function BlogDetailPage({ params }: PageProps) {
  const blog = getBlogBySlug(params.slug)
  if (!blog) return notFound()

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      <main className="pt-16">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/blogs" className="text-indigo-400 hover:text-indigo-300">← Back to blogs</Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-400 mb-6">
            <span className="text-white text-sm">Content Team</span>
            <span>·</span>
            <span>{blog.date}</span>
            <span>·</span>
            <span>{blog.readTime}</span>
            <Badge variant="secondary" className="ml-2 bg-indigo-950/60 border border-indigo-900 text-indigo-300">{blog.category}</Badge>
          </div>

          <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800">
            <CardContent className="py-8 px-6">
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                  {blog.content ? (
                    blog.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-300 leading-relaxed">
                      {blog.description}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-gray-800 text-gray-300">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}



