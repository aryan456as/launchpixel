import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogs } from "@/lib/blogs";
import Navigation from "@/components/Navigation";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      <main className="pt-16">
      <div className="container mx-auto py-20 px-6">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Insights & Updates
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover tutorials, best practices, and thoughts from the LaunchPixel team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <span className="text-sm font-medium text-white">Content Team</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:text-indigo-200"
                >
                  <Link href={`/blogs/${blog.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      </main>
    </div>
  );
}