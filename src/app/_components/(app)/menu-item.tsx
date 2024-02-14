import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Instruction } from "@/types/app"
import Link from "next/link"
import { ROUTES } from "@/common/constants"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type MenuItemProps = {
  instruction: Instruction
  isLastIndex: boolean
  isActive: boolean
  onClick: (value: string) => void
}
const MenuItem = ({
  instruction,
  isLastIndex,
  isActive,
  onClick,
}: MenuItemProps) => {
  return (
    <AccordionItem
      value={instruction.id.toString()}
      className={cn(
        "-z-0 mt-0 flex w-full flex-col border-b-0 border-l-2 pt-0",
        isLastIndex && "border-l-transparent",
        isLastIndex && "data-[state=open]:border-border"
      )}
    >
      <div>
        <div className="relative -ml-[23px] flex flex-row items-center justify-center  align-middle">
          <span className="absolute -left-0.5 -top-2 z-10 h-12 w-12 rounded-full bg-background" />
          <span
            className={cn(
              "absolute left-1.5 top-0 z-10 m-auto h-8 w-8 rounded-full py-1 text-center text-white",
              isActive
                ? "bg-muted-foreground dark:bg-primary"
                : "bg-primary/50 dark:bg-secondary"
            )}
          >
            {Number(instruction.id.toString())}
          </span>
        </div>
        <AccordionTrigger
          className="pb-8 pl-8 pt-0 text-left text-sm font-bold hover:no-underline lg:text-xl"
          onClick={() => onClick(instruction.id.toString())}
        >
          <span>{instruction.title}</span>
        </AccordionTrigger>
      </div>
      <AccordionContent className="flex flex-col gap-8 pl-8">
        <p className="text-sm lg:text-lg">
          Exercice : {instruction.description}
        </p>
        <Link
          href={`${ROUTES.COURSE}/${instruction.id}`}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full uppercase lg:w-fit lg:self-end"
          )}
        >
          Accéder à l&apos;exercice
        </Link>
      </AccordionContent>
    </AccordionItem>
  )
}

export default MenuItem
