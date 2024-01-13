import { DIRECTORY, EXERCISE_DIRECTORY } from "@/common/constants"
import { getPracticeById, getPracticesById } from "./practices"

import { Directory } from "@/types/app"
import path from "node:path"

export const exercicesDefaultDirectory = path.join(
  process.cwd(),
  `src/${DIRECTORY.EXERCISE}`
)
export const exercicesAppDirectory = path.join(
  process.cwd(),
  `src/app/courses/[courseId]/@app/${DIRECTORY.EXERCISE}`
)

export const getExercicesById = async (id: string, directory: Directory) => {
  const newDirectory = EXERCISE_DIRECTORY[directory]
  return getPracticesById(id, newDirectory)
}

export const getExerciceById = async (id: string, directory: Directory) => {
  const newDirectory = EXERCISE_DIRECTORY[directory]
  return getPracticeById(id, newDirectory)
}
