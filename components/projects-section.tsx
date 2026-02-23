import Link from "next/link"

const projects = [
  {
    title: "GraphStyle",
    description:
      "A recommendation system with KNN and Graph Neural Networks, profiling inference latency and optimizing data pipelines for scalable serving.",
    tech: ["Python", "Pytorch", "scikit-learn", "Matplotlib", "NumPy"],
    link: "https://github.com/joannamooon/GraphStyle",
  },
  {
    title: "RippleRelief",
    description:
      "A full-stack aid platform on the XRP Ledger, implementing asynchronous transaction serialization and state verification for transparent donation tracking.",
    tech: ["Python", "React/Next.js", "JavaScript", "Flask", "Supabase"],
    link: "https://devpost.com/software/ripplerelief?_gl=1*15cf4yr*_gcl_au*MTE1Njk1NDcwNC4xNzU1MjMxNDA3*_ga*MTY1MTIxMDc3OC4xNzU1MjMxNDA3*_ga_0YHJK3Y10M*czE3NTc5NTIyNjkkbzE2JGcxJHQxNzU3OTU1MTg3JGo1OCRsMCRoMA..",
  },
  {
    title: "The Underground Lens",
    description:
      "A full-stack web application that visualizes subway ridership patterns, enabling users to explore trends and key metrics through interactive charts and data-driven insights.",
    tech: ["Python", "Flask", "SQLAlchemy", "REST APIs", "SQL"],
    link: "#",
  },
 {
    title: "Post-COVID Workspace Trends",
    description:
      "An exploratory analysis on 200K+ records from Savills’ commercial real estate dataset to quantify COVID-19 impacts on workspace demand, examining occupancy dynamics and spatial distribution patterns.",
    tech: ["pandas", "NumPy", "Matplotlib", "PostgreSQL"],
    link: "https://uwaterloo.ca/statistics-and-actuarial-science/news/students-dive-data-2025-asa-datafest",
  },
  {
    title: "AI Art Therapy Diary",
    description:
      "An AI-driven journaling tool that turns emotions into generative art, using a fine-tuned Stable Diffusion model to visually capture mood and personal experiences.",
    tech: ["Flutter", "Dart", "Python"],
    link: "https://github.com/joannamooon/therapy-art-diary",
  },
  {
    title: "Sketch-RNN",
    description:
      "An interactive drawing application powered by SketchRNN that completes user sketches in real time, transforming rough inputs into recognizable objects using generative models.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://joannamooon.github.io/sketch-rnn/",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex items-center gap-6 mb-12">
          <span className="text-sm font-medium text-foreground">004</span>
          <span className="text-sm font-bold tracking-wider text-foreground">
            PROJECTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group flex flex-col rounded-lg border border-border p-6 transition-colors hover:bg-pink-soft/50"
            >
              {/* Project title */}
              <h3 className="font-serif italic text-2xl tracking-tight text-foreground leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground flex-1">
                {project.description}
              </p>

              {/* Tech stack tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-pink-soft px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
