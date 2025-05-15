"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  slug: string
}

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Build a Responsive Website with Tailwind CSS",
      excerpt: "Learn how to create a fully responsive website using Tailwind CSS, a utility-first CSS framework.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "Web Development",
      slug: "how-to-build-responsive-website-tailwind",
    },
    {
      id: 2,
      title: "Getting Started with Next.js and Server Components",
      excerpt: "Explore the power of Next.js Server Components and how they can improve your application performance.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 22, 2023",
      readTime: "7 min read",
      category: "Next.js",
      slug: "getting-started-nextjs-server-components",
    },
    {
      id: 3,
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Discover the emerging trends and technologies that will shape the future of web development.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 10, 2023",
      readTime: "6 min read",
      category: "Industry Insights",
      slug: "future-web-development-trends",
    },
  ]

  return (
    <section id="blog" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I share my knowledge and experiences through articles about web development, design, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent hover:bg-accent/90 text-accent-foreground">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-accent" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
