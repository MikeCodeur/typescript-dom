import Course from "@/app/_components/(app)/course"
import type { Metadata } from "next"
import { getCurrentDirectory } from "@/lib/helpers"
import { getInstructions } from "@/lib/instructions"
import { iconUrl } from "@/index"

type Props = {
  params: {
    courseId: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.courseId
  const directory = getCurrentDirectory()

  const instructions = await getInstructions(directory)

  return {
    title: `${id}.${instructions[Number(id) - 1].title}`,
    icons: {
      icon: {
        url: iconUrl,
      },
    },
  }
}
export default async function Page({ params }: Props) {
  const { courseId } = params
  const directory = getCurrentDirectory()

  return <Course courseId={courseId} directory={directory} />
}
