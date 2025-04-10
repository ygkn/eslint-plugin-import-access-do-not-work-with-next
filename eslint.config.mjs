import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import importAccess from "eslint-plugin-import-access/flat-config";
import typescriptEslintParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: true,
        sourceType: "module",
      },
    },
  },
  {
    plugins: {
      "import-access": importAccess,
    },
  },
  {
    rules: {
      "import-access/jsdoc": [
        "error",
        {
          defaultImportability: "package",
        },
      ],
    },
  },
];

export default eslintConfig;
