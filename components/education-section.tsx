export function EducationSection() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left content */}
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-sm font-medium text-foreground">002</span>
              <span className="text-sm font-bold tracking-wider text-foreground">
                EDUCATION
              </span>
            </div>

            <h5 className="font-serif italic text-4xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-foreground mb-8">
              University of
              <br />
              Waterloo
            </h5>

            <div className="flex flex-col gap-1 text-[15px] leading-relaxed text-foreground">
              <p>Bachelor's Degree of Data Science</p>
              <p>April 2027</p>
            </div>
          </div>

          {/* Right photo */}
          <div className="flex-1 flex flex-col items-center">
            <img 
              src="/exploring.png" 
              alt="Campus photo with Oski" 
              className="w-full max-w-[380px] aspect-[4/3] rounded-lg overflow-hidden object-cover"
            />
            <p className="mt-4 text-sm text-foreground text-center">
              {"Exploring the tunnels at STC <3"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
