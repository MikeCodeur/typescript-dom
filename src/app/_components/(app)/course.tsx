import { Directory } from "@/types/app"
import Instruction from "./instruction"
import Navbar from "@/components/app/navbar/navbar"
import Practice from "./(practice)/practice"
import { getInstructions } from "@/lib/instructions"
import { notFound } from "next/navigation"

type CourseProps = {
  courseId: string
  directory: Directory
}
const Course = async ({ courseId, directory }: CourseProps) => {
  const instructions = await getInstructions(directory)
  const instruction = instructions.find(
    (instructionItem) => Number(instructionItem.id) === Number(courseId)
  )

  if (!instruction) {
    notFound()
  }
  return (
    <>
      <Navbar
        currentInstruction={Number(instruction.id)}
        instructions={instructions}
      />
      <div className="flex w-full flex-col-reverse bg-background lg:flex-row">
        <Instruction content={instruction.contents} />
        <Practice id={courseId} directory={directory} />
      </div>
    </>
  )
}

export default Course
