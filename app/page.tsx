import { Link } from "lib/transition"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="mb-8 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
        In a world of <span className="text-muted-foreground line-through">noise</span>, what is left unsaid?
      </h1>
      <p className="mb-12 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
        A research project exploring how we experience quiet moments in our busy world.
      </p>

      <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row">
        <Link
          href="https://forms.gle/G3FbndqjLWZeeJx56"
          className={buttonVariants({
            className: "px-10 py-4 text-lg font-semibold",
            size: "lg"
          })}
          target="_blank"
          rel="noopener noreferrer"
        >
          Take a 4-6 min Survey
        </Link>
        <Link
          href="https://koalendar.com/e/the-stillness-project"
          className={buttonVariants({
            variant: "outline",
            className: "px-8 py-4 text-lg",
            size: "lg"
          })}
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a 35 min Interview
        </Link>
      </div>

      <div className="mb-12">
        <Link
          href="/docs/project-overview"
          className="text-primary hover:underline text-sm"
        >
          Learn more about the project
        </Link>
      </div>
    </section>
  )
}
