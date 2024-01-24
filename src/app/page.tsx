import Menu from "@/app/_components/(app)/menu"
import Navbar from "@/components/app/navbar/navbar"
import { getCurrentDirectory } from "@/lib/helpers"
import { getInstructions } from "@/lib/instructions"

export default async function Home() {
  const directory = getCurrentDirectory()
  const instructions = await getInstructions(directory)

  return (
    <main className="flex flex-col gap-2 md:gap-4">
      <Navbar instructions={instructions} />
      <Menu instructions={instructions} />
    </main>
  )
}
