import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "src/main.ts",
	output: {
		file: "dist/bundle.js",
	},

	plugins: [
		nodeResolve({ browser: true }),
		terser(),
		typescript(),
		resolve(),
		commonjs(),
	],
};
