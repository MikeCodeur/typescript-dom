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
          "m-0 flex h-auto min-h-[100vh] w-full flex-col items-center justify-center overflow-y-auto p-0 bg-white"
        }
      >
        <div
          id="root"
          className="reset-tailwind"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {typeof Content === "string" && (
            <div dangerouslySetInnerHTML={{ __html: Content }} />
          )}
          {typeof Content === "function" && <Content />}
          {typeof Content === "object" && <>{Content}</>}
        </div>
      </div>
    )
  )
}

export default PracticeContent
