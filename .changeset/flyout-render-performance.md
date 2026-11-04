---
"@impulse-ui-native/flyout": patch
---

Separate drag and layout context subscriptions so gesture lifecycle changes do
not rerender the keyboard-aware body. Memoize the convenience header, prepare
opening geometry once per opening, and skip duplicate root/body layout writes
without suppressing consumer layout callbacks. Preserve theme/geometry updates
and the offscreen exit state until unmount.

Mount viewport/safe-area subscriptions only with the visible private surface, and
keep assembled presentation children stable across lifecycle callback updates.
