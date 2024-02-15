import "@/styles/globals.css"

import { MODULE_NAME } from "@/common/constants"
import type { Metadata } from "next"
// eslint-disable-next-line camelcase
import { Open_Sans } from "next/font/google"
import React from "react"
import { ThemeProvider } from "@/components/app/theme-provider"
import { cn } from "@/lib/utils"

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
})

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
          openSans.className,
          "max-h-screen w-full bg-foreground from-background to-foreground text-primary-foreground dark:bg-gradient-to-r"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
