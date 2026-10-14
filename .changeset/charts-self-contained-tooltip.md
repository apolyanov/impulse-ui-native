---
"@impulse-ui-native/charts": patch
"@impulse-ui-native/theme": patch
---

Make ChartTooltip self-contained using chart tooltip surface tokens and native
View props/style overrides. Remove the charts package's Card dependency. Add
optional tooltip surface, border, radius, color, padding, and gap tokens with
primitive-theme fallbacks for existing custom token objects.
