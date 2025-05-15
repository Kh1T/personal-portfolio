"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Led the frontend development team in building responsive web applications using React and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
    },
    {
      title: "Web Developer",
      company: "Digital Agency",
      period: "2018 - 2021",
      description:
        "Developed and maintained client websites using JavaScript, HTML, and CSS. Collaborated with designers to implement responsive designs and interactive features.",
    },
    {
      title: "Junior Developer",
      company: "Startup Hub",
      period: "2016 - 2018",
      description:
        "Assisted in the development of web applications. Gained experience in frontend technologies and agile development methodologies.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Web Technologies and User Experience Design. Graduated with honors.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description:
        "Focused on Software Engineering and Database Systems. Participated in multiple hackathons and coding competitions.",
    },
  ]

  return (
    <section id="resume" ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and educational background.</p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{edu.institution}</span>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-bold">Skills & Certifications</h3>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">Technical Skills</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Frontend Development</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Backend Development</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">UI/UX Design</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">DevOps</span>
                          <span>70%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Certifications</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2">•</div>
                        <div>
                          <span className="font-medium">AWS Certified Developer</span> - Amazon Web Services
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2">•</div>
                        <div>
                          <span className="font-medium">Professional Web Developer</span> - Frontend Masters
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2">•</div>
                        <div>
                          <span className="font-medium">UI/UX Design Fundamentals</span> - Design Academy
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
