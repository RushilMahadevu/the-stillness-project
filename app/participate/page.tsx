import { Link } from "lib/transition"
import { buttonVariants } from "@/components/ui/button"

export default function Participate() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Join The Stillness Project</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your perspective on stillness, silence, and quiet moments in modern life is valuable and needed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Survey Option */}
        <div className="bg-background border-2 rounded-lg p-8 hover:border-primary/50 transition-colors">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Online Survey</h3>
              <p className="text-sm text-muted-foreground font-medium">4-6 minutes • Anonymous • Mobile-friendly</p>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Quick and accessible way to share your experiences with stillness through multiple-choice questions and brief responses.
          </p>
          
          <ul className="text-sm text-muted-foreground mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              4-6 minutes of your time
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              Completely anonymous
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              Skip any questions you prefer not to answer
            </li>
          </ul>
          
          <Link
            href="https://forms.gle/G3FbndqjLWZeeJx56"
            className={buttonVariants({
              className: "w-full",
              size: "lg"
            })}
            target="_blank"
            rel="noopener noreferrer"
          >
            Take the Survey
          </Link>
        </div>

        {/* Interview Option */}
        <div className="bg-background border-2 rounded-lg p-8 hover:border-primary/50 transition-colors">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">In-Depth Interview</h3>
              <p className="text-sm text-muted-foreground font-medium">35 minutes • Personal • Conversational</p>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Share your story in a friendly, one-on-one conversation about your relationship with stillness and how it fits into your life.
          </p>
          
          <ul className="text-sm text-muted-foreground mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              Relaxed, conversational style
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              Video or phone (your choice)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              Review how your insights are used
            </li>
          </ul>
          
          <Link
            href="https://koalendar.com/e/the-stillness-project"
            className={buttonVariants({
              variant: "outline",
              className: "w-full",
              size: "lg"
            })}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule an Interview
          </Link>
        </div>
      </div>

      {/* Who Can Participate */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Who Can Participate?</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-primary">Basic Requirements</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                Age 14 or older
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                Comfortable communicating in English
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                Access to internet or phone
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                Curiosity about stillness and quiet moments
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-primary">We Especially Welcome</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                Diverse cultural backgrounds
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                All age groups and life experiences
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                Various relationships with technology
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                Urban, suburban, and rural perspectives
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Privacy & Benefits */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-background border rounded-lg p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your Privacy Matters
          </h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Complete confidentiality and anonymity</li>
            <li>• Right to withdraw at any time</li>
            <li>• Secure data storage and limited access</li>
            <li>• No personal information shared</li>
          </ul>
        </div>

        <div className="bg-background border rounded-lg p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            What You Gain
          </h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Self-reflection opportunity</li>
            <li>• Contribution to important research</li>
            <li>• Voice in academic discussions</li>
            <li>• Summary of research findings</li>
          </ul>
        </div>
      </div>

      {/* Learn More */}
      <div className="text-center">
        <h3 className="font-semibold mb-4">Want to Learn More?</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/docs/project-overview"
            className={buttonVariants({
              variant: "outline",
              size: "sm"
            })}
          >
            Project Overview
          </Link>
          <Link
            href="/docs/study-details"
            className={buttonVariants({
              variant: "outline",
              size: "sm"
            })}
          >
            Study Details
          </Link>
          <Link
            href="/docs/researcher"
            className={buttonVariants({
              variant: "outline",
              size: "sm"
            })}
          >
            About the Researcher
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "outline",
              size: "sm"
            })}
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
          Your experience with stillness matters. Whether you find quiet moments essential or struggle to find them at all, 
          your perspective contributes to important research about modern life and well-being.
        </p>
      </div>
    </div>
  )
}
