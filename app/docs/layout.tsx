import { Sidebar } from "@/components/navigation/sidebar"

export default function Documents({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-start gap-6 lg:gap-12 xl:gap-16">
        <Sidebar />
        <div className="flex-1 md:flex-[6] min-h-[calc(100vh-8rem)] py-6 lg:py-8">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
