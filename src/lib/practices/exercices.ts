import { getPracticeById, getPracticesById } from "./practices"

import { Directory } from "@/types/app"
import { EXERCISE_DIRECTORY } from "@/common/constants"

export const getExercicesById = async (id: string, directory: Directory) => {
  const newDirectory = EXERCISE_DIRECTORY[directory]
  return getPracticesById(id, newDirectory)
}

export const getExerciceById = async (id: string, directory: Directory) => {
  const newDirectory = EXERCISE_DIRECTORY[directory]
  return getPracticeById(id, newDirectory)
}
