---
"@impulse-ui-native/charts": patch
---

Keep chart selection stable across drag gaps and finger release. Clear only on
an empty-space tap, preserve selection when toggling legends, and retain native
touch ownership so dragging an interactive chart does not scroll its parent.
