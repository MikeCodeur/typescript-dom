import { DIRECTORY, SOLUTION_DIRECTORY } from "@/common/constants"
import { getPracticeById, getPracticesById } from "./practices"

import { Directory } from "@/types/app"
import path from "node:path"

export const solutionsDefaultDirectory = path.join(
  process.cwd(),
  `src/${DIRECTORY.SOLUTION}`
)
export const solutionsAppDirectory = path.join(
  process.cwd(),
  `src/app/courses/[courseId]/@app/${DIRECTORY.SOLUTION}`
)

export const getSolutionsById = async (id: string, directory: Directory) => {
  const newDirectory = SOLUTION_DIRECTORY[directory]
  return getPracticesById(id, newDirectory)
}
export const getSolutionById = async (id: string, directory: Directory) => {
  const newDirectory = SOLUTION_DIRECTORY[directory]
  return getPracticeById(id, newDirectory)
}
