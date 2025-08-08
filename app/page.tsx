import { Link } from "lib/transition"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-accent/10 -z-10" />
      
      {/* Hero Section */}
      <section className="flex min-h-[88vh] flex-col items-center justify-center px-4 py-16 text-center">
        {/* Study badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
          Active Research Study • July - November 2025
        </div>

        <h1 className="mb-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          In a world of{" "}
          <span className="relative">
            <span className="text-muted-foreground line-through decoration-2 decoration-destructive/60">
              noise
            </span>
          </span>
          ,<br />
          what is left{" "}
          <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
            unsaid
          </span>
          ?
        </h1>

        <p className="mb-4 max-w-3xl text-xl text-muted-foreground sm:text-2xl lg:text-3xl font-light leading-relaxed">
          A research project exploring how we experience quiet moments in our busy world
        </p>

        <p className="mb-12 max-w-2xl text-base text-muted-foreground/80">
          Independent academic research studying cultural attitudes toward stillness, silence, and reflection across different communities and generations.
        </p>

        {/* CTA Buttons */}
        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="https://forms.gle/G3FbndqjLWZeeJx56"
            className={buttonVariants({
              className: "px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
              size: "lg"
            })}
            target="_blank"
            rel="noopener noreferrer"
          >
            📝 Take Survey (4-6 min)
          </Link>
          <Link
            href="https://koalendar.com/e/the-stillness-project"
            className={buttonVariants({
              variant: "outline",
              className: "px-10 py-4 text-lg border-2 hover:bg-accent/50 transition-all duration-300",
              size: "lg"
            })}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Schedule Interview (15 min)
          </Link>
        </div>

        {/* Learn more section */}
        <div className="space-y-4">
          <Link
            href="/docs/project-overview"
            className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Learn more about the project
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/docs/participation" className="hover:text-foreground transition-colors">
              How to Participate
            </Link>
            <span>•</span>
            <Link href="/docs/study-details" className="hover:text-foreground transition-colors">
              Study Details
            </Link>
            <span>•</span>
            <Link href="/docs/researcher" className="hover:text-foreground transition-colors">
              About the Researcher
            </Link>
          </div>
        </div>
      </section>

      {/* Stats or highlights section */}
      <section className="border-t bg-accent/5 py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">4-6 min</div>
              <div className="text-sm text-muted-foreground">Quick survey participation</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">15 min</div>
              <div className="text-sm text-muted-foreground">Optional interview session</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">100% Anonymous</div>
              <div className="text-sm text-muted-foreground">Your privacy is protected</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
