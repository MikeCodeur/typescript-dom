import React from "react"

export default function CourseLayout(props: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen w-full flex-col lg:overflow-y-hidden">
      {props.children}
    </main>
  )
}
