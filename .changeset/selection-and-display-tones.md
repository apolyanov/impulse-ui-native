---
"@impulse-ui-native/theme": major
"@impulse-ui-native/primitives": major
"@impulse-ui-native/checkbox": minor
"@impulse-ui-native/radio": minor
"@impulse-ui-native/switch": minor
"@impulse-ui-native/segmented-control": minor
"@impulse-ui-native/slider": minor
"@impulse-ui-native/storybook": minor
---

Add neutral, primary, and secondary tones to Avatar, Checkbox, Radio, Switch,
SegmentedControl, Slider, and RangeSlider. Preserve primary defaults, value
behavior, and neutral disabled appearances. SegmentedControl items inherit tone
from their Root; slider tracks, thumbs, marks, labels, and bubbles share tone.

Rename Tag color to tone and TagColor/TagColorTokens to TagTone/TagToneTokens.
Add neutral tags and retain the existing brand and feedback palettes.

Custom avatar, checkbox, radio, switch, segmentedControl, and slider appearance
tokens move from variants[variant] to explicit colors[tone][variant] maps.
