---
"@impulse-ui-native/flyout": patch
---

Separate drag-context, lifecycle, and keyboard-frame types from implementations;
use named lifecycle contracts instead of deriving surface props from the hook.
Reuse the theme placement type and name gesture dismissal constants. Wait for
valid layout measurements before applying keyboard avoidance, preserve authored
padding while avoidance is inactive, and clarify package metadata and errors.
