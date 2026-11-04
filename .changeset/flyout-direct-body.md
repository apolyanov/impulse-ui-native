---
"@impulse-ui-native/flyout": major
"@impulse-ui-native/select": patch
"@impulse-ui-native/datetime": patch
---

Render Flyout body children directly instead of inserting Content. Existing static
bodies must use Flyout.Content explicitly to retain padding. Add Flyout.ScrollView
with native props/ref and themed content padding. Constrain the whole sheet and
update dismissal measurements after resizing. Migrate Select and picker bodies.

Simplify Root to one animated pressable backdrop and one animated sheet with safe-area padding. Handle inherits Root placement; remove its redundant placement prop. Keep measured height in a shared value, honor offsets during exit, and remove redundant body wrappers from built-in consumers.

Initialize the hidden sheet from its first layout instead of passing screen dimensions into its animation lifecycle. Read animation tokens in the lifecycle hook directly.
