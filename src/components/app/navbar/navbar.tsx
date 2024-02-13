"use client"

import { MODULE_NAME, PERSON_NAME } from "@/common/constants"

import { Instruction } from "@/types/app"
import Link from "next/link"
import { ModeToggle } from "../mode-toggle"
import More from "./more/more"
import MoreDesktop from "./more/more-desktop"
import ReactIcon from "../react-icon"
import { cn } from "@/lib/utils"

type NavbarProps = {
  instructions: Instruction[]
  currentInstruction?: number
}

const Navbar = ({ instructions, currentInstruction }: NavbarProps) => {
  return (
    <div className="flex w-full items-center justify-between border-b bg-background px-4 py-2">
      <div className="flex w-fit flex-row items-center lg:w-1/2">
        <Link className="flex flex-row items-center gap-2" href={"/"}>
          <div className="h-8">
            <ReactIcon className="h-full w-full" />
          </div>
          <div className="group flex flex-col text-xs sm:text-sm">
            <h1 className="font-bold">{MODULE_NAME}</h1>
            <p className="text-muted-foreground">{PERSON_NAME}</p>
          </div>
        </Link>
      </div>
      <div className="flex w-fit flex-row items-center lg:w-1/2">
        {currentInstruction ? (
          <div className="flex w-full flex-row justify-between gap-2">
            <div className="flex w-fit flex-row justify-center lg:w-full">
              <MoreDesktop
                instructions={instructions}
                current={currentInstruction}
              />
            </div>
            <div className="flex min-w-min items-center">
              <ModeToggle />
            </div>
            <More instructions={instructions} />
          </div>
        ) : undefined}
        <div
          className={cn(
            "flex w-full justify-end",
            currentInstruction && "hidden"
          )}
        >
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
