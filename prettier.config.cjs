/**
 * @type {import("prettier").Config}
 */
const config = {
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 80,
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["clsx"],
}

module.exports = config
