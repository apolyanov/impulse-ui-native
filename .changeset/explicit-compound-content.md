---
"@impulse-ui-native/primitives": major
"@impulse-ui-native/accordion": major
"@impulse-ui-native/input": patch
"@impulse-ui-native/select": patch
"@impulse-ui-native/datetime": patch
"@impulse-ui-native/form-field": patch
"@impulse-ui-native/segmented-control": patch
"@impulse-ui-native/modal": patch
"@impulse-ui-native/toast": patch
"@impulse-ui-native/flyout": patch
---

Make Control.Addon, Control.Error, and Accordion.Trigger render supplied content.
Direct Control consumers must replace Addon's icon/Content props with children
and explicitly supply Error's text. Direct Accordion consumers must replace
Trigger's indicator/hideIndicator props with an optional Accordion.Indicator
containing their chosen icon or custom content. Indicator preserves expanded-state
rotation without generating a default chevron.

Update ready-made fields to assemble addon icons, loading content, and errors
explicitly while preserving their convenience props and appearance. Separate
context consumer hooks, context/theme/prop types, and static styles into focused
files, stabilize Control.Provider's context value, and clean up accordion
animations when their parts unmount.
