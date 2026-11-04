---
"@impulse-ui-native/flyout": patch
---

Keep the final offscreen translation and measured height after exit completion
until the sheet unmounts. Prepare fresh geometry on the next opening instead of
resetting a still-mounted native view to its visible position.
