import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,md}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "pre,code": {
              background: "hsl(var(--code-background))",
              color: "hsl(var(--pre-color))",
              fontWeight: "normal",
            },
            'code[class*="language-"],pre[class*="language-"]': {
              fontFamily: "hsl(var(--markdown-font))",
              direction: "ltr",
              textAlign: "left",
              whiteSpace: "pre-wrap",
              wordSpacing: "normal",
              wordBreak: "normal",
              lineHeight: "1.5",

              mozTabSize: "4",
              oTabSize: "4",
              tabSize: "4",

              WebkitHyphens: "none",
              MozHyphens: "none",
              msHyphens: "none",
              hyphens: "none",
            },
            /* Code blocks */
            pre: {
              padding: "1em",
              margin: "0.5em 0",
              overflow: "auto",
            },
            "not(pre) > code,pre": {
              background: "hsl(var(--code-background))",
              color: "hsl(var(--pre-color))",
              fontWeight: "normal",
            },
            'pre[class*="language-"]': {
              padding: "1em",
              margin: "0.5em 0",
              overflow: "auto",
              borderRadius: "0.3rem",
            },
            /* Inline code */
            'not(pre) > code[class*="language-"]': {
              background: "hsl(var(--code-background))",
            },
            ".namespace": {
              color: "hsl(var(--namespace-color))",
            },
            //token
            ".token.comment,.token.prolog,.token.cdata": {
              color: "hsl(var(--token-comment-like))",
            },
            ".token.doctype": {
              color: "hsl(var(--token-doctype))",
            },
            ".token.punctuation": {
              color: "hsl(var(--token-punctuation))",
            },
            "dark .namespace": {
              opacity: "0.7",
            },
            ".token.property": {
              color: "hsl(var(--token-property))",
            },
            ".token.keyword": {
              color: "hsl(var(--token-keyword))",
            },
            ".token.tag": {
              color: "hsl(var(--token-tag))",
            },
            ".token.class-name": {
              color: "hsl(var(--token-classname))",
            },
            ".token.boolean": {
              color: "hsl(var(--token-boolean))",
            },
            ".token.constant": {
              color: "hsl(var(--token-constant))",
            },
            ".token.deleted": {
              color: "hsl(var(--token-deleted))",
            },
            ".token.symbol": {
              color: "hsl(var(--token-symbol))",
            },
            ".token.number": {
              color: "hsl(var(--token-number))",
            },
            ".token.selector": {
              color: "hsl(var(--token-selector))",
            },
            ".token.attr-name": {
              color: "hsl(var(--token-attr-name))",
            },
            ".token.string": {
              color: "hsl(var(--token-string))",
            },
            ".token.char": {
              color: "hsl(var(--token-char))",
            },
            ".token.builtin": {
              color: "hsl(var(--token-builtin))",
            },
            ".token.inserted": {
              color: "hsl(var(--token-inserted))",
            },
            ".token.variable": {
              color: "hsl(var(--token-variable))",
            },
            ".token.operator": {
              color: "hsl(var(--token-operator))",
            },
            ".token.entity": {
              color: "hsl(var(--token-entity))",
              cursor: "help",
            },
            ".token.url": {
              color: "hsl(var(--token-url))",
            },
            ".language-css .token.string, .style .token.string": {
              color: "hsl(var(--token-language))",
            },
            ".token.atrule": {
              color: "hsl(var(--token-atrule))",
            },
            ".token.attr-value": {
              color: "hsl(var(--token-attr-value))",
            },
            ".token.function": {
              color: "hsl(var(--token-function))",
            },
            ".token.regex": {
              color: "hsl(var(--token-regex))",
            },
            ".token.important": {
              color: "hsl(var(--token-important))",
            },
            ".token.bold, .token.important": {
              fontWeight: "bold",
            },
            ".token.italic": {
              fontStyle: "italic",
            },
          },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
} satisfies Config

export default config
