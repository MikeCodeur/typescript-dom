"use client"

import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Switch onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
  )
}
