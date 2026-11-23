---
"@impulse-ui-native/accordion": major
"@impulse-ui-native/charts": major
"@impulse-ui-native/color-picker": major
"@impulse-ui-native/data-state": major
"@impulse-ui-native/flyout": major
"@impulse-ui-native/modal": major
"@impulse-ui-native/overlay": major
"@impulse-ui-native/popover": major
"@impulse-ui-native/progress": major
"@impulse-ui-native/skeleton": major
"@impulse-ui-native/slider": major
"@impulse-ui-native/switch": major
"@impulse-ui-native/toast": major
"@impulse-ui-native/toolkit": major
"@impulse-ui-native/datetime": major
"@impulse-ui-native/select": major
"@impulse-ui-native/storybook": major
---

Correct native peer minimums: require Reanimated 4.1 with Worklets, propagate React Native floors through runtime dependencies, and require React 19 and Worklets 0.7 for Skia charts. Declare Storybook's direct animation tooling dependencies.

These constraints remove unsupported version combinations; native version pairing still requires platform build verification.
