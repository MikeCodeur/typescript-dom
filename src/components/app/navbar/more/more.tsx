import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { Instruction } from "@/types/app"
import Link from "next/link"
import { MoreVertical } from "lucide-react"
import { ROUTES } from "@/common/constants"

type MoreProps = {
  instructions: Instruction[]
}
const More = ({ instructions }: MoreProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="px-1 md:px-4 lg:hidden"
          size={"default"}
        >
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Instructions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {instructions.map((instruction) => {
          return (
            <DropdownMenuItem key={instruction.id}>
              <Link
                href={`${ROUTES.COURSE}/${instruction.id}`}
                className="text-xs md:text-base"
              >
                {instruction.title}
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default More
