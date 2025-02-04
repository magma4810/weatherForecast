import globals from "globals";
import pluginJs from "@eslint/js";
/** @type {import('eslint').Linter.Config} */
const config = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.jest,
    },
  },
  rules: {},
};

export default [config, pluginJs.configs.recommended];
