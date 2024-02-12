import { Accordion } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import Course from "./menu-item"
import { Instruction } from "@/types/app"
import { MODULE_NAME } from "@/common/constants"
import ReactIcon from "@/components/app/react-icon"

type MenuProps = {
  instructions: Instruction[]
}
const Menu = ({ instructions }: MenuProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-4 lg:px-16">
      <div className="flex h-32 w-32 justify-center">
        <ReactIcon className="h-full w-full" />
      </div>
      <h1 className="m-4 py-2 text-xl font-semibold lg:py-6 lg:text-3xl">
        {MODULE_NAME}
      </h1>
      <Card className="flex w-full flex-row gap-8 p-8 md:w-1/2 lg:w-2/3">
        <Accordion type="single" collapsible className="w-full ">
          <div>
            {instructions.map((instruction) => (
              <Course key={instruction.id} instruction={instruction} />
            ))}
          </div>
        </Accordion>
      </Card>
    </div>
  )
}

export default Menu
