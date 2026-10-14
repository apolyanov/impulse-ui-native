---
"@impulse-ui-native/charts": minor
"@impulse-ui-native/storybook": patch
"@impulse-ui-native/theme": minor
---

Add shared native chart selection, tooltips, toggleable legends, empty content,
stacked bars, and horizontal bar orientation. Keep line geometry aligned with
axes, infer line scales, normalize degenerate domains, stabilize chart colors by
ID, and prevent pie sums from collapsing large finite values. Add model and hit
testing coverage and native Storybook examples.

Unify chart frame setup, axes, appearance tokens, typography, swatches, and Card
tooltips. Reuse shared native primitives, numeric scales, ticks, and bar geometry;
avoid style-driven geometry recalculation and redundant stack work. Add an
architecture/reuse map and light/dark chart comparison galleries.
