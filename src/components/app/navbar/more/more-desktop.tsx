"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Circle } from "lucide-react"
import { Instruction } from "@/types/app"
import Link from "next/link"
import MoreButton from "./more-button"
import { ROUTES } from "@/common/constants"
import { cn } from "@/lib/utils"
import { useState } from "react"

type MoreModuleProps = {
  instructions: Instruction[]
  current: number
}
const MoreDesktop = ({ instructions, current }: MoreModuleProps) => {
  const [currentInstruction, setcurrentInstruction] = useState<number>(current)

  return (
    <div className="hidden w-fit items-center gap-x-4 lg:flex lg:w-full lg:flex-row lg:justify-between">
      <MoreButton
        state={{
          current: currentInstruction,
          setCurrent: setcurrentInstruction,
        }}
        position="left"
        instructions={instructions}
      />
      <div className="flex w-fit flex-row items-center gap-x-2 px-4">
        {instructions.map((exercice) => {
          const id = Number(exercice.id)
          return (
            <Link
              key={id}
              href={`${ROUTES.COURSE}/${id}`}
              onClick={() => setcurrentInstruction(id)}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Circle
                      size={14}
                      className={cn("fill-primary text-primary", {
                        "fill-destructive text-destructive":
                          currentInstruction === id,
                      })}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{exercice.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          )
        })}
      </div>
      <MoreButton
        state={{
          current: currentInstruction,
          setCurrent: setcurrentInstruction,
        }}
        position="right"
        instructions={instructions}
      />
    </div>
  )
}

export default MoreDesktop
