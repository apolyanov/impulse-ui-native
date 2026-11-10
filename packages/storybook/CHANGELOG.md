# @impulse-ui-native/storybook

## 17.1.0

### Patch Changes

- Updated dependencies [116963a]
  - @impulse-ui-native/primitives@17.1.0
  - @impulse-ui-native/card@17.1.0
  - @impulse-ui-native/color-picker@17.1.0
  - @impulse-ui-native/icon-view@17.1.0
  - @impulse-ui-native/list@17.1.0
  - @impulse-ui-native/icon@17.1.0
  - @impulse-ui-native/theme@17.1.0
  - @impulse-ui-native/progress@17.1.0
  - @impulse-ui-native/flat-list@17.1.0

## 17.0.0

### Patch Changes

- Updated dependencies [692223c]
- Updated dependencies [692223c]
- Updated dependencies [692223c]
  - @impulse-ui-native/primitives@17.0.0
  - @impulse-ui-native/theme@17.0.0
  - @impulse-ui-native/card@17.0.0
  - @impulse-ui-native/color-picker@17.0.0
  - @impulse-ui-native/icon-view@17.0.0
  - @impulse-ui-native/list@17.0.0
  - @impulse-ui-native/icon@17.0.0
  - @impulse-ui-native/progress@17.0.0
  - @impulse-ui-native/flat-list@17.0.0

## 16.0.0

### Patch Changes

- Updated dependencies [89cb141]
  - @impulse-ui-native/theme@16.0.0
  - @impulse-ui-native/card@16.0.0
  - @impulse-ui-native/color-picker@16.0.0
  - @impulse-ui-native/icon@16.0.0
  - @impulse-ui-native/icon-view@16.0.0
  - @impulse-ui-native/list@16.0.0
  - @impulse-ui-native/primitives@16.0.0
  - @impulse-ui-native/progress@16.0.0
  - @impulse-ui-native/flat-list@16.0.0

## 15.0.5

### Patch Changes

- @impulse-ui-native/icon@15.0.5
- @impulse-ui-native/primitives@15.0.5
- @impulse-ui-native/theme@15.0.5
- @impulse-ui-native/card@15.0.5
- @impulse-ui-native/list@15.0.5
- @impulse-ui-native/progress@15.0.5
- @impulse-ui-native/flat-list@15.0.5
- @impulse-ui-native/color-picker@15.0.5
- @impulse-ui-native/icon-view@15.0.5

## 15.0.4

### Patch Changes

- @impulse-ui-native/icon@15.0.4
- @impulse-ui-native/primitives@15.0.4
- @impulse-ui-native/theme@15.0.4
- @impulse-ui-native/card@15.0.4
- @impulse-ui-native/list@15.0.4
- @impulse-ui-native/progress@15.0.4
- @impulse-ui-native/flat-list@15.0.4
- @impulse-ui-native/color-picker@15.0.4
- @impulse-ui-native/icon-view@15.0.4

## 15.0.3

### Patch Changes

- Adding datepicker tone and variant props
- Updated dependencies
  - @impulse-ui-native/card@15.0.3
  - @impulse-ui-native/color-picker@15.0.3
  - @impulse-ui-native/flat-list@15.0.3
  - @impulse-ui-native/icon@15.0.3
  - @impulse-ui-native/icon-view@15.0.3
  - @impulse-ui-native/list@15.0.3
  - @impulse-ui-native/primitives@15.0.3
  - @impulse-ui-native/progress@15.0.3
  - @impulse-ui-native/theme@15.0.3

## 15.0.2

### Patch Changes

- 3cda01d: Propagate picker variants through portal flyouts into month/year Select fields,
  nested time pickers, quick-date tags, and Cancel/Apply buttons. Preserve the field
  default outlined / neutral and existing calendar/time-wheel selection states.
  - @impulse-ui-native/icon@15.0.2
  - @impulse-ui-native/primitives@15.0.2
  - @impulse-ui-native/theme@15.0.2
  - @impulse-ui-native/card@15.0.2
  - @impulse-ui-native/list@15.0.2
  - @impulse-ui-native/progress@15.0.2
  - @impulse-ui-native/flat-list@15.0.2
  - @impulse-ui-native/color-picker@15.0.2
  - @impulse-ui-native/icon-view@15.0.2

## 15.0.1

### Patch Changes

- 2f12c26: Default Divider to the standard border tone ("default") instead of primary.
  Align Storybook defaults and design guidance.
