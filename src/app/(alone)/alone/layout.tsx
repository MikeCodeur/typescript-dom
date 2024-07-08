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
      <body id="root">{children}</body>
    </html>
  )
}
