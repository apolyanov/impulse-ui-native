---
"@impulse-ui-native/modal": minor
"@impulse-ui-native/theme": minor
"@impulse-ui-native/toolkit": minor
"@impulse-ui-native/storybook": patch
---

Add Modal's OverlayComponentProps lifecycle for local Portal usage and global
OverlayHost registration. Root handles safe-area positioning, backdrop and Android
back dismissal, layered rendering, and cancelable entry/exit animations. Preserve
independent presentation parts and non-scrollable content, and add hosted title
composition and interactive documentation.