- Updated dependencies [2f12c26]
  - @impulse-ui-native/primitives@15.0.1
  - @impulse-ui-native/card@15.0.1
  - @impulse-ui-native/color-picker@15.0.1
  - @impulse-ui-native/icon-view@15.0.1
  - @impulse-ui-native/list@15.0.1
  - @impulse-ui-native/icon@15.0.1
  - @impulse-ui-native/theme@15.0.1
  - @impulse-ui-native/progress@15.0.1
  - @impulse-ui-native/flat-list@15.0.1

## 15.0.0

### Minor Changes

- 5819eb6: Unify repository tone semantics and add tone inheritance to navigation, composed
  pickers, Select options/tags, DataView actions/loaders, and ColorPicker controls.
  Correct Progress secondary/neutral colors, add neutral/secondary Divider tones,
  and make Toast actions follow their feedback tone. Preserve data colors, neutral
  surfaces, value semantics, custom overrides, and existing inverse loading tones.

  Move remaining scalar/state-only color tokens into explicit tone maps. Custom theme
  paths for navigation, picker interiors, Select options, DataState icons, swatch rings,
  and Toast action colors must be migrated as documented in the package READMEs.

### Patch Changes

- 5819eb6: Use soft selected tags inside filled MultiSelect fields to separate them from the
  field background while preserving tone. Disabled tags use outlined borders.
  Add a filled MultiSelect story with selected values.
- 5819eb6: Divider now defaults to primary; set tone="subtle" to retain its previous appearance.
  Document role-based defaults: fields use medium / outlined / neutral, while buttons
  and accent controls use medium / filled / primary. Nested field parts inherit their
  root tone. Explicit props, shape variants, and feedback-only tones retain precedence.
- Updated dependencies [5819eb6]
- Updated dependencies [5819eb6]
- Updated dependencies [5819eb6]
  - @impulse-ui-native/theme@15.0.0
  - @impulse-ui-native/primitives@15.0.0
  - @impulse-ui-native/progress@15.0.0
  - @impulse-ui-native/color-picker@15.0.0
  - @impulse-ui-native/card@15.0.0
  - @impulse-ui-native/icon@15.0.0
  - @impulse-ui-native/icon-view@15.0.0
  - @impulse-ui-native/list@15.0.0
  - @impulse-ui-native/flat-list@15.0.0

## 14.1.1

### Patch Changes

- Updated dependencies [a92c256]
  - @impulse-ui-native/theme@14.1.1
  - @impulse-ui-native/card@14.1.1
  - @impulse-ui-native/color-picker@14.1.1
  - @impulse-ui-native/icon@14.1.1
  - @impulse-ui-native/icon-view@14.1.1
  - @impulse-ui-native/list@14.1.1
  - @impulse-ui-native/primitives@14.1.1
  - @impulse-ui-native/progress@14.1.1
  - @impulse-ui-native/flat-list@14.1.1

## 14.1.0

### Minor Changes

- e1f7160: Share ViewStyleProps between View and Pressable so Pressable accepts every direct
  styling prop supported by View, including colors, opacity, borders, and radii.
  Preserve native style callbacks, pressedStyle precedence, and interaction feedback.

### Patch Changes

- Updated dependencies [e1f7160]
  - @impulse-ui-native/primitives@14.1.0
  - @impulse-ui-native/card@14.1.0
  - @impulse-ui-native/color-picker@14.1.0
  - @impulse-ui-native/icon-view@14.1.0
  - @impulse-ui-native/list@14.1.0
  - @impulse-ui-native/icon@14.1.0
  - @impulse-ui-native/theme@14.1.0
  - @impulse-ui-native/progress@14.1.0
  - @impulse-ui-native/flat-list@14.1.0

## 14.0.0

### Minor Changes

- 1bd67d1: Add neutral, primary, and secondary tones to Avatar, Checkbox, Radio, Switch,
  SegmentedControl, Slider, and RangeSlider. Preserve primary defaults, value
  behavior, and neutral disabled appearances. SegmentedControl items inherit tone
  from their Root; slider tracks, thumbs, marks, labels, and bubbles share tone.

  Rename Tag color to tone and TagColor/TagColorTokens to TagTone/TagToneTokens.
  Add neutral tags and retain the existing brand and feedback palettes.

  Custom avatar, checkbox, radio, switch, segmentedControl, and slider appearance
  tokens move from variants[variant] to explicit colors[tone][variant] maps.

