import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Resume from "@/components/resume"
import Blog from "@/components/blog"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Toaster />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Blog />
      <Contact />
    </main>
  )
}
