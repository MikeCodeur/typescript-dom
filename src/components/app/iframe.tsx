"use client"

import React, { useEffect, useState } from "react"

import { IFRAME_ELEMENT_ID } from "@/common/constants"
import { cn } from "@/lib/utils"
import { createPortal } from "react-dom"

type IframeProps = {
  props?: React.HTMLProps<HTMLIFrameElement>
  children: React.ReactNode
  className?: string
  isFullScreen?: boolean
}

const Iframe = ({
  children,
  isFullScreen = false,
  className,
  ...props
}: IframeProps) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>()
  const mountNode = contentRef?.contentWindow?.document?.body
  const headNode = contentRef?.contentWindow?.document?.head

  //   if (mountNode) {
  //     mountNode.className = className ?? ""
  //   }
  // }, [headNode, mountNode, className])

  useEffect(() => {
    if (headNode) {
      const styles = `
      body {
        display:flex;
        flex-direction:column;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
        justify-content: center;
        align-items: center;
      }
      `
      const styleElement = document.createElement("style")
      styleElement.innerHTML = styles
      headNode.appendChild(styleElement)
    }
    if (mountNode) {
      mountNode.className = className ?? ""
    }
  }, [headNode])

  return (
    // <div className="min-h-[100vh] min-w-full overflow-y-auto">
    <iframe
      {...props}
      ref={setContentRef}
      className={cn(
        "w-full bg-white",
        isFullScreen ? "min-h-[100vh]" : "min-h-[calc(100vh-236px)] pb-8"
      )}
      suppressHydrationWarning
      id={IFRAME_ELEMENT_ID}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
    // </div>
  )
}

export default Iframe