### Patch Changes

- Updated dependencies [1bd67d1]
  - @impulse-ui-native/theme@14.0.0
  - @impulse-ui-native/primitives@14.0.0
  - @impulse-ui-native/card@14.0.0
  - @impulse-ui-native/color-picker@14.0.0
  - @impulse-ui-native/icon@14.0.0
  - @impulse-ui-native/icon-view@14.0.0
  - @impulse-ui-native/list@14.0.0
  - @impulse-ui-native/progress@14.0.0
  - @impulse-ui-native/flat-list@14.0.0

## 13.0.0

### Minor Changes

- 8220ce3: Add neutral, primary, and secondary tones to Button and IconButton across all
  four action variants. Keep primary as the default with the existing appearances,
  use neutral disabled tokens, and inherit the selected foreground in loading spinners.

  Custom button and iconButton appearance tokens move from variants[variant][state]
  to explicit colors[tone][variant][state] maps.

### Patch Changes

- Updated dependencies [8220ce3]
- Updated dependencies [8220ce3]
  - @impulse-ui-native/theme@13.0.0
  - @impulse-ui-native/primitives@13.0.0
  - @impulse-ui-native/card@13.0.0
  - @impulse-ui-native/color-picker@13.0.0
  - @impulse-ui-native/icon@13.0.0
  - @impulse-ui-native/icon-view@13.0.0
  - @impulse-ui-native/list@13.0.0
  - @impulse-ui-native/progress@13.0.0
  - @impulse-ui-native/flat-list@13.0.0

## 12.0.0

### Minor Changes

- 0226bfb: Add soft fields and neutral, primary, and secondary tones across text fields,
  selects, date/time pickers, and ColorPicker inputs. Filled now uses a real tone
  fill and paired foreground. Preserve outlined/neutral defaults and use neutral disabled appearances.

  Custom field tokens move from variants[variant][state] to
  colors[tone][variant][state] on controlContainer, controlInput, and controlAddon.

### Patch Changes

- Updated dependencies [0226bfb]
  - @impulse-ui-native/theme@12.0.0
  - @impulse-ui-native/primitives@12.0.0
  - @impulse-ui-native/color-picker@12.0.0
  - @impulse-ui-native/card@12.0.0
  - @impulse-ui-native/icon@12.0.0
  - @impulse-ui-native/icon-view@12.0.0
  - @impulse-ui-native/list@12.0.0
  - @impulse-ui-native/progress@12.0.0
  - @impulse-ui-native/flat-list@12.0.0

## 11.4.0

### Patch Changes

- Updated dependencies [c0f3119]
  - @impulse-ui-native/theme@11.4.0
  - @impulse-ui-native/card@11.4.0
  - @impulse-ui-native/color-picker@11.4.0
  - @impulse-ui-native/icon@11.4.0
  - @impulse-ui-native/icon-view@11.4.0
  - @impulse-ui-native/list@11.4.0
  - @impulse-ui-native/primitives@11.4.0
  - @impulse-ui-native/progress@11.4.0
  - @impulse-ui-native/flat-list@11.4.0

## 11.3.2

### Patch Changes

- @impulse-ui-native/icon@11.3.2
- @impulse-ui-native/primitives@11.3.2
- @impulse-ui-native/theme@11.3.2
- @impulse-ui-native/card@11.3.2
- @impulse-ui-native/list@11.3.2
- @impulse-ui-native/progress@11.3.2
- @impulse-ui-native/flat-list@11.3.2
- @impulse-ui-native/color-picker@11.3.2
- @impulse-ui-native/icon-view@11.3.2

## 11.3.1

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/primitives@11.3.1
  - @impulse-ui-native/card@11.3.1
  - @impulse-ui-native/color-picker@11.3.1
  - @impulse-ui-native/icon-view@11.3.1
  - @impulse-ui-native/list@11.3.1
  - @impulse-ui-native/icon@11.3.1
  - @impulse-ui-native/theme@11.3.1
  - @impulse-ui-native/progress@11.3.1
  - @impulse-ui-native/flat-list@11.3.1

## 11.3.0

### Patch Changes

- Updated dependencies [e90e036]
- Updated dependencies [eea2aca]
  - @impulse-ui-native/icon-view@11.3.0
  - @impulse-ui-native/theme@11.3.0
  - @impulse-ui-native/primitives@11.3.0
  - @impulse-ui-native/card@11.3.0
  - @impulse-ui-native/color-picker@11.3.0
  - @impulse-ui-native/icon@11.3.0
  - @impulse-ui-native/list@11.3.0
  - @impulse-ui-native/progress@11.3.0
  - @impulse-ui-native/flat-list@11.3.0

