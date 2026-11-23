# Native dependency compatibility

The dependency audit covers the local 19.1.0 source. Package peer ranges are
installation constraints, not a tested matrix of every allowed version tuple.
All 38 library packages use one Changesets fixed version group and should be
updated together when an application imports several of them directly.

## Minimums imposed by native dependencies

- Packages using both Reanimated and Worklets require Reanimated >=4.1 and React
  Native >=0.78. Reanimated 3 does not support a separately installed Worklets
  package. Reanimated 4.0 requires Worklets 0.4, whereas these packages use the
  Worklets 0.5 or newer API. Reanimated 4 requires the New Architecture.
- Flyout requires Gesture Handler 3, whose earliest supported React Native
  version is 0.82. Select, datetime, and toolkit inherit this floor.
- Charts require Skia 2, React >=19, React Native >=0.79, and Worklets >=0.7
  for Skia/Reanimated integration. Toolkit inherits these requirements.
- A package's React and React Native floors also include the floors of its
  direct internal runtime dependencies. Foundation packages retain their own
  narrower dependency surface.

Check the upstream [Reanimated compatibility table](https://docs.swmansion.com/react-native-reanimated/docs/guides/compatibility/),
[Gesture Handler requirements](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/getting-started/#requirements),
and [Skia 2 installation requirements](https://wcandillon.github.io/react-native-skia/v2/docs/getting-started/installation/)
when choosing versions. Raising a declared minimum does not certify native
behavior on that minimum version.

## Current workspace tuple

The catalog and installed Expo SDK 58 metadata select React 19.3.0, React Native
0.88.0, Reanimated 4.7.1, Worklets 0.13.0, Gesture Handler 3.3.0, Skia 2.14.0,
and Keyboard Controller 1.22.7. The installed Reanimated and Worklets compatibility
files include React Native 0.88 and pair Reanimated 4.7 with Worklets 0.13.

There is an unresolved upstream discrepancy: Expo SDK 58's installed
`bundledNativeModules.json` selects Gesture Handler ~3.3.0, while Gesture
Handler's published compatibility table excludes React Native 0.88 for 3.3
and includes it for 3.4 and 3.5. The catalog retains Expo's selection. An iOS
and Android development build must resolve this discrepancy before claiming
native compatibility; JavaScript builds and typechecks cannot resolve it.

`pnpm peers check` also reports a TypeScript tooling conflict in the optional
web Storybook host: `vite-plugin-rnw@0.0.11` and its `tsconfck@3.1.6` dependency
declare TypeScript 5, while the workspace uses TypeScript 6.0.3. This is outside
the native component scope. No peer override suppresses the warning.

## Verification commands

```sh
pnpm deps:check
pnpm peers check
pnpm check-types
pnpm test
pnpm exec turbo run build --filter='./packages/*'
```

The dependency checker verifies declarations for imports, re-exports, literal
dynamic imports and type imports under package `src` directories. Story-only
imports may use dev dependencies because stories are excluded from published
builds. The checker also guards dependency cycles and the native peer floors
above. It does not resolve native binaries, check vulnerability advisories, or
replace testing real iOS and Android builds.
