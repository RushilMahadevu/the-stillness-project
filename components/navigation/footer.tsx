import Link from "next/link"

import { Company } from "@/lib/meta"

export function Footer() {
  return (
    <footer className="border-t bg-accent/5">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Main footer content */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Project info */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold text-foreground">The Stillness Project</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Independent academic research exploring cultural attitudes toward stillness, 
              silence, and quiet moments across different communities and generations.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Study Active: July - November 2025
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Participate</h4>
            <div className="space-y-2">
              <Link 
                href="https://forms.gle/G3FbndqjLWZeeJx56" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Take Survey (4-6 min)
              </Link>
              <Link 
                href="https://koalendar.com/e/the-stillness-project" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Interview
              </Link>
              <Link 
                href="/docs/participation/requirements" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Requirements
              </Link>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Information</h4>
            <div className="space-y-2">
              <Link 
                href="/docs/project-overview" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Project Overview
              </Link>
              <Link 
                href="/docs/study-details" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Study Details
              </Link>
              <Link 
                href="/docs/researcher" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About Researcher
              </Link>
              <Link 
                href="/docs/study-details/privacy" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link className="font-medium hover:text-foreground transition-colors" href={Company.link}>
                {Company.name}
              </Link>{" "}
              • Academic Research Study
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                className="text-muted-foreground hover:text-foreground transition-colors"
                href="/contact"
              >
                Contact Researcher
              </Link>
              <span className="text-border">•</span>
              <Link
                className="text-muted-foreground hover:text-foreground transition-colors"
                href="/docs/study-details/privacy"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
