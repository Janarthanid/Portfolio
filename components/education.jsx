import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.Tech - Computer Science and Business Systems (CSBS)",
    period: "2023 - 2027",
    grade: "CGPA: 7.9 (upto 4th Semester)",
    highlight: true,
  },
  {
    institution: "Aksharam International School",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2022 - 2023",
    grade: "67%",
    highlight: false,
  },
  {
    institution: "Angappa CBSE School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    period: "2020 - 2021",
    grade: "87%",
    highlight: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-background">
      <div className="mx-auto max-w-4xl">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-border" />

          <div className="flex flex-col gap-10">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative pl-14">

                {/* Timeline Dot */}
                <div className={`absolute left-0 top-3 w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-background ${
                  edu.highlight
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground"
                }`}>
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Card */}
                <div
                  className={`bg-card border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    edu.highlight
                      ? "border-primary/40 bg-primary/5"
                      : "border-border"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {edu.institution}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-3">
                    {edu.degree}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>

                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      edu.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}>
                      {edu.grade}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}