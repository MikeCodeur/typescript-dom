import { ComponentType, JSX } from "react"
import { DIRECTORY_PATH, EXTENSIONS } from "@/common/constants"
import { Directory, Practice, PracticeType } from "@/types/app"

import Image from "next/image"
import dynamic from "next/dynamic"

const DynamicComponentWithNoSSR = dynamic(
  () => import("./(practice)/pratice-content"),
  {
    ssr: false,
  }
)

const getPracticeImport = async (
  practice: Practice,
  type: PracticeType,
  directory: Directory
) => {
  const pathBase =
    directory === DIRECTORY_PATH.default ? "" : `${DIRECTORY_PATH.app}/`
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
  let newChildren = getChildrenByType(RenderByPractice)
  return <DynamicComponentWithNoSSR>{newChildren}</DynamicComponentWithNoSSR>
}

const getChildrenByType = (
  Element: ComponentType<object> | JSX.Element | string
) => {
  let newChildren
  switch (typeof Element) {
    case "string": {
      newChildren = <div dangerouslySetInnerHTML={{ __html: Element }} />
      break
    }
    case "function": {
      newChildren = <Element />
      break
    }
    case "object": {
      newChildren = <>{Element}</>
      break
    }
  }

  return newChildren
}

export default Content
