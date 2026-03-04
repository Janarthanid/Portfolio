import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold">Janarthani D</p>
            <p className="text-sm opacity-70 mt-1">
              B.Tech CSBS | Full-Stack Developer | Business Analyst 
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Janarthanid"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/janarthani-d-451827297/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:janarthani39@gmail.com"
              className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm opacity-60">
            {"© 2026 Janarthani D. All rights reserved."}
          </p>
          <p className="text-sm opacity-60 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-coral" /> using
            Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
