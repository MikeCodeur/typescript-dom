import React from "react"

export default function CourseLayout(props: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen w-full flex-col lg:overflow-y-hidden">
      {props.children}
      {/* <div id="root">
        <div id="exo"></div>
        <div id="exo_final"></div>
        <div id="exo_bonus_1"></div>
      </div> */}
    </main>
  )
}
