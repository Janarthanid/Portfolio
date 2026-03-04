import { Award, Star, BadgeCheck, Code2 } from "lucide-react"

const achievement = {
  title: "TECH CONNECT",
  description: "Secured 2nd prize in TechConnect conducted at Sri Eshwar College of Engineering",
  year: "2024",
}

const certifications = [
  { name: "Certified in MERN Stack", issuer: "Better Tomorrow", year: "2025" },
  { name: "Certified in Learning React", issuer: "Infosys", year: "2025" },
  { name: "Certified in Java - Basics (Hands-On)", issuer: "SkillRack", year: "2024" },
  { name: "Certified in Basics of Python", issuer: "Infosys", year: "2024" },
  { name: "Certified in SQL (Basic)", issuer: "HackerRank", year: "2024" },
  { name: "Certified in SQL (Intermediate)", issuer: "HackerRank", year: "2024" },
  { name: "Certified in SQL - Basics (Standard)", issuer: "SkillRack", year: "2024" },
]

const programming = [
  { platform: "LeetCode", stat: "1400+ Rating, Solved 50+ Problems" },
  { platform: "SkillRack", stat: "Solved 600+ Problems" },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            {"Achievements & Certifications"}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            
            {/* Achievement */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Achievement
                </h3>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-4 h-4 text-coral flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium text-sm">
                    {achievement.title}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    {achievement.description}
                  </p>
                  <span className="text-xs text-muted-foreground mt-2 inline-block">
                    {achievement.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Programming */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-coral" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Programming
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {programming.map((item, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">
                      {item.platform}:
                    </span>{" "}
                    {item.stat}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-purple" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Certifications
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition"
                >
                  {/* Number Badge */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0">
                    {idx + 1}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {cert.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}