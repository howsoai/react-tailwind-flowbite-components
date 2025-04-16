import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json" with { type: "json" };

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/index.ts",
  // preserveModules: true,
  plugins: [
    typescript({
      noEmitOnError: true,
      tsconfig: "./tsconfig.build.json",
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: "styles.css",
      minimize: true,
      modules: true,
    }),
    terser(), // minifies generated bundles
  ],
  external: [
    "react/jsx-runtime",
    "react-icons/fa",
    "react-icons/fa",
    "react-icons/fa6",
    "react-icons/hi",
    "react-icons/hi2",
    "react-icons/gi",
    "react-icons/ri",
    "react-icons/si",
    "react-icons/tb",
    "@floating-ui/react",
    "react-router-dom",
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.optionalDependencies || {}),
  ],
  output: [
    {
      file: "lib/index.cjs",
      format: "cjs",
    },
    {
      file: "lib/index.esm.js",
      format: "es",
    },
  ],
};
