"use client"

import React, { useEffect, useState } from "react"

import { IFRAME_ELEMENT_ID } from "@/common/constants"
import { createPortal } from "react-dom"

type IframeProps = {
  props?: React.HTMLProps<HTMLIFrameElement>
  children?: React.ReactNode
  className?: string
  url: string
}

const Iframe = ({ children, url, className, ...props }: IframeProps) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>()
  const mountNode = contentRef?.contentWindow?.document?.body
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <iframe
      {...props}
      ref={setContentRef}
      className="min-h-[calc(100vh-236px)] w-full bg-white pb-8"
      suppressHydrationWarning
      src={url}
      id={IFRAME_ELEMENT_ID}
    >
      {isClient && mountNode && createPortal(children, mountNode)}
    </iframe>
  )
}

export default Iframe
