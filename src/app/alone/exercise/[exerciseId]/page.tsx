import Content from "@/components/content"
import { getExerciceById } from "@/lib/practices/exercices"
import { notFound } from "next/navigation"

const Page = async ({
  params,
}: {
  params: {
    exerciseId: string
  }
}) => {
  const { exerciseId } = params

  if (!exerciseId) {
    notFound()
  }
  const exercice = await getExerciceById(exerciseId)

  return <Content practice={exercice} practiceType={"exercise"} />
}

export default Page
