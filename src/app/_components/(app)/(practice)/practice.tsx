import { EXERCISE, SOLUTION } from "@/common/constants"
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"

import { Directory } from "@/types/app"
import PracticeTabs from "./pratice-tabs"
import PracticeTrigger from "./practice-tabs-trigger"

type PracticeProps = {
  id: string
  directory: Directory
}

const Practice = ({ id, directory }: PracticeProps) => {
  return (
    <div className="flex min-h-fit w-full flex-col lg:w-1/2 lg:overflow-y-hidden">
      <div className="flex w-full lg:max-h-screen">
        <Tabs defaultValue="exercices" className="flex w-full flex-col">
          <TabsList className="ml-4 flex h-fit w-fit flex-row gap-2 md:px-2">
            <PracticeTrigger icon="laptop" name="exercices" />
            <PracticeTrigger icon="check" name="solutions" />
          </TabsList>
          <TabsContent value="exercices">
            <PracticeTabs
              id={id}
              practiceType={EXERCISE}
              directory={directory}
            />
          </TabsContent>
          <TabsContent value="solutions">
            <PracticeTabs
              id={id}
              practiceType={SOLUTION}
              directory={directory}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Practice
