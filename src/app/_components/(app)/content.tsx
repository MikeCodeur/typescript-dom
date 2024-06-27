import { ComponentType, JSX } from "react"
import {
  DIRECTORY_PATH,
  EXTENSIONS,
  IFRAME_ELEMENT_ID,
} from "@/common/constants"
import { Directory, Practice, PracticeType } from "@/types/app"

import Iframe from "@/components/app/iframe"
import Image from "next/image"

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
  return (
    <>
      {typeof RenderByPractice === "string" && (
        <div
          className={
            "grid h-auto min-h-[100vh] min-w-full overflow-y-auto text-foreground"
          }
        >
          {/* <div id="root">
            <div id="exo"></div>
            <div id="exo_final"></div>
            <div id="exo_bonus_1"></div>
          </div> */}
          <iframe
            srcDoc={RenderByPractice}
            className="h-full w-full"
            id={IFRAME_ELEMENT_ID}
          />
        </div>
      )}
      {typeof RenderByPractice === "function" && (
        <Iframe className="prose flex h-full w-full max-w-none flex-col items-center justify-center gap-8 text-primary-foreground">
          <RenderByPractice />
          <div id="root">
            <div id="exo"></div>
          </div>
        </Iframe>
      )}
      {typeof RenderByPractice === "object" && RenderByPractice}
    </>
  )
}

export default Content
