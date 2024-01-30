import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type LinkStandAloneProps = {
  route: string
}
const LinkStandAlone = ({ route }: LinkStandAloneProps) => {
  return (
    <Link
      href={route}
      className={cn(buttonVariants({ variant: "secondary" }), "mb-8")}
      target="_blank"
    >
      Ouvrir dans un page à part
    </Link>
  )
}

export default LinkStandAlone
