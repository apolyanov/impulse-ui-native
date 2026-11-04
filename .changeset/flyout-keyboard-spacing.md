---
"@impulse-ui-native/theme": minor
"@impulse-ui-native/flyout": patch
---

Add components.flyout.keyboardOffset, sourced from space.xs (8 logical units),
as the default gap during keyboard avoidance. The gap follows keyboard animation
progress and disappears when closed. An explicit keyboardOffset prop overrides
the token, including zero to remove the gap.
