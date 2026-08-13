# @impulse-ui-native/charts

The workspace package reserved for Impulse UI Native chart components and chart primitives.

## Status

This package is currently under development. It declares D3 scale, shape, interpolation, array, and time utilities plus React Native Skia as its rendering peer, but it does not currently expose a public component or type from the package root.

Do not depend on `@impulse-ui-native/charts` for application code until its first public exports are added and documented here.

## Planned scope

- Token-aware chart primitives for React Native.
- Skia-based rendering.
- D3-backed scales, shapes, interpolation, and date/time helpers.
- Typed components that compose with the rest of Impulse UI Native.

## Native prerequisite

Future chart APIs will require `@shopify/react-native-skia` version 2 or newer. Follow Skia's platform setup instructions before using those APIs once they are available.
