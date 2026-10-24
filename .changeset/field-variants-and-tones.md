---
"@impulse-ui-native/theme": major
"@impulse-ui-native/primitives": minor
"@impulse-ui-native/input": minor
"@impulse-ui-native/select": minor
"@impulse-ui-native/datetime": minor
"@impulse-ui-native/color-picker": minor
"@impulse-ui-native/storybook": minor
---

Add soft fields and neutral, primary, and secondary tones across text fields,
selects, date/time pickers, and ColorPicker inputs. Filled now uses a real tone
fill and paired foreground. Preserve outlined/neutral defaults and use neutral disabled appearances.

Custom field tokens move from variants[variant][state] to
colors[tone][variant][state] on controlContainer, controlInput, and controlAddon.
