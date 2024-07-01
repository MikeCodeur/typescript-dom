type InstructionProps = {
  content: string
}
const Instruction = ({ content }: InstructionProps) => {
  return (
    <div className="w-full overflow-auto bg-foreground from-background to-foreground dark:bg-gradient-to-r lg:h-screen lg:w-1/2">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose w-full max-w-none p-8 pb-32 dark:prose-invert"
      />
    </div>
  )
}

export default Instruction
