import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "🎯 Project Overview",
    href: "/project-overview",
    heading: "About The Research",
  },
  {
    spacer: true,
  },
  {
    title: "🤝 How to Participate",
    href: "/participation",
    heading: "Get Involved",
    items: [
      {
        title: "📝 Survey (4-6 minutes)",
        href: "/survey",
      },
      {
        title: "💬 Interview (15 minutes)",
        href: "/interview",
      },
      {
        title: "📋 Requirements",
        href: "/requirements",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "📊 Study Details",
    href: "/study-details",
    heading: "Research Information",
    items: [
      {
        title: "💭 Interview Topics",
        href: "/interview-topics",
      },
      {
        title: "🔒 Privacy & Data",
        href: "/privacy",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "👨‍🎓 About the Researcher",
    href: "/researcher",
    heading: "Background",
  },
  {
    spacer: true,
  },
  {
    title: "📈 Updates",
    href: "/updates",
    heading: "Latest News",
  },
]
