import { EXERCISE, EXTENSIONS, SOLUTION } from "@/common/constants"
import Iframe from "@/components/iframe"
import { Practice, PracticeType } from "@/types/app"
import Image from "next/image"
import { ComponentType, JSX } from "react"

const getImport = async (practice: Practice, type: PracticeType) => {
  switch (type) {
    case EXERCISE: {
      return await import(`@/exercise/${practice.id}.${practice.extension}`, {
        with: { type: practice.extension },
      })
    }
    case SOLUTION: {
      return await import(`@/final/${practice.id}.${practice.extension}`, {
        with: { type: practice.extension },
      })
    }
  }
}

type ContentProps = {
  practice: Practice
  practiceType: PracticeType
}
const Content = async ({ practice, practiceType }: ContentProps) => {
  let RenderByPractice: ComponentType<object> | JSX.Element | string
  switch (practice.extension) {
    case EXTENSIONS.js:
    case EXTENSIONS.ts:
    case EXTENSIONS.jsx:
    case EXTENSIONS.tsx: {
      const mod = await getImport(practice, practiceType)
      const keysMods = Object.keys(mod)
      RenderByPractice = mod.default ?? mod[keysMods[0]]
      break
    }
    case EXTENSIONS.png: {
      const mod = await getImport(practice, practiceType)
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
