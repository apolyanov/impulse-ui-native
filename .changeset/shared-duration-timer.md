---
"@impulse-ui-native/core": minor
"@impulse-ui-native/toast": patch
"@impulse-ui-native/popover": patch
---

Add a shared one-shot useTimer hook with cancellation and optional native background pausing. Reuse it for Toast and Tooltip dismissal, and prevent completed timers from restarting on foregrounding.
