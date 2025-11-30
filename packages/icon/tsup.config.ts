import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  format: ["esm", "cjs"],
  minify: true,
  sourcemap: true,
  clean: true,
  target: "es2020",
  outExtension({ format }) {
    return { js: format === "cjs" ? ".cjs.js" : ".esm.js" };
  },
  external: [
    "react",
    "react-native",
    "expo",
    "expo-constants",
    "expo-modules-core",
    "@expo/vector-icons",
    "@expo/*",
    "react-native-gesture-handler",
    "react-native-reanimated",
    "react-native-safe-area-context",
    "react-native-svg",
    "@impulse-ui-native/*",
  ],
});
