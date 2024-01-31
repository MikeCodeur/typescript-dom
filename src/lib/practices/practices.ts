import "server-only"

import { ExtensionsWithNoContent, Practice } from "@/types/app"
import { filterFiles, readDirectory, readFile } from "@/lib/fileUtils"

import { EXTENSIONS, extensionsWithNoContent } from "@/common/constants"
import { sanitizeHtml } from "@/lib/ast"
import { addLeadingZero } from "@/lib/helpers"
import path from "node:path"

const getPracticeFiles = (id: string, directory: string) => {
  const fileArray = readDirectory(directory)
  const newId = addLeadingZero(id)
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
  const practiceFile = getPracticeFiles(id, directory)[0]
  const fileDetails = await getFileDetails(practiceFile, directory)

  return fileDetails
}
