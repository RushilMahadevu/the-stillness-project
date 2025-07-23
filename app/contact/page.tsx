import { Link } from "lib/transition"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Contact the Researcher
        </h1>
        <p className="mb-12 max-w-2xl mx-auto text-xl text-muted-foreground sm:text-2xl">
          Questions about The Stillness Project? Need support with participation? 
          Interested in collaboration or learning more about the research?
        </p>

        <div className="mb-12 space-y-8">
          <div className="bg-background border rounded-lg p-8 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Primary Contact</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Rushil Mahadevu</p>
                <p className="text-muted-foreground">Student Researcher</p>
                <p className="text-muted-foreground">The Stillness Project</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <Link 
                  href="mailto:rushil.mahadevu@gmail.com"
                  className="text-primary hover:underline"
                >
                  rushil.mahadevu@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <Separator className="max-w-2xl mx-auto" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background border rounded-lg p-6 text-left">
              <h3 className="text-xl font-semibold mb-3">For Participants</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Questions about survey or interview process</li>
                <li>• Technical support with participation</li>
                <li>• Privacy or confidentiality concerns</li>
                <li>• Special accommodation requests</li>
                <li>• Data withdrawal requests</li>
              </ul>
            </div>

            <div className="bg-background border rounded-lg p-6 text-left">
              <h3 className="text-xl font-semibold mb-3">For General Inquiry</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Research methodology questions</li>
                <li>• Academic collaboration opportunities</li>
                <li>• Media or interview requests</li>
                <li>• Community presentation requests</li>
                <li>• General project information</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <Link
            href="https://forms.gle/G3FbndqjLWZeeJx56"
            className={buttonVariants({
              className: "px-8 py-3",
              size: "lg"
            })}
            target="_blank"
            rel="noopener noreferrer"
          >
            Take Survey
          </Link>
          <Link
            href="https://koalendar.com/e/the-stillness-project"
            className={buttonVariants({
              variant: "outline",
              className: "px-8 py-3",
              size: "lg"
            })}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Interview
          </Link>
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link href="/docs/researcher" className="hover:underline">
              About the Researcher
            </Link>
            <span>•</span>
            <Link href="/docs/study-details/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/docs/study-details" className="hover:underline">
              Study Details
            </Link>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Academic research project conducted with institutional oversight and ethical guidelines
          </p>
        </div>
      </div>
    </section>
  )
}

export async function generateMetadata() {
  return {
    title: "Contact - The Stillness Project",
    description: "Contact the researcher for questions about The Stillness Project, participation support, or collaboration opportunities.",
    keywords: ["contact", "researcher", "stillness project", "research support", "participation"],
  }
}
