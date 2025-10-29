import type { Config } from "prettier";

const config: Config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 70,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^react$",
    "<THIRD_PARTY_MODULES>",
    "^@/constants$",
    "^@/constants/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/(.*)$",
    "^@/lib/(.*)$",
    "^@/utils",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};

export default config;
