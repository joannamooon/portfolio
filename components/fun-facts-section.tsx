const funFacts = [
  {
    caption: "I went to China this summer!",
    alt: "Photo from China trip",
  },
  {
    caption: "I have an identical twin! (Hi Hannah :P)",
    alt: "Photo with twin sister",
  },
  {
    caption:
      "I have two cats named Soy and Bean (a reference off of my dog's name, Tofu)",
    alt: "Photo of cat",
  },
]

export function FunFactsSection() {
  return (
    <section className="relative py-20">
      {/* Pink band across the middle */}
      <div className="absolute left-0 right-0 top-1/3 h-[200px] bg-pink-soft -z-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-8">
        <div className="flex items-center gap-6 mb-10">
          <span className="text-sm font-medium text-foreground">003</span>
          <span className="text-sm font-bold tracking-wider text-foreground">
            FUN FACTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {funFacts.map((fact, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  {fact.alt}
                </span>
              </div>
              <p className="mt-4 text-sm text-foreground text-center text-balance max-w-[260px]">
                {fact.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
