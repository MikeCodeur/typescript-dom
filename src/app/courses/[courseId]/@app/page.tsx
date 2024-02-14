import Course from "@/app/_components/(app)/course"
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
