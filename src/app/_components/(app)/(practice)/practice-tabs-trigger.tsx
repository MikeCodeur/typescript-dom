import { CheckCircle2, Laptop2, Server } from "lucide-react"

import { TabsTrigger } from "@/components/ui/tabs"

type Icons = "laptop" | "server" | "check"
type PracticeTriggerProps = {
  name: string
  icon: Icons
}

const getIcon = (icon: Icons) => {
  switch (icon) {
    case "laptop": {
      return Laptop2
    }
    case "server": {
      return Server
    }
    case "check": {
      return CheckCircle2
    }
  }
}
const PracticeTrigger = ({ name, icon }: PracticeTriggerProps) => {
  let Icon = getIcon(icon)

  if (name.includes("bonus")) {
    Icon = Server
  }
  return (
    <TabsTrigger value={name} className="text-base capitalize lg:text-lg">
      <Icon className="mr-1 h-4 w-4 md:mr-2 md:h-6 md:w-6" />
      {name}
    </TabsTrigger>
  )
}

export default PracticeTrigger
