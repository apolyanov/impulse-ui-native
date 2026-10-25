---
"@impulse-ui-native/theme": major
"@impulse-ui-native/primitives": minor
"@impulse-ui-native/storybook": minor
---

Add neutral, primary, and secondary tones to Button and IconButton across all
four action variants. Keep primary as the default with the existing appearances,
use neutral disabled tokens, and inherit the selected foreground in loading spinners.

Custom button and iconButton appearance tokens move from variants[variant][state]
to explicit colors[tone][variant][state] maps.
