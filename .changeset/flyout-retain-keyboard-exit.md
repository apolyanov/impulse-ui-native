---
"@impulse-ui-native/flyout": patch
---

Capture the expanded sheet height before close callbacks and retain keyboard body padding through dismissal. Ignore closing layout updates and release retained geometry on opening, preventing the sheet from collapsing to its pre-keyboard height before exit.
