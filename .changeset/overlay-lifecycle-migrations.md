---
"@impulse-ui-native/flyout": minor
"@impulse-ui-native/toast": patch
---

Migrate Flyout and Toast to the shared overlay lifecycle while retaining their
component-owned animations, measurement, gestures, and duration timers. Flyout
requires Reanimated 4 and enables dragging after entry completes.
