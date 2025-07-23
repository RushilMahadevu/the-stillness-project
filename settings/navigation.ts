import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "About",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Participate",
    href: "/participate",
  },
  {
    title: "Progress",
    href: "/progress",
  },
  {
    title: "Contact",
    href: "/contact",
    external: true,
  },
]

export const GitHubLink = {
  href: "",
}
