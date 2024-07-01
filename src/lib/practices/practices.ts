import "server-only"

import {
  Directory,
  ExtensionsWithNoContent,
  Practice,
  PracticeType,
} from "@/types/app"
import { filterFiles, readDirectory, readFile } from "@/lib/fileUtils"

import {
  EXTENSIONS,
  PRACTICE_DIRECTORY,
  extensionsWithNoContent,
} from "@/common/constants"
import { sanitizeHtml } from "@/lib/ast"
import { addLeadingZero } from "@/lib/helpers"
import path from "node:path"

const getPracticeFiles = (id: string, directory: string) => {
  const fileArray = readDirectory(directory)
  let newId = id
  if (!id.includes("bonus")) {
    newId = addLeadingZero(id)
  }
  const practiceFiles = filterFiles(fileArray, newId)

  const practiceFileWithoutMarkdown = filterFiles(
    practiceFiles,
    EXTENSIONS.md,
    true
  )
  return practiceFileWithoutMarkdown
}

export const getFileDetails = async (file: string, directory: string) => {
  const fileRawExtension = path.extname(file)
  const fileId = file.replace(fileRawExtension, "")
  const fileExtension = fileRawExtension.split(".")[1]

  // No content
  if (
    extensionsWithNoContent.includes(fileExtension as ExtensionsWithNoContent)
  ) {
    return {
      id: fileId,
      extension: fileExtension as ExtensionsWithNoContent,
    } satisfies Practice
  }

  // With Content
  const fileContents = readFile(path.join(directory, file))

  // only html support at this time
  if (fileExtension === EXTENSIONS.html) {
    const finalFile = await sanitizeHtml(fileContents)
    return {
      id: fileId,
      extension: fileExtension,
      contents: finalFile,
    } satisfies Practice
  } else {
    throw new Error(`Extension non supporté: ${fileExtension}`)
  }
}
export const getPracticesById = async (id: string, directory: string) => {
  const practiceFiles = getPracticeFiles(id, directory)
  const onlyFiles = practiceFiles.filter((file) => file.includes("."))
  const fileDetails = await Promise.all(
    onlyFiles.map(async (file) => {
      return await getFileDetails(file, directory)
    })
  )
  const sortedFileDetails = fileDetails.toSorted((a, b) =>
    a.id < b.id ? -1 : 1
  )

  return sortedFileDetails
}

export const getPracticeById = async (id: string, directory: string) => {
  const practiceFile = getPracticeFiles(id, directory).find((file) => {
    const regex = new RegExp(`^${id}\\.[^.]+$`)
    return regex.test(file)
  })
  if (!practiceFile) throw new Error(`File not found: ${id}`)
  const fileDetails = await getFileDetails(practiceFile, directory)

  return fileDetails
}

export const getPracticeComment = (
  id: string,
  directory: Directory,
  practiceType: PracticeType
) => {
  const pathDirectory =
    `${PRACTICE_DIRECTORY[directory]}/${practiceType}` as const
  const practiceFile = getPracticeFiles(id, pathDirectory).find((file) => {
    const regex = new RegExp(`^${id}\\.[^.]+$`)
    return regex.test(file)
  })

  if (!practiceFile) throw new Error(`File not found: ${id}`)

  const fileContent = readFile(path.join(pathDirectory, practiceFile))
  const commentRegex = new RegExp(/\/\/\s*🚀(.*)/, "m")
  const match = fileContent.match(commentRegex)

  return match ? match[1].trim() : undefined
}
