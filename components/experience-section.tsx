const experiences = [
  {
    role: "System Software Engineer Intern",
    company: "NVIDIA",
    logo: "/nvidia.png",
    period: "May 2026 - Dec 2026",
    description:
      "Incoming",
  },
  {
    role: "Software Engineer Intern",
    company: "Shopify",
    logo: "/shopify.png",
    period: "Jan 2026 - Apr 2026",
    description:
      "Index Serving - working on low-latency search infrastructure to power shop.app in C++, Java",
  },
  {
    role: "Data Science Intern",
    company: "Intact",
    logo: "/intact.png",
    period: "May 2025 - Aug 2025",
    description:
      "Rating Revolution - price optimization using XGBoost",
  },
  {
    role: "Data Science Intern",
    company: "Desjardins",
    logo: "/desjardins.webp",
    period: "Sep 2024 - Dec 2024",
    description:
      "Pricing - segment policyholders with K-Means Clustering",
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex items-center gap-6 mb-12">
          <span className="text-sm font-medium text-foreground">003</span>
          <span className="text-sm font-bold tracking-wider text-foreground">
            EXPERIENCE
          </span>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-t border-border last:border-b"
            >
              {/* Left: role & company */}
              <div className="md:w-[320px] shrink-0 flex gap-4">
                {/* Logo */}
                <div className="w-20 h-20 flex items-center justify-center shrink-0">
                    <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-20 h-20 object-contain"
                    />
                </div>

                {/* Text */}
                <div>
                    <h3 className="font-serif italic text-xl lg:text-2xl tracking-tight text-foreground leading-tight">
                    {exp.role}
                    </h3>
                    <p className="mt-1 text-base text-foreground">
                    {exp.company}
                    </p>
                </div>
                </div>

              {/* Middle: description */}
              <div className="flex-1">
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>

              {/* Right: date */}
              <div className="md:w-[170px] shrink-0 md:text-right">
                <span className="text-sm text-muted-foreground">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
