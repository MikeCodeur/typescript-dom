import { markdownToHtml } from "./ast"
import { readFile } from "./fileUtils"

export const getInformations = async () => {
  const fileContent = readFile("src/common/markdown/infos.md")
  const fileHtml = await markdownToHtml(fileContent)
  const final = getInformationFromHtml(fileHtml)
  return final
}

function getInformationFromHtml(html: string) {
  const objects = html.split("</li>")
  objects.pop()
  const tranformObj = objects.map((obj) => {
    const icon = getMatchRegexInfo("icon", obj)
    const name = getMatchRegexInfo("name", obj)
    const description = getMatchRegexInfo("description", obj)
    const content = getMatchRegexInfo("content", obj)
    const codeRegex = /<pre.*?>([\S\s]+?)<\/pre>/
    const match = obj.match(codeRegex)
    const code = match ? match[0] : undefined

    return {
      icon,
      name,
      description,
      content,
      code,
    } as const
  })
  return tranformObj
}

const getMatchRegexInfo = (name: string, html: string) => {
  const nameRegex = new RegExp(`${name}:\\s*"([^"]+)"`)
  const match = html.match(nameRegex)
  return match ? match[1] : undefined
}
