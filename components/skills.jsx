const skillCategories = [
  {
    title: "Languages",
    gradient: "from-primary/10 to-primary/5",
    badge: "bg-primary/20 text-primary",
    skills: ["C", "C++", "JavaScript", "Flutter","Java"],
  },
  {
    title: "Technologies / Frameworks",
    gradient: "from-coral/10 to-coral/5",
    badge: "bg-coral/20 text-coral",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "Express.js", "MERN Stack","React.js","Node.js"],
  },
  {
    title: "Tools",
    gradient: "from-teal-100 to-teal-50",
    badge: "bg-teal-200 text-teal-700",
    skills: ["VS Code", "Canva", "Android Studio","Github","Postman", "Figma","vercel"],
  },
  {
    title: "Cloud / Databases",
    gradient: "from-purple/10 to-purple/5",
    badge: "bg-purple/20 text-purple",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Core Concepts",
    gradient: "from-indigo-100 to-indigo-50",
    badge: "bg-indigo-200 text-indigo-700",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Skills
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I work with to build scalable and efficient solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-coral rounded-full mx-auto mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-2xl p-6 bg-gradient-to-br ${category.gradient} border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`px-3 py-1 text-sm font-semibold rounded-full ${category.badge}`}
                >
                  {category.title}
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-xl bg-background/80 backdrop-blur border border-border hover:bg-primary/10 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}