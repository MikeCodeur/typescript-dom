import { EXERCISE, SOLUTION, extensions } from "@/common/constants"

export type Extensions = (typeof extensions)[number]
export type ExtensionsWithContent = Extract<Extensions, "md" | "html">
export type ExtensionsWithNoContent = Exclude<Extensions, ExtensionsWithContent>

export type Practice =
  | {
      id: string
      extension: ExtensionsWithContent
      contents: string
    }
  | {
      id: string
      extension: ExtensionsWithNoContent
    }

export type Instruction = {
  id: string
  title: string
  description: string
  contents: string
}
export type Directory = "default" | "app"

export type PracticeType = typeof EXERCISE | typeof SOLUTION
