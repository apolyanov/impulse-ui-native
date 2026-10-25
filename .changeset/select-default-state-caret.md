---
"@impulse-ui-native/select": patch
---

Add a default trailing CaretDown to Select and MultiSelect, switching to CaretUp
while their flyout is open. Preserve custom Suffix/SuffixIcon overrides and loading
indicator precedence, using the shared Control.Icon composition and field colors.
