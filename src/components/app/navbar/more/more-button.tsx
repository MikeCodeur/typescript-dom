import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Instruction } from "@/types/app"
import Link from "next/link"
import { ROUTES } from "@/common/constants"

type MoreButtonProps = {
  position: "left" | "right"
  instructions: Instruction[]
  state: {
    current: number
    setCurrent: (value: number) => void
  }
}
const MoreButton = ({ position, instructions, state }: MoreButtonProps) => {
  const { current, setCurrent } = state

  const back = current - 1
  const next = current + 1
  const newIdCourse = position === "left" ? back : next
  const idCourse = position === "left" ? back - 1 : current
  const conditionBack = current !== 1
  const conditionNext = current !== Number(instructions.at(-1)?.id)
  const newCondition = position === "left" ? conditionBack : conditionNext

  return (
    <div className="flex w-[200px] flex-row items-center justify-center gap-x-2">
      {newCondition ? (
        <Link
          href={`${ROUTES.COURSE}/${newIdCourse}`}
          onClick={() => setCurrent(newIdCourse)}
          className="flex flex-row items-center"
        >
          {position === "left" ? (
            <ChevronLeft className="text-primary" />
          ) : undefined}
          <Button variant={"outline"}>
            <p className="w-28 overflow-hidden truncate text-center">
              {instructions[idCourse].title}
            </p>
          </Button>
          {position === "right" ? (
            <ChevronRight className="text-primary" />
          ) : undefined}
        </Link>
      ) : undefined}
    </div>
  )
}

export default MoreButton
