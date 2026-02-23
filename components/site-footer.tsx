import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-8">
        {/* Divider */}
        <div className="h-px bg-border" />

        <div className="flex flex-col sm:flex-row justify-between items-start py-16 gap-8">
          {/* Left */}
          <div>
            <h3 className="font-serif italic text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Get in touch!
            </h3>
            <a
              href="mailto:y9moon@uwaterloo.ca"
              className="text-sm text-foreground hover:opacity-70 transition-opacity"
            >
              y9moon@uwaterloo.ca
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end gap-1">
            <Link
              href="https://www.linkedin.com/in/joannamoon05/"
              className="text-sm text-foreground hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/joannamooon"
              className="text-sm text-foreground hover:opacity-70 transition-opacity"
            >
              GitHub
            </Link>
            
          </div>
        </div>
      </div>

      {/* Bottom gray bar */}
      <div className="h-3 bg-muted-foreground/40" />
    </footer>
  )
}
