import { getPracticeById, getPracticesById } from "./practices"

import { Directory } from "@/types/app"
import { SOLUTION_DIRECTORY } from "@/common/constants"

export const getSolutionsById = async (id: string, directory: Directory) => {
  const newDirectory = SOLUTION_DIRECTORY[directory]
  return getPracticesById(id, newDirectory)
}
export const getSolutionById = async (id: string, directory: Directory) => {
  const newDirectory = SOLUTION_DIRECTORY[directory]
  return getPracticeById(id, newDirectory)
}
