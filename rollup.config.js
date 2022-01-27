import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from '@rollup/plugin-image';

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: "components/index.ts",
  external: [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {})
  ],  
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: 'inline'
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: 'inline'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ 
        tsconfig: "./tsconfig.rollup.json",
        useTsconfigDeclarationDir: true,
        declaration: true,
        declarationDir: 'dist',
    }),
    postcss({
        config: {
            path: "./postcss.config.js"
          },
        extensions: ['.css']
    }),
    image(),
  ]
};