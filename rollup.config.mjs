import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

export default [
  {
    onwarn: function (message) {
      if (
        message.code === "CIRCULAR_DEPENDENCY" ||
        (message.code === "MODULE_LEVEL_DIRECTIVE" &&
          message.message.includes('"use client"'))
      ) {
        return;
      }
      console.error(message);
    },
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
  },
];
