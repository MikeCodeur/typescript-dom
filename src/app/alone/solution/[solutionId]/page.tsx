import Content from "@/app/_components/(app)/content"
import { getCurrentDirectory } from "@/lib/helpers"
import { getSolutionById } from "@/lib/practices/solutions"
import { notFound } from "next/navigation"

const Page = async ({
  params,
}: {
  params: {
    solutionId: string
  }
}) => {
  const { solutionId } = params

  if (!solutionId) {
    notFound()
  }
  const directory = getCurrentDirectory()
  const solution = await getSolutionById(solutionId, directory)

  return (
    <Content practice={solution} practiceType={"final"} directory={directory} />
  )
}

export default Page
