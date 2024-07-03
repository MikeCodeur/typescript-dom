"use client"

import React, { ComponentType, useEffect, useState } from "react"

const PracticeContent = ({
  Content,
}: {
  Content: ComponentType<object> | JSX.Element | string
}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    isClient && (
      <div
        className={
          "m-0 flex h-auto min-h-[100vh] flex-col items-center justify-center overflow-y-auto bg-white p-0"
        }
      >
        <div className="w-full max-w-5xl">
          <div id="root" className="reset-tailwind">
            {typeof Content === "string" && (
              <div dangerouslySetInnerHTML={{ __html: Content }} />
            )}
            {typeof Content === "function" && <Content />}
            {typeof Content === "object" && <>{Content}</>}
          </div>
        </div>
      </div>
    )
  )
}

export default PracticeContent
