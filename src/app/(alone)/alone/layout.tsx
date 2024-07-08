import { MODULE_NAME } from "@/common/constants"
import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: MODULE_NAME,
  description: "course app",
}

export default async function AloneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className="m-0 flex min-h-[100vh] flex-col items-center justify-center overflow-y-auto p-0 lg:overflow-y-hidden"
        id="root"
      >
        {children}
      </body>
    </html>
  )
}
