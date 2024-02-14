import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

import { InfoIcon } from "lucide-react"
import { getInformations } from "@/lib/informations"

const HelpSection = async () => {
  const informations = await getInformations()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">
        Ils vont t&rsquo;aider dans ta mission
      </h2>
      <Card className="flex w-full flex-col gap-2 border-2 border-blue-600 bg-foreground p-2">
        <CardTitle className="flex flex-row gap-2 text-xl">
          <InfoIcon className="text-blue-600" />
          <p className="text-base font-normal dark:text-blue-300">
            Information
          </p>
        </CardTitle>
        <CardContent className="ml-2 text-base dark:text-blue-300">
          Dans le projet tu retrouveras differents Emojis/personnages{" "}
          <span className="font-bold">qui t&rsquo;aideront à progresser</span>{" "}
          Le rôle de chacun est detaillé ci-dessous.
        </CardContent>
      </Card>
      <Accordion type="single" className="w-full" collapsible>
        {informations.map((info) => (
          <AccordionItem
            value={info.name ?? ""}
            className="bg-background px-4"
            key={info.name}
          >
            <AccordionTrigger className="flex flex-row text-left text-sm hover:no-underline lg:text-base">
              <p className="w-1/3">
                {info.icon} {info.name}
              </p>
              <p className="w-2/3 text-muted-foreground dark:text-secondary-foreground">
                {info.description}
              </p>
            </AccordionTrigger>
            <AccordionContent className=" flex w-full flex-col gap-4 px-2 md:px-4">
              <p className="text-base">{info.content}</p>
              {info.code ? (
                <div
                  dangerouslySetInnerHTML={{ __html: info.code }}
                  className="prose w-full max-w-none dark:prose-invert"
                />
              ) : undefined}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default HelpSection