## 11.2.0

### Patch Changes

- Updated dependencies [5c30476]
  - @impulse-ui-native/primitives@11.2.0
  - @impulse-ui-native/card@11.2.0
  - @impulse-ui-native/color-picker@11.2.0
  - @impulse-ui-native/list@11.2.0
  - @impulse-ui-native/icon@11.2.0
  - @impulse-ui-native/theme@11.2.0
  - @impulse-ui-native/progress@11.2.0
  - @impulse-ui-native/flat-list@11.2.0

## 11.1.0

### Patch Changes

- Updated dependencies [de8bfb9]
  - @impulse-ui-native/primitives@11.1.0
  - @impulse-ui-native/card@11.1.0
  - @impulse-ui-native/color-picker@11.1.0
  - @impulse-ui-native/list@11.1.0
  - @impulse-ui-native/icon@11.1.0
  - @impulse-ui-native/theme@11.1.0
  - @impulse-ui-native/progress@11.1.0
  - @impulse-ui-native/flat-list@11.1.0

## 11.0.1

### Patch Changes

- @impulse-ui-native/icon@11.0.1
- @impulse-ui-native/primitives@11.0.1
- @impulse-ui-native/theme@11.0.1
- @impulse-ui-native/card@11.0.1
- @impulse-ui-native/list@11.0.1
- @impulse-ui-native/progress@11.0.1
- @impulse-ui-native/flat-list@11.0.1
- @impulse-ui-native/color-picker@11.0.1

## 11.0.0

### Patch Changes

- Updated dependencies [4aa2862]
- Updated dependencies [75fabf6]
  - @impulse-ui-native/theme@11.0.0
  - @impulse-ui-native/card@11.0.0
  - @impulse-ui-native/color-picker@11.0.0
  - @impulse-ui-native/icon@11.0.0
  - @impulse-ui-native/list@11.0.0
  - @impulse-ui-native/primitives@11.0.0
  - @impulse-ui-native/progress@11.0.0
  - @impulse-ui-native/flat-list@11.0.0

## 10.0.0

### Patch Changes

- Updated dependencies
- Updated dependencies [a80ff6d]
- Updated dependencies [ffa7afb]
  - @impulse-ui-native/flat-list@10.0.0
  - @impulse-ui-native/primitives@10.0.0
  - @impulse-ui-native/theme@10.0.0
  - @impulse-ui-native/icon@10.0.0
  - @impulse-ui-native/card@10.0.0
  - @impulse-ui-native/list@10.0.0
  - @impulse-ui-native/progress@10.0.0
  - @impulse-ui-native/color-picker@10.0.0

## 9.1.2

### Patch Changes

- 0f2d6de: Publish compiled React Native entry points while preserving source exports for instant workspace development in Storybook and the playground.
- Updated dependencies [0f2d6de]
  - @impulse-ui-native/card@9.1.2
  - @impulse-ui-native/color-picker@9.1.2
  - @impulse-ui-native/flat-list@9.1.2
  - @impulse-ui-native/list@9.1.2
  - @impulse-ui-native/primitives@9.1.2
  - @impulse-ui-native/progress@9.1.2
  - @impulse-ui-native/theme@9.1.2
  - @impulse-ui-native/icon@9.1.2

## 9.1.1

### Patch Changes

- Updated dependencies [29ca8cf]
  - @impulse-ui-native/theme@9.1.1
  - @impulse-ui-native/card@9.1.1
  - @impulse-ui-native/color-picker@9.1.1
  - @impulse-ui-native/icon@9.1.1
  - @impulse-ui-native/list@9.1.1
  - @impulse-ui-native/primitives@9.1.1
  - @impulse-ui-native/progress@9.1.1
  - @impulse-ui-native/flat-list@9.1.1

## 9.1.0

### Patch Changes

- bffa719: Add shared native chart selection, tooltips, toggleable legends, empty content,
  stacked bars, and horizontal bar orientation. Keep line geometry aligned with
  axes, infer line scales, normalize degenerate domains, stabilize chart colors by
  ID, and prevent pie sums from collapsing large finite values. Add model and hit
  testing coverage and native Storybook examples.

  Unify chart frame setup, axes, appearance tokens, typography, swatches, and Card
  tooltips. Reuse shared native primitives, numeric scales, ticks, and bar geometry;
  avoid style-driven geometry recalculation and redundant stack work. Add an
  architecture/reuse map and light/dark chart comparison galleries.

