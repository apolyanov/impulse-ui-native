# ImpulseUI Native Storybook

The Expo and React Native Web Storybook host for developing and reviewing ImpulseUI Native components. Native stories are discovered from the workspace packages and rendered with the toolkit theme.

## Development

Install workspace dependencies from the repository root:

```sh
pnpm install
```

Start the on-device Storybook:

```sh
pnpm --filter impulse-ui-native storybook
```

Open it directly in a simulator or emulator with:

```sh
pnpm --filter impulse-ui-native storybook:ios
pnpm --filter impulse-ui-native storybook:android
```

Because this application uses native modules, use a compatible development build rather than Expo Go.

When native stories are added or renamed, regenerate the Storybook loader:

```sh
pnpm --filter impulse-ui-native storybook-generate
```

## Web Storybook

Start the React Native Web Storybook at [http://localhost:6006](http://localhost:6006):

```sh
pnpm --filter impulse-ui-native storybook:web
```

Create its static build with:

```sh
pnpm --filter impulse-ui-native build-storybook
```

Storybook configuration lives in `.rnstorybook` for native and `.storybook` for web.
