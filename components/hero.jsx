import { Github, Linkedin, Download } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full grid md:grid-cols-2 items-center bg-background pt-16 md:pt-20"
    >
      
      {/* Left Section - Image */}
      <div className="flex justify-center items-center py-12 px-6 bg-muted/20">
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
          <Image
            src="/images/profile.jpg"
            alt="Janarthani D - B.Tech CSBS Student"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="flex flex-col justify-center px-6 md:px-12 py-12 gap-5">
        
        <p className="text-sm font-semibold tracking-widest uppercase text-primary">
          Hello, I'm
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Janarthani D
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl">
          B.Tech CSBS Student | Full-Stack Developer | Mobile App Developer | Business Analyst
        </p>

        <p className="text-muted-foreground leading-relaxed max-w-lg">
          Passionate about building scalable web and mobile applications using MERN stack and Flutter, with a strong interest in business analysis and data-driven decision making.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          
          <a
            href="https://github.com/Janarthanid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/janarthani-d-451827297/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>

          <a
            href="/Janarthani_D_Resume.pdf"
            download="Janarthani_D_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-coral text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>

        </div>
      </div>

    </section>
  )
}