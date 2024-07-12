import { fixupConfigRules, fixupPluginRules } from "@eslint/compat"
import _import from "eslint-plugin-import"
import globals from "globals"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...fixupConfigRules(
    compat.extends("eslint:recommended", "plugin:import/errors", "prettier"),
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 2019,
      sourceType: "module",
    },

    rules: {
      "react/prop-types": 0,
      "no-console": 1,
    },
  },
]
