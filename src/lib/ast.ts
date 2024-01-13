import rehypeFormat from "rehype-format"
import rehypeParse from "rehype-parse"
import rehypePrism from "rehype-prism-plus"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

export async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown)

  return String(file)
}

export async function sanitizeHtml(html: string) {
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeStringify)
    .process(html)

  return String(file)
}
