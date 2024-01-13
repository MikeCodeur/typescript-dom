import "server-only"

import fs from "node:fs"

export const readDirectory = (pathDirectory: string) => {
  try {
    const folderContent = fs.readdirSync(pathDirectory)
    return folderContent
  } catch {
    return []
  }
}
export const readFile = (pathFile: string) => {
  const fileContent = fs.readFileSync(pathFile, "utf8")
  if (!fileContent) {
    throw new Error(`Fichier non trouvé: ${pathFile}`)
  }
  return fileContent
}

export const filterFiles = (
  fileArray: string[],
  extension: string,
  exclude: boolean = false
) => {
  if (exclude) {
    return fileArray.filter((file) => !file.includes(extension))
  }
  return fileArray.filter((file) => file.includes(extension))
}
