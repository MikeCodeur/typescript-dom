"use client"

import { IFRAME_ELEMENT_ID } from "@/common/constants"
import React, { useEffect, useState } from "react"

import { createPortal } from "react-dom"

type IframeProps = {
  props?: React.HTMLProps<HTMLIFrameElement>
  children: React.ReactNode
  className?: string
}

const Iframe = ({ children, className, ...props }: IframeProps) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>()
  const mountNode = contentRef?.contentWindow?.document?.body
  const headNode = contentRef?.contentWindow?.document?.head

  useEffect(() => {
    if (headNode) {
      headNode.innerHTML = document.head.innerHTML
    }
    if (mountNode) {
      mountNode.className = className ?? ""
    }
  }, [headNode, mountNode, className])
  return (
    <div className="grid h-auto min-h-[500px] min-w-full overflow-y-auto text-foreground md:h-[calc(100vh-236px)]">
      <iframe
        {...props}
        ref={setContentRef}
        className="h-full w-full"
        suppressHydrationWarning
        id={IFRAME_ELEMENT_ID}
      >
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    </div>
  )
}

export default Iframe
