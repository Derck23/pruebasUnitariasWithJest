import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import e from "express";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js }, extends: [js.configs.recommended],
    languageOptions: { globals : {
      ...globals.browser,  
      ...globals.node,
      ...globals.jest
    }}},
  { files: ["**/*.ts", "**/*.tsx"], languageOptions: { sourceType: "module"} }
]);
