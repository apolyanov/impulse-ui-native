---
"@impulse-ui-native/primitives": minor
"@impulse-ui-native/overlay": minor
"@impulse-ui-native/data-state": major
"@impulse-ui-native/theme": patch
"@impulse-ui-native/icon": patch
"@impulse-ui-native/datetime": patch
"@impulse-ui-native/select": patch
"@impulse-ui-native/card": patch
"@impulse-ui-native/list": patch
"@impulse-ui-native/checkbox": patch
"@impulse-ui-native/radio": patch
"@impulse-ui-native/switch": patch
"@impulse-ui-native/stepper": patch
"@impulse-ui-native/tabs": patch
"@impulse-ui-native/progress": patch
"@impulse-ui-native/modal": patch
"@impulse-ui-native/toast": patch
"@impulse-ui-native/echo": patch
---

Add shared Control.Field, Control.Trigger, and Control.Icon composition and
shared overlay timing. Reuse picker draft handling, preserve calendar clipping,
and remove redundant wrappers, memoization, style flattening, and icon variant
map construction. Correct style-prop caching and retain compatible date-guard
aliases. Remove legacy text, variant, action, isEmpty, and error props from EmptyView
and ErrorView. These standalone containers now accept only View props, children,
and contentContainerStyle; use DataView for state selection and configured
details.
