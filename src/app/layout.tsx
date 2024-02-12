import "@/styles/globals.css"

import { Lato } from "next/font/google"
import { MODULE_NAME } from "@/common/constants"
import type { Metadata } from "next"
import React from "react"
import { ThemeProvider } from "@/components/app/theme-provider"
import { cn } from "@/lib/utils"

const inter = Lato({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: MODULE_NAME,
  description: "course app",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "dark:bg-gradient-to-rlg:overflow-hidden max-h-screen min-w-full overflow-y-scroll bg-foreground from-background to-foreground text-primary-foreground"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
