import "@/styles/markdown.css"

import React from "react"
import { getCurrentDirectory } from "@/lib/helpers"

export default function CourseLayout(props: {
  app: React.ReactNode
  default: React.ReactNode
}) {
  const directory = getCurrentDirectory()

  return <main className="flex w-full flex-col">{props[directory]}</main>
}
