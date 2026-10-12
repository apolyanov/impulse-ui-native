---
"@impulse-ui-native/color-picker": patch
"@impulse-ui-native/slider": patch
"@impulse-ui-native/switch": patch
"@impulse-ui-native/progress": patch
"@impulse-ui-native/pagination": patch
"@impulse-ui-native/scroll-view": patch
"@impulse-ui-native/primitives": patch
"@impulse-ui-native/storybook": patch
"@impulse-ui-native/theme": major
---

Remove unsupported right-to-left mirroring from color selection, sliders, switches, progress indicators, pagination arrows, and initial scroll reveal calculations. Use left-to-right behavior consistently and remove RTL support claims from current documentation.

Remove the typography writingDirection style prop.
