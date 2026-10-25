---
"@impulse-ui-native/theme": major
"@impulse-ui-native/primitives": minor
"@impulse-ui-native/progress": patch
"@impulse-ui-native/tabs": minor
"@impulse-ui-native/pagination": minor
"@impulse-ui-native/carousel": minor
"@impulse-ui-native/stepper": minor
"@impulse-ui-native/select": patch
"@impulse-ui-native/datetime": patch
"@impulse-ui-native/data-state": minor
"@impulse-ui-native/color-picker": minor
"@impulse-ui-native/toast": patch
"@impulse-ui-native/storybook": minor
---

Unify repository tone semantics and add tone inheritance to navigation, composed
pickers, Select options/tags, DataView actions/loaders, and ColorPicker controls.
Correct Progress secondary/neutral colors, add neutral/secondary Divider tones,
and make Toast actions follow their feedback tone. Preserve data colors, neutral
surfaces, value semantics, custom overrides, and existing inverse loading tones.

Move remaining scalar/state-only color tokens into explicit tone maps. Custom theme
paths for navigation, picker interiors, Select options, DataState icons, swatch rings,
and Toast action colors must be migrated as documented in the package READMEs.
