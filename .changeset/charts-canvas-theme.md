---
"@impulse-ui-native/charts": patch
---

Pass the resolved app theme into bar, line, and pie canvas primitives instead of
reading theme context inside Skia's separate renderer. This prevents chart
rendering from throwing even when the app is wrapped in ThemeProvider.
