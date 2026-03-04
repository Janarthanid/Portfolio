import { Trophy, Code2 } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-muted/20">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              About Me
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
            <p className="text-sm uppercase tracking-widest text-primary font-medium">
              Who I Am
            </p>
          </div>

          {/* Right Side - Content */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
            
            <p className="text-muted-foreground leading-relaxed text-base">
              I'm a B.Tech Computer Science and Business Systems student at
              <span className="font-semibold text-foreground">
                {" "}Sri Eshwar College of Engineering
              </span>{" "}
              (CGPA 7.9). I specialize in full-stack web development with the MERN
              stack and cross-platform mobile development with Flutter.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base">
              I enjoy solving complex problems and continuously improving my
              algorithmic thinking and development skills.
            </p>

            {/* Highlight Stats */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              
              {/* Problems Card */}
              <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="p-2 rounded-md bg-primary text-primary-foreground">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    600+
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Problems Solved
                  </p>
                </div>
              </div>

              {/* Rating Card */}
              <div className="flex items-center gap-3 p-4 rounded-lg bg-foreground/5 border border-border">
                <div className="p-2 rounded-md bg-foreground text-background">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    1400+
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    LeetCode Rating
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}