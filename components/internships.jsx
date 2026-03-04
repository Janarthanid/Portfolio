import { Briefcase, Calendar } from "lucide-react"

const internships = [
  {
    title: "MERN Stack Internship",
    company: "The Better Tomorrow Technologies Institute",
    period: "2025",
    description:
      "Gained hands-on experience in developing projects using the MERN stack (MongoDB, Express, ReactJS, and NodeJS). Enhanced skills in full-stack development and practical implementation of these technologies.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    gradient: "from-primary/10 via-background to-primary/5",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    title: "Flutter Development Internship",
    company: "Cross-Platform Mobile Development",
    period: "2025",
    description:
      "Developed cross-platform mobile applications using Flutter using Dart. Built natively compiled apps for Android and iOS from a single codebase with responsive UI and performance optimization.",
    tags: ["Flutter", "Dart", "Android", "iOS"],
    gradient: "from-coral/10 via-background to-coral/5",
    iconBg: "bg-coral/20",
    iconColor: "text-coral",
  },
  {
    title: "Business Analyst Internship",
    company: "Data-Driven Decision Making",
    period: "2026",
    description:
      "Worked on data cleaning, visualization, and dashboard creation. Extracted meaningful business insights using analytical tools to support data-driven decision making.",
    tags: ["Data Analysis", "Excel", "Visualization", "Business Intelligence"],
    gradient: "from-purple/10 via-background to-purple/5",
    iconBg: "bg-purple/20",
    iconColor: "text-purple",
  },
]

export default function Internships() {
  return (
    <section id="internships" className="py-24 px-4 bg-muted/20">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Internships
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Practical industry experience across development and analytics domains.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-coral rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border pl-8 space-y-10">
          {internships.map((item, idx) => (
            <div
              key={idx}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.gradient} border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[38px] top-6 w-4 h-4 rounded-full bg-primary" />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center ${item.iconColor}`}
                >
                  <Briefcase className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {item.company}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground mt-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>

                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-background/70 backdrop-blur border border-border hover:bg-primary/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}