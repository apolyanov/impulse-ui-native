# @impulse-ui-native/checkbox

Package scaffold for the ImpulseUI Native checkbox controls.

## Status

The package is private and currently exports no components. It is included in
the workspace so the `Checkbox` and `CheckboxGroup` APIs can be developed and
verified without exposing an unfinished package.

## Planned responsibilities

- `Checkbox` with controlled and uncontrolled checked state;
- checked, unchecked, and indeterminate visual states;
- label, description, error, disabled, and required states;
- `CheckboxGroup` for shared value, validation, and layout behavior;
- theme tokens for sizes, colors, borders, spacing, and motion;
- accessible touch, keyboard, focus, and screen-reader behavior across native
  platforms and React Native Web.

## Before publishing

1. Implement and export the component and public prop types.
2. Add checkbox tokens to `@impulse-ui-native/theme`.
3. Add native and web Storybook examples and documentation.
4. Add interaction and accessibility tests.
5. Remove `private`, add `publishConfig`, add the package to the Changesets
   fixed group, and re-export it from `@impulse-ui-native/toolkit`.
6. Update `docs/component-roadmap.md` and add a Changeset.
