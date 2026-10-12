---
"@impulse-ui-native/color-picker": minor
"@impulse-ui-native/theme": minor
"@impulse-ui-native/slider": minor
"@impulse-ui-native/toolkit": minor
"@impulse-ui-native/storybook": minor
---

Add a modular native ColorPicker with saturation/brightness spectrum, hue and alpha sliders, hex/RGB/opacity entry, theme presets, controlled/uncontrolled selection, and staged Apply/Cancel behavior. Add component tokens and toolkit exports. Slider now accepts custom track content and uses a tokenized minimum interaction height.

Render gradient transparency with explicit stop opacity. Activate spectrum drags on touch-down with Gesture Handler on the UI thread so parent native scrolling cannot interrupt color selection. The color picker requires Gesture Handler, Reanimated, Worklets, and GestureHandlerRootView.

Allow customizing the preset palette heading through presetsLabel, defaulting to "Theme colors", and hiding the entire preset section with showPresets={false}.

Expose dedicated color-picker tokens for internal spacing, field proportions, surface radii, swatch rings and checkmark sizes, and spectrum indicator borders and shadows. Preserve the default appearance while allowing independent customization.
