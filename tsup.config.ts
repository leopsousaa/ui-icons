import { nodeExternalsPlugin } from "esbuild-node-externals";
import { defineConfig } from "tsup";

defineConfig({
  entry: ["temp/index.ts"],
  platform: "node",
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  esbuildPlugins: [nodeExternalsPlugin()],
});
