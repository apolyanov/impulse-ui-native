---
"@impulse-ui-native/primitives": major
"@impulse-ui-native/storybook": patch
---

Divider now defaults to primary; set tone="subtle" to retain its previous appearance.
Document role-based defaults: fields use medium / outlined / neutral, while buttons
and accent controls use medium / filled / primary. Nested field parts inherit their
root tone. Explicit props, shape variants, and feedback-only tones retain precedence.
