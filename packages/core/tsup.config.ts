import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  format: ["esm"],
  sourcemap: true,
  clean: true,
  target: "es2020",
  outExtension: () => ({ js: ".js" }),
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
    "react-native-worklets",
  ],
});
