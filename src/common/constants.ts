export const MODULE_NAME = "React Patterns" as const
export const PERSON_NAME = "Mike Codeur" as const
export const EXERCISE = "exercise" as const
export const SOLUTION = "final" as const
export const DIRECTORY = {
  EXERCISE,
  SOLUTION,
} as const

export const DIRECTORY_PATH = {
  app: "app",
  default: "default",
} as const

const BASE_DIRECTORY = "src" as const

const PRACTICE_DIRECTORY = {
  app: `${BASE_DIRECTORY}/${DIRECTORY_PATH.app}`,
  default: BASE_DIRECTORY,
} as const
export const EXERCISE_DIRECTORY = {
  app: `${PRACTICE_DIRECTORY.app}/${DIRECTORY.EXERCISE}`,
  default: `${PRACTICE_DIRECTORY.default}/${DIRECTORY.EXERCISE}`,
} as const

export const SOLUTION_DIRECTORY = {
  app: `${PRACTICE_DIRECTORY.app}/${DIRECTORY.SOLUTION}`,
  default: `${PRACTICE_DIRECTORY.default}/${DIRECTORY.SOLUTION}`,
} as const

export const ROUTES = {
  HOME: "/",
  COURSE: "/courses",
  ALONE: {
    EXERCISE: "/alone/exercise",
    SOLUTION: "/alone/solution",
  },
} as const

export const EXTENSIONS = {
  js: "js",
  jsx: "jsx",
  ts: "ts",
  tsx: "tsx",
  html: "html",
  md: "md",
  png: "png",
} as const

export const extensionsWithContent = [EXTENSIONS.html, EXTENSIONS.md] as const
export const extensionsWithNoContent = [
  EXTENSIONS.js,
  EXTENSIONS.jsx,
  EXTENSIONS.ts,
  EXTENSIONS.tsx,
  EXTENSIONS.png,
] as const

export const extensions = [
  ...extensionsWithContent,
  ...extensionsWithNoContent,
] as const
