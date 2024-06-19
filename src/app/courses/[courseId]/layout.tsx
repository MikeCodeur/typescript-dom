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
      <div id="root">
        <div id="exo"></div>
        <div id="exo_final"></div>
        <div id="exo_bonus_1"></div>
      </div>
    </main>
  )
}
