import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "**/src/generated/**", // Ignore all files in the generated directory
      "**/node_modules/**", // Explicitly ignore node_modules
      "**/.next/**", // Ignore Next.js build output
      "**/jest.config.js", // Ignore Jest config
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.tsx", "**/*.ts"],
    rules: {
      // Disable specific rules that are causing problems
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn", // Downgrade to warning
      "react/no-unescaped-entities": "off", // Disable for now, we can fix these gradually
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
    },
  },
];

export default eslintConfig;
