import { Directory, PracticeType } from "@/types/app"
import { EXERCISE, ROUTES } from "@/common/constants"
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import { getPracticesByIdAndType, getPracticesNames } from "@/lib/helpers"

import Content from "../content"
import LinkStandAlone from "../link-standalone"
import PracticeTrigger from "./practice-tabs-trigger"
import PraticeComment from "./pratice-comment"
import { getPracticeComment } from "@/lib/practices/practices"

type PracticeTabsProps = {
  id: string
  practiceType: PracticeType
  directory: Directory
}

const PracticeTabs = async ({
  id,
  practiceType,
  directory,
}: PracticeTabsProps) => {
  const route =
    practiceType === EXERCISE ? ROUTES.ALONE.EXERCISE : ROUTES.ALONE.SOLUTION

  const { practices, name } = await getPracticesByIdAndType(
    id,
    practiceType,
    directory
  )
  const datas = getPracticesNames(name, practices)
  return (
    <Tabs defaultValue={`${name}`} className="flex w-full flex-col">
      <TabsList className="ml-4 flex h-fit w-fit flex-wrap justify-evenly gap-x-2">
        {datas.map((data) => {
          return (
            <PracticeTrigger
              icon={"check"}
              name={data.name}
              key={data.practice.id}
            />
          )
        })}
      </TabsList>
      {datas.map((data, index) => {
        const newRoute = `${route}/${data.practice.id}`
        const comment = getPracticeComment(
          data.practice.id,
          directory,
          practiceType
        )

        return (
          <TabsContent value={data.name} key={index}>
            <div className="flex flex-row justify-between p-4">
              {comment && <PraticeComment text={comment} />}
              <LinkStandAlone route={newRoute} />
            </div>
            <div className="w-full lg:max-h-screen lg:overflow-y-scroll">
              <Content
                practice={data.practice}
                practiceType={practiceType}
                directory={directory}
              />
            </div>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}

export default PracticeTabs
