import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      

      <div className="mx-auto max-w-6xl px-8 pt-12 pb-20">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left content */}
          <div className="flex-1 pt-8 z-10">
            <p className="text-lg font-medium text-foreground mb-0 leading-tight">
              {"hey, i'm"}
            </p>
            <h1 className="font-serif italic text-[5rem] lg:text-[7rem] leading-[0.95] tracking-tight text-foreground">
              joanna
              <br />
              moon
            </h1>

            <div className="mt-12">
              <div className="flex items-center gap-6 mb-6">
                <span className="text-sm font-medium text-foreground">001</span>
                <span className="text-sm font-bold tracking-wider text-foreground">
                  INFO
                </span>
              </div>

              <div className="max-w-md flex flex-col gap-6 text-[15px] leading-relaxed text-foreground">
                <p>
                  {"Hi! I'm a third year Data Science student at the University of Waterloo!"}
                </p>
                <p>
                  {"I’m interested in how data-driven systems make decisions, and how those decisions shape the way people interact with technology. From machine learning models to large-scale products, I’m drawn to understanding both how things work and why they’re built that way."}
                </p>
                <p>
                  {"To me, technology has its own kind of language. Every design choice in a system, from how data is processed, how a model is structured, and how a feature is built, tells a story about the people who made it and the problems they were trying to solve."}
                </p>
                <p>
                  {"I’m interested in uncovering that story, and building systems that are not just functional, but thoughtful, transparent, and meaningful to the people who use them."}
                </p>
              </div>
            </div>
          </div>

          {/* Right portrait area */}
          <div className="relative flex-1 flex justify-center items-start pt-8 lg:pt-0">
            {/* Pink circle background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-pink-soft" />
            {/* Portrait placeholder */}
            <img 
              src="/portrait.JPG" 
              alt="Joanna Moon portrait" 
              className="relative w-[320px] lg:w-[400px] h-[500px] lg:h-[620px] rounded-sm overflow-hidden object-cover mt-12 lg:mt-16"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
