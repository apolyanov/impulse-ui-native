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
