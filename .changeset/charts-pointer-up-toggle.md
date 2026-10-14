---
"@impulse-ui-native/charts": patch
---

Finish chart taps from pointer-up events instead of requiring an ACTIVE pan-end
callback. Track movement from pointer events too, preserving drag behavior when
a pan has not activated. Add callback-sequence regression coverage for repeated
clicks, empty clicks, dragging, and cancellation.