- d5c0a70: Give all chart previews fixed, non-shrinking heights. Reserve a separate fixed
  status row in the controlled-selection example so selecting or dismissing a
  tooltip does not resize the chart when the status text changes.
- Updated dependencies [bffa719]
  - @impulse-ui-native/theme@9.1.0
  - @impulse-ui-native/card@9.1.0
  - @impulse-ui-native/color-picker@9.1.0
  - @impulse-ui-native/icon@9.1.0
  - @impulse-ui-native/list@9.1.0
  - @impulse-ui-native/primitives@9.1.0
  - @impulse-ui-native/progress@9.1.0
  - @impulse-ui-native/flat-list@9.1.0

## 9.0.0

### Minor Changes

- 91eba29: Add a modular native ColorPicker with saturation/brightness spectrum, hue and alpha sliders, hex/RGB/opacity entry, theme presets, controlled/uncontrolled selection, and staged Apply/Cancel behavior. Add component tokens and toolkit exports. Slider now accepts custom track content and uses a tokenized minimum interaction height.

  Render gradient transparency with explicit stop opacity. Activate spectrum drags on touch-down with Gesture Handler on the UI thread so parent native scrolling cannot interrupt color selection. The color picker requires Gesture Handler, Reanimated, Worklets, and GestureHandlerRootView.

  Allow customizing the preset palette heading through presetsLabel, defaulting to "Theme colors", and hiding the entire preset section with showPresets={false}.

  Expose dedicated color-picker tokens for internal spacing, field proportions, surface radii, swatch rings and checkmark sizes, and spectrum indicator borders and shadows. Preserve the default appearance while allowing independent customization.

### Patch Changes

- 91eba29: Remove unsupported right-to-left mirroring from color selection, sliders, switches, progress indicators, pagination arrows, and initial scroll reveal calculations. Use left-to-right behavior consistently and remove RTL support claims from current documentation.

  Remove the typography writingDirection style prop.

- Updated dependencies [91eba29]
- Updated dependencies [91eba29]
- Updated dependencies [cf6e434]
  - @impulse-ui-native/color-picker@9.0.0
  - @impulse-ui-native/theme@9.0.0
  - @impulse-ui-native/progress@9.0.0
  - @impulse-ui-native/primitives@9.0.0
  - @impulse-ui-native/card@9.0.0
  - @impulse-ui-native/icon@9.0.0
  - @impulse-ui-native/list@9.0.0
  - @impulse-ui-native/flat-list@9.0.0

## 8.3.0

### Patch Changes

- a4b32bf: Add native FlatList and useFlatListInitialScroll, a small hook providing initialScrollIndex and accurate fixed-row getItemLayout. Use themed fixed-height, single-line Select options to reveal the opening selection. Reuse the hook in TimePicker and export it through the toolkit.
- Updated dependencies [a4b32bf]
  - @impulse-ui-native/flat-list@8.3.0
  - @impulse-ui-native/theme@8.3.0
  - @impulse-ui-native/card@8.3.0
  - @impulse-ui-native/icon@8.3.0
  - @impulse-ui-native/list@8.3.0
  - @impulse-ui-native/primitives@8.3.0
  - @impulse-ui-native/progress@8.3.0

## 8.2.0

### Patch Changes

- 0cd457e: Expose shared shadows, the code font, chart palette and geometry, Slider detail
  dimensions, overlay animation timing, and Toast action weight through the active
  theme. Preserve explicit visual prop overrides and existing runtime defaults.
  Keep chart stroke layout aligned with its themed rendering width, preserve arrays
  when merging theme palettes, and theme shared Storybook preview styling.
- Updated dependencies [0cd457e]
  - @impulse-ui-native/theme@8.2.0
  - @impulse-ui-native/primitives@8.2.0
  - @impulse-ui-native/card@8.2.0
  - @impulse-ui-native/icon@8.2.0
  - @impulse-ui-native/list@8.2.0
  - @impulse-ui-native/progress@8.2.0

## 8.1.0

### Patch Changes

- Updated dependencies [be262a8]
  - @impulse-ui-native/theme@8.1.0
  - @impulse-ui-native/card@8.1.0
  - @impulse-ui-native/icon@8.1.0
  - @impulse-ui-native/list@8.1.0
  - @impulse-ui-native/primitives@8.1.0
  - @impulse-ui-native/progress@8.1.0

## 8.0.0

### Patch Changes

- Updated dependencies [f67c73d]
  - @impulse-ui-native/primitives@8.0.0
  - @impulse-ui-native/card@8.0.0
  - @impulse-ui-native/list@8.0.0
  - @impulse-ui-native/icon@8.0.0
  - @impulse-ui-native/theme@8.0.0
  - @impulse-ui-native/progress@8.0.0

## 7.0.1

### Patch Changes

- @impulse-ui-native/icon@7.0.1
- @impulse-ui-native/primitives@7.0.1
- @impulse-ui-native/theme@7.0.1
- @impulse-ui-native/card@7.0.1
- @impulse-ui-native/list@7.0.1
- @impulse-ui-native/progress@7.0.1

## 7.0.0

### Patch Changes

- cea3a04: Expose Flyout.Root, Header, Title, Content, and Handle parts. Build the convenience
  Flyout from those parts while preserving its lifecycle, gestures, placement,
  safe-area handling, and existing title-based API.
- 8e6ef63: Add Modal.Provider above Root to own the lifecycle and share context with Close.
  Modal.Close renders supplied children and dismisses automatically while preserving
  consumer press callbacks. The convenience component uses plain JSX composition
  with a default neutral X and hideClose, without a children callback.

  For compound usage, move id, open, layer, and lifecycle callbacks from Root to
  Provider. Keep Provider and Root inside the local Portal.

- 7d5a077: Add Modal's OverlayComponentProps lifecycle for local Portal usage and global
  OverlayHost registration. Root handles safe-area positioning, backdrop and Android
  back dismissal, layered rendering, and cancelable entry/exit animations. Preserve
  independent presentation parts and non-scrollable content, and add hosted title
  composition and interactive documentation.
- d20d471: Add presentation-only Modal parts with a styled Root, Header, Content, Footer,
  Title, and Description. Include a convenience composition and token-driven
  small/medium/large sizes. Dialog behavior remains deferred.
- 9398849: Align Flyout with the elevated overlay surface, 16-point exposed
  corners and padding, and 20/28 title typography used by Modal. Add theme tokens
  for the title typography. The sheet remains borderless.

  Use an 18-point tertiary close icon in Toast, matching Modal and Popover, with
  dedicated closeIconSize and closeColor tokens independent of semantic icons.

  Allow Popover titles to wrap beside the close control, with a compact long-title
  Storybook example.

- bf78005: Compose Popover's convenience API with title, custom header, footer, and a default
  neutral close icon with hideClose. Add child-only Header and Footer parts.
- 2a7db15: Remove Popover's surface prop, exported PopoverSurface type, and surface context
  logic. Use a single flat secondary panel without a default shadow. Title and
  Description consume their own theme colors without context.

  Flatten components.popover.surfaces.elevated into the panel tokens, using
  backgroundColor for the former value field. Move inverse hint styling into
  components.popover.tooltip, with color for its text. Tooltip retains its compact
  inverse presentation and sizes naturally through its own content styles.

- Updated dependencies [7d5a077]
- Updated dependencies [d20d471]
- Updated dependencies [9398849]
- Updated dependencies [2a7db15]
  - @impulse-ui-native/theme@7.0.0
  - @impulse-ui-native/card@7.0.0
  - @impulse-ui-native/icon@7.0.0
  - @impulse-ui-native/list@7.0.0
  - @impulse-ui-native/primitives@7.0.0
  - @impulse-ui-native/progress@7.0.0

## 6.3.1

### Patch Changes

- Updated dependencies [09c3cf2]
  - @impulse-ui-native/theme@6.3.1
  - @impulse-ui-native/card@6.3.1
  - @impulse-ui-native/icon@6.3.1
  - @impulse-ui-native/list@6.3.1
  - @impulse-ui-native/primitives@6.3.1
  - @impulse-ui-native/progress@6.3.1

## 6.3.0

### Patch Changes

- Updated dependencies [9f7f2a2]
- Updated dependencies [9f7f2a2]
  - @impulse-ui-native/theme@6.3.0
  - @impulse-ui-native/icon@6.3.0
  - @impulse-ui-native/card@6.3.0
  - @impulse-ui-native/list@6.3.0
  - @impulse-ui-native/primitives@6.3.0
  - @impulse-ui-native/progress@6.3.0

