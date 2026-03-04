import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "EliteVents",
    subtitle: "Event Management System",
    description:
      "A dynamic event management system developed using Flutter and Firebase, allowing users to browse and register for events like workshops, concerts, celebrity shows, and tournaments. Features secure Stripe payment integration and real-time data updates.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "Stripe API"],
    color: "from-primary/10 to-teal-50",
    borderColor: "border-primary/20",
  },
  {
    title: "AI Resume Analyser",
    subtitle: "Machine Learning Resume Screening System",
    description:
      "Developed an AI-based resume analyser using Python to automatically evaluate and rank resumes based on job descriptions. Implemented text preprocessing, vectorization, similarity scoring, and intelligent candidate shortlisting.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
    color: "from-coral/10 to-orange-50",
    borderColor: "border-coral/20",
  },
  {
    title: "Customer Churn Prediction",
    subtitle: "Machine Learning System",
    description:
      "Built a machine learning model to predict telecom customer churn with ~82% accuracy using end-to-end preprocessing, feature engineering, and model evaluation techniques.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "Matplotlib"],
    color: "from-purple/10 to-violet-50",
    borderColor: "border-purple/20",
  },
  {
    title: "Job Portal",
    subtitle: "MERN Stack Recruitment Platform",
    description:
      "A full-stack recruitment platform built using MERN stack enabling recruiters to post jobs and candidates to apply. Implemented authentication, role-based access control, resume uploads, and job management dashboard.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    color: "from-blue-100 to-indigo-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Shiva Textiles Web Enhancement",
    subtitle: "Enterprise Website Enhancement & Documentation",
    description:
      "Enhanced an existing textile company website by improving UI/UX, adding new functional modules, and optimizing performance. Prepared complete project documentation including BRD, FRD, Test Case Report, RTM Report, Bug Report, and Figma wireframes following structured SDLC practices.",
    tags: [
      "Figma",
      "Excel",
      "Google Docs",
      "PowerBI"
    ],
    color: "from-emerald-100 to-teal-50",
    borderColor: "border-emerald-200",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-card rounded-xl overflow-hidden shadow-sm border ${project.borderColor} hover:shadow-lg transition-all group`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium mt-0.5">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-muted text-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
                  <a
                    href="https://github.com/Janarthanid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}