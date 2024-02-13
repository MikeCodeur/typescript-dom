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
      className={cn(
        buttonVariants({ variant: "outline" }),
        "mb-4 ml-4 mt-8 uppercase"
      )}
      target="_blank"
    >
      Ouvrir dans un page à part
    </Link>
  )
}

export default LinkStandAlone
