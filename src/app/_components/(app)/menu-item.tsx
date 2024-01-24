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
}
const MenuItem = ({ instruction }: MenuItemProps) => {
  return (
    <AccordionItem value={instruction.id.toString()}>
      <AccordionTrigger className="text-left text-sm font-bold hover:no-underline lg:text-xl">
        {instruction.title}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-8">
        <p className="text-sm lg:text-lg">
          Instruction : {instruction.description}
        </p>
        <Link
          href={`${ROUTES.COURSE}/${instruction.id}`}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "w-full lg:w-fit lg:self-end"
          )}
        >
          Accéder à l&apos;exercice
        </Link>
      </AccordionContent>
    </AccordionItem>
  )
}

export default MenuItem
