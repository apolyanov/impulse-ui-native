# Storybook host

Run native Storybook from the repository root with:

```sh
pnpm --filter impulse-ui-native storybook:ios
pnpm --filter impulse-ui-native storybook:android
```

Use **Switch to dark** / **Switch to light** above the stories to change the
Impulse UI theme. Native Storybook keeps the selected scheme while browsing
stories. The story canvas, themed components, flyouts, and portals use the
selected palette. Stories that install their own ThemeProvider or supply explicit
colors keep those overrides.

In the native Backgrounds panel, select **theme** to follow the active palette.
Other background choices remain available for checking custom backgrounds.

The web preview uses the same theme toggle:

```sh
pnpm --filter impulse-ui-native storybook:web
```

## Agent/design reference previews

Open **Design system/Recipes** in native Storybook, or use a deep link such as `impulseuinative://design-system?recipe=field-appearances&scheme=dark&variant=filled&tone=primary&state=disabled`. Visual recipe IDs are listed in `docs/design-system/recipe-index.json`. The direct route uses the same recipe sources, isolates its portal/overlay stores, loads the configured fonts through the host, and hides the Storybook toolbar. Other Storybook screens retain their normal toolbar.

The preview route is a development aid. A compiled bundle or registered story does not certify native layout/interaction. Capture verified images separately and record their platform/state in the recipe index.

The `with-compatible-scene-delegate` Expo config plugin synchronizes the scene manifest with an explicit Objective-C `SceneDelegate` name when the native project declares one. Regenerate the iOS native configuration and rebuild the development client after changing native configuration; an already installed client does not pick up plist fixes from Metro. Standard Swift module-qualified scene delegates remain unchanged.

Inspected iOS frames and remaining verification scope are recorded in [the native verification report](../../docs/design-system/native-verification.md).
