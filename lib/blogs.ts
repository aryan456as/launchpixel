export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  tags: string[]
  content?: string
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    slug: "building-modern-web-applications",
    title: "Building Modern Web Applications",
    description:
      "Learn how to build scalable and performant web applications using Next.js and React. We'll cover the latest features and best practices.",
    date: "September 26, 2025",
    readTime: "5 min read",
    category: "Development",
    tags: ["Next.js", "React", "Web Development"],
    content:
      "Building modern web applications requires a solid understanding of current technologies and best practices. Next.js has revolutionized how we approach web development with its hybrid rendering capabilities, offering both server-side and client-side rendering in a single framework.\n\nOne of the key advantages of Next.js is its file-system routing, which makes navigation intuitive and developer-friendly. The framework's Server Components feature allows for efficient data fetching directly on the server, reducing client-side JavaScript and improving performance.\n\nPerformance optimization is crucial in modern web applications. Next.js provides built-in optimizations like automatic code splitting, image optimization, and static generation. These features help create fast, scalable applications that provide excellent user experiences.",
  },
  {
    id: "2",
    slug: "the-future-of-web-development",
    title: "The Future of Web Development",
    description:
      "Exploring upcoming trends and technologies that will shape the future of web development. Stay ahead of the curve with our insights.",
    date: "September 25, 2025",
    readTime: "4 min read",
    category: "Technology",
    tags: ["Future Tech", "Trends", "Innovation"],
    content:
      "The web development landscape is evolving at an unprecedented pace, with new technologies and paradigms emerging regularly. WebAssembly (WASM) is revolutionizing performance-critical applications by allowing near-native execution speeds in browsers.\n\nEdge computing is transforming how we think about application architecture. By moving computation closer to users, we can achieve lower latency and better user experiences. This shift is particularly important for global applications serving diverse user bases.\n\nAI-assisted development tools are becoming increasingly sophisticated, helping developers write better code faster. From intelligent code completion to automated testing, AI is augmenting human capabilities in software development.",
  },
  {
    id: "3",
    slug: "maximizing-performance-with-nextjs",
    title: "Maximizing Performance with Next.js",
    description:
      "Tips and tricks to optimize your Next.js applications for better performance. Learn about caching, bundling, and more.",
    date: "September 24, 2025",
    readTime: "6 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Next.js"],
    content:
      "Performance optimization in Next.js applications requires a comprehensive approach that covers multiple aspects of the application lifecycle. Understanding the framework's built-in optimizations is the first step toward creating lightning-fast applications.\n\nImage optimization is one of the most impactful performance improvements you can implement. Next.js provides automatic image optimization with the Image component, including format selection, responsive sizing, and lazy loading. This can significantly reduce bandwidth usage and improve loading times.\n\nRoute segment caching allows you to cache data at the route level, reducing the need for repeated API calls. Combined with Server Components for data fetching, this creates a powerful caching strategy that improves both performance and user experience.",
  },
]

export function getBlogById(id: string): BlogPost | undefined {
  return blogs.find((b) => b.id === id)
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug)
}


