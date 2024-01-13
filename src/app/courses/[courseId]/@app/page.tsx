import "@/styles/markdown.css"

import Course from "../_components/course"
import { DIRECTORY_PATH } from "@/common/constants"

export default function Page({
  params,
}: {
  params: {
    courseId: string
  }
}) {
  const { courseId } = params

  return <Course courseId={courseId} directory={DIRECTORY_PATH.app} />
}