## 6.2.0

### Minor Changes

- 5552924: Add token-driven Tooltip and compound Popover components with Portal rendering, anchor measurement, safe-area collision handling, and native press/long-press triggers.

### Patch Changes

- Updated dependencies [5552924]
  - @impulse-ui-native/theme@6.2.0
  - @impulse-ui-native/card@6.2.0
  - @impulse-ui-native/icon@6.2.0
  - @impulse-ui-native/list@6.2.0
  - @impulse-ui-native/primitives@6.2.0
  - @impulse-ui-native/progress@6.2.0

## 6.1.0

### Patch Changes

- Updated dependencies [3940c3f]
  - @impulse-ui-native/theme@6.1.0
  - @impulse-ui-native/card@6.1.0
  - @impulse-ui-native/icon@6.1.0
  - @impulse-ui-native/list@6.1.0
  - @impulse-ui-native/primitives@6.1.0
  - @impulse-ui-native/progress@6.1.0

## 6.0.0

### Minor Changes

- ce02232: Add token-driven compound Toast notifications using OverlayProvider, with top/bottom placements, timed or persistent dismissal, and actions.

  Provide a ready-made Toast component assembled from child-only composable parts, following Input's composition model.

### Patch Changes

- e4de9ad: Move Card, List, Progress, and their prop types out of primitives into dedicated packages. Import them from their owning packages or the toolkit. Add ready-made Card and List components assembled from their child-only namespaced parts, and use Reanimated for indeterminate Progress.
- Updated dependencies [ce02232]
- Updated dependencies [e4de9ad]
  - @impulse-ui-native/theme@6.0.0
  - @impulse-ui-native/card@6.0.0
  - @impulse-ui-native/list@6.0.0
  - @impulse-ui-native/progress@6.0.0
  - @impulse-ui-native/primitives@6.0.0
  - @impulse-ui-native/icon@6.0.0

## 5.0.0

### Minor Changes

- 0b4016a: Add a native Carousel with edge and center snapping, neighboring-slide previews, controlled or uncontrolled indices, dots/segments/counter pagination, and default filled navigation buttons that honor reduced motion. Pagination and navigation follow the nearest slide during scrolling.

### Patch Changes

- 0fcbabd: Use the theme primary text color for headings and main content and secondary
  for supporting typography presets so both stay readable in dark mode. Allow
  color in custom preset configurations, preserving explicit prop and style overrides.
  Replace fixed Storybook text colors and paired preview surfaces with theme tokens
  and use the default dark carousel palette.
- Updated dependencies [0fcbabd]
- Updated dependencies [0fcbabd]
- Updated dependencies [e1a8def]
- Updated dependencies [0b4016a]
- Updated dependencies [f618637]
- Updated dependencies [58a5c7e]
- Updated dependencies [b5a7c24]
- Updated dependencies [0fcbabd]
- Updated dependencies [0fcbabd]
  - @impulse-ui-native/theme@5.0.0
  - @impulse-ui-native/primitives@5.0.0
  - @impulse-ui-native/icon@5.0.0

## 4.0.0

### Patch Changes

- Updated dependencies [cfd0e78]
  - @impulse-ui-native/primitives@4.0.0
  - @impulse-ui-native/theme@4.0.0
  - @impulse-ui-native/icon@4.0.0

## 3.0.0

### Patch Changes

- 8873b55: Add token-driven Slider and RangeSlider controls with shared sizes, filled, outlined, and soft variants, steps, marks, value labels, pointer gestures, keyboard input, and adjustable accessibility semantics.

  Rename the public theme constant `shadowScale` to `ShadowScale` to follow the PascalCase constants convention.

- Updated dependencies [8873b55]
  - @impulse-ui-native/theme@3.0.0
  - @impulse-ui-native/icon@3.0.0
  - @impulse-ui-native/primitives@3.0.0

## 2.9.0

### Minor Changes

- 3b7df07: Add a Badge primitive with semantic tones, control-style variants, Input-style prefix and suffix addons, theme tokens, and Storybook documentation. Standardize token-dependent React Native styles on `useThemedStyles` across affected components.

### Patch Changes

- Updated dependencies [3b7df07]
  - @impulse-ui-native/primitives@2.9.0
  - @impulse-ui-native/theme@2.9.0
  - @impulse-ui-native/icon@2.9.0

## 2.8.0

### Patch Changes

