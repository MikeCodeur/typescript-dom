"use client"

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
    <iframe {...props} ref={setContentRef} className="h-screen w-full">
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  )
}

export default Iframe
