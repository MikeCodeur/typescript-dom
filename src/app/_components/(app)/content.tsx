import { APP_DIRECTORY, DIRECTORY_PATH, EXTENSIONS } from "@/common/constants"
import { ComponentType, JSX } from "react"
import { Directory, Practice, PracticeType } from "@/types/app"

import Iframe from "@/components/iframe"
import Image from "next/image"

const getPracticeImport = async (
  practice: Practice,
  type: PracticeType,
  directory: Directory
) => {
  const pathBase =
    directory === DIRECTORY_PATH.default ? "" : `${APP_DIRECTORY}/`
  return await import(
    `../../../${pathBase}${type}/${practice.id}.${practice.extension}`
  )
}
type ContentProps = {
  practice: Practice
  practiceType: PracticeType
  directory: Directory
}
const Content = async ({ practice, practiceType, directory }: ContentProps) => {
  let RenderByPractice: ComponentType<object> | JSX.Element | string
  switch (practice.extension) {
    case EXTENSIONS.js:
    case EXTENSIONS.ts:
    case EXTENSIONS.jsx:
    case EXTENSIONS.tsx: {
      const mod = await getPracticeImport(practice, practiceType, directory)
      const keysMods = Object.keys(mod)
      RenderByPractice = mod.default ?? mod[keysMods[0]]
      break
    }
    case EXTENSIONS.png: {
      const mod = await getPracticeImport(practice, practiceType, directory)
      const image = mod.default
      RenderByPractice = (
        <Image
          src={image.src}
          alt="practice"
          width={image.width}
          height={image.height}
          blurDataURL={image.blurDataURL}
        />
      )
      break
    }
    default: {
      RenderByPractice = practice.contents ?? "no content"
      break
    }
  }
  return (
    <>
      {typeof RenderByPractice === "string" && (
        <iframe srcDoc={RenderByPractice} className="h-screen w-full" />
      )}
      {typeof RenderByPractice === "function" && (
        <Iframe className="h-screen w-screen">
          <RenderByPractice />
        </Iframe>
      )}
      {typeof RenderByPractice === "object" && RenderByPractice}
    </>
  )
}

export default Content
