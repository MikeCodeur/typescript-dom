import Content from "@/components/content"
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
  const solution = await getSolutionById(solutionId)

  return <Content practice={solution} practiceType={"solution"} />
}

export default Page
