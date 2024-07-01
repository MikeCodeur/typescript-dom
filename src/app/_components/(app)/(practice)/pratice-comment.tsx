import { InfoIcon } from "lucide-react"
import React from "react"

const PraticeComment = ({ text }: { text: string }) => {
  return (
    <div className="flex w-fit flex-row gap-4 rounded-lg border-[1px] border-blue-600 p-4">
      <InfoIcon className="text-blue-400 dark:text-blue-600" />
      <div className="flex flex-col items-start gap-1">
        <p className="dark:text-blue-200">Spécificité de l'exercice bonus</p>
        <p className="text-sm dark:text-blue-200">{text}</p>
      </div>
    </div>
  )
}

export default PraticeComment
