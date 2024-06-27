import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

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
		copy({
			targets: [{ src: "public/*", dest: "dist" }],
		}),
	],
};
