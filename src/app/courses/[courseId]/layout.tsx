import React from "react"
import { getCurrentDirectory } from "@/lib/helpers"

export default function CourseLayout(props: {
  app: React.ReactNode
  default: React.ReactNode
}) {
  const directory = getCurrentDirectory()

  return (
    <main className="flex h-screen w-full flex-col lg:overflow-y-hidden">
      {props[directory]}
    </main>
  )
}
