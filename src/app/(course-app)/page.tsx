import HelpSection from "@/app/_components/(app)/help-section"
import Menu from "@/app/_components/(app)/menu"
import { Metadata } from "next"
import Navbar from "@/components/app/navbar/navbar"
import { Suspense } from "react"
import { cn } from "@/lib/utils"
import { getCurrentDirectory } from "@/lib/helpers"
import { getInstructions } from "@/lib/instructions"
import { iconUrl } from "@/index"

export const metadata: Metadata = {
  icons: {
    icon: {
      url: iconUrl,
    },
  },
}
export default async function Home() {
  const directory = getCurrentDirectory()
  const instructions = await getInstructions(directory)

  return (
    <main>
      <div className="flex w-full flex-col items-center pb-16 md:gap-4">
        <Navbar instructions={instructions} />
        <div className="flex w-full flex-col items-center gap-4 md:max-w-[800px]">
          <Menu instructions={instructions} />
          <Suspense>
            <HelpSection />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
