---
"@impulse-ui-native/flyout": patch
---

Infer the compound Flyout API directly from Object.assign. Name the keyboard-aware
view's component type at its declaration boundary so native refs remain portable
without duplicating the compound member map.
