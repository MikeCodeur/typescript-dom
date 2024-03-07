import {
  DIRECTORY_PATH,
  EXERCISE,
  EXERCISE_DIRECTORY,
  SOLUTION,
} from "@/common/constants"
import { Directory, Practice, PracticeType } from "@/types/app"

import { getExercicesById } from "./practices/exercices"
import { getSolutionsById } from "./practices/solutions"
import { readDirectory } from "./fileUtils"

export const getCurrentDirectory = () => {
  const checkDefaultDirectory = readDirectory(EXERCISE_DIRECTORY.default)
  if (checkDefaultDirectory.length > 0) return DIRECTORY_PATH.default

  const checkAppDirectory = readDirectory(EXERCISE_DIRECTORY.app)
  if (checkAppDirectory.length > 0) return DIRECTORY_PATH.app

  throw new Error("Aucun exercice trouvé. Lancez la commande `course-app`.")
}

export const addLeadingZero = (number: string) => {
  const newNumber = Number(number)
  return newNumber < 10 ? `0${newNumber}` : number
}

export const getBonusOrClasses = (
  id: string,
  name: string,
  options?: string
) => {
  const bonusRegex = /bonus-(\d+)/
  const bonusMatch = id.match(bonusRegex)

  let bonus: string | undefined
  if (bonusMatch) {
    const bonusNumber = bonusMatch.at(-1)
    bonus = `bonus ${bonusNumber}`
  }

  const classesRegex = /(\d+)-classes/
  const classesMatch = id.match(classesRegex)

  let classes: string | undefined
  if (classesMatch) {
    const classesNumber = classesMatch.at(-1)
    classes = `Exercice classes ${classesNumber}` as const
  }

  let newName = bonus ?? name
  newName = classes ?? newName
  if (options) return `${newName} (${options})`

  return newName
}

export const getPracticesByIdAndType = async (
  id: string,
  practiceType: PracticeType,
  directory: Directory
) => {
  let practices: Practice[]
  let name: string
  switch (practiceType) {
    case EXERCISE: {
      practices = await getExercicesById(id, directory)
      name = "exercice"
      break
    }
    case SOLUTION: {
      practices = await getSolutionsById(id, directory)
      name = "solution"
      break
    }
  }
  return {
    practices,
    name,
  }
}
export const getPracticesNames = (name: string, practices: Practice[]) => {
  let lastPracticeId = ""

  return practices.map((practice) => {
    let addOption = false
    if (practice.id === lastPracticeId) {
      addOption = true
    }
    lastPracticeId = practice.id
    const value = getBonusOrClasses(
      practice.id,
      name,
      addOption ? practice.extension : undefined
    )
    return {
      name: value,
      practice,
    }
  })
}