- Updated dependencies [385bd4f]
- Updated dependencies [6a63019]
- Updated dependencies [e899f0a]
- Updated dependencies [1256f76]
- Updated dependencies [598ea3d]
- Updated dependencies [c6fb200]
  - @impulse-ui-native/primitives@2.8.0
  - @impulse-ui-native/theme@2.8.0
  - @impulse-ui-native/icon@2.8.0

## 2.7.0

### Patch Changes

- 683305b: Add a functional loading state to IconButton and make loading Button controls block interaction and expose their busy accessibility state.
- Updated dependencies [3c5cb51]
- Updated dependencies [6a3c644]
- Updated dependencies [683305b]
  - @impulse-ui-native/theme@2.7.0
  - @impulse-ui-native/primitives@2.7.0
  - @impulse-ui-native/icon@2.7.0

## 2.6.0

### Minor Changes

- f5dec23: Add the accessible, themeable Checkbox component with controlled and uncontrolled checked, unchecked, and indeterminate states.
- e34f2c3: Add the accessible, themeable Radio component with controlled and uncontrolled selection, shared sizes, and shared variants.

### Patch Changes

- Updated dependencies [f5dec23]
- Updated dependencies [6f49e9f]
- Updated dependencies [e34f2c3]
  - @impulse-ui-native/theme@2.6.0
  - @impulse-ui-native/icon@2.6.0
  - @impulse-ui-native/primitives@2.6.0

## 2.5.0

### Minor Changes

- Theme tokens cleanup

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/icon@2.5.0
  - @impulse-ui-native/primitives@2.5.0
  - @impulse-ui-native/theme@2.5.0

## 2.4.0

### Patch Changes

- fe0bf8e: Replace the layers registry with a typed overlay store, provider, and host API.
  - @impulse-ui-native/icon@2.4.0
  - @impulse-ui-native/primitives@2.4.0
  - @impulse-ui-native/theme@2.4.0

## 2.3.5

### Patch Changes

- Adding missing props in the package.json
- Updated dependencies
  - @impulse-ui-native/icon@2.3.5
  - @impulse-ui-native/primitives@2.3.5
  - @impulse-ui-native/theme@2.3.5

## 2.3.4

### Patch Changes

- Adding licenses to packages
- Updated dependencies
  - @impulse-ui-native/icon@2.3.4
  - @impulse-ui-native/primitives@2.3.4
  - @impulse-ui-native/theme@2.3.4

## 2.1.6

### Patch Changes

- f169c09: Fixing wrong tag flex prop
- Updated dependencies [f169c09]
  - @impulse-ui-native/icon@2.1.6
  - @impulse-ui-native/primitives@2.1.6
  - @impulse-ui-native/theme@2.1.6

## 2.1.5

### Patch Changes

- fd608af: Add stories for charts, data states, date and time controls, flyouts, icons, inputs, layers, portals, selection, skeletons, and steppers.
- Updated dependencies [fd608af]
  - @impulse-ui-native/primitives@2.1.5
  - @impulse-ui-native/icon@2.1.5
  - @impulse-ui-native/theme@2.1.5

## 2.1.4

### Patch Changes

- 13ae4f4: Updating README docs
- Updated dependencies [13ae4f4]
  - @impulse-ui-native/icon@2.1.4
  - @impulse-ui-native/primitives@2.1.4
  - @impulse-ui-native/theme@2.1.4

## 2.1.3

### Patch Changes

- @impulse-ui-native/icon@2.1.3
- @impulse-ui-native/primitives@2.1.3
- @impulse-ui-native/theme@2.1.3

## 2.1.2

### Patch Changes

- @impulse-ui-native/icon@2.1.2
- @impulse-ui-native/primitives@2.1.2
- @impulse-ui-native/theme@2.1.2

## 2.1.1

### Patch Changes

- @impulse-ui-native/primitives@2.1.1
- @impulse-ui-native/theme@2.1.1
- @impulse-ui-native/icon@2.1.1

## 2.1.0

### Patch Changes

- Updated dependencies [69e91a4]
  - @impulse-ui-native/theme@2.1.0
  - @impulse-ui-native/primitives@2.1.0
  - @impulse-ui-native/icon@2.1.0

## 2.0.1

### Patch Changes

- Updating READMEs
- Updated dependencies
  - @impulse-ui-native/toolkit@2.0.1

## 2.0.0

### Major Changes

- Initial major public release

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/toolkit@2.0.0
