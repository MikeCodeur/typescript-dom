"use client"

import { Accordion } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Instruction } from "@/types/app"
import { MODULE_NAME } from "@/common/constants"
import MenuItem from "./menu-item"
import ReactIcon from "@/components/app/react-icon"
import { useState } from "react"

type MenuProps = {
  instructions: Instruction[]
}
const Menu = ({ instructions }: MenuProps) => {
  const [activeInstruction, setActiveInstruction] = useState(instructions[0].id)
  const lastIndex = (instructions.at(-1)?.id ?? 0) as number
  const handleClick = (id: string) => {
    setActiveInstruction(id)
  }
  return (
    <div className="flex w-full flex-col items-center justify-center py-4">
      <div className="flex h-32 w-32 justify-center">
        <ReactIcon className="h-full w-full" />
      </div>
      <h1 className="m-4 py-2 text-xl font-semibold lg:py-6 lg:text-3xl">
        {MODULE_NAME}
      </h1>
      <Card className="flex w-full flex-row gap-8 p-8">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue={activeInstruction}
        >
          <div>
            {instructions.map((instruction) => {
              const isActive = activeInstruction === instruction.id
              const isLastInstruction =
                instruction.id === instructions[lastIndex - 1].id ? true : false
              return (
                <MenuItem
                  key={instruction.id}
                  instruction={instruction}
                  isLastIndex={isLastInstruction}
                  isActive={isActive}
                  onClick={handleClick}
                />
              )
            })}
          </div>
        </Accordion>
      </Card>
    </div>
  )
}

export default Menu
