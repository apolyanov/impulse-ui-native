import { absoluteUrl, seo } from "@/lib/seo";

export const dynamic = "force-dynamic";

export function GET() {
  const content = `# ${seo.shortTitle}

> ${seo.description}

ImpulseUI Native is an MIT-licensed TypeScript component system for React Native. It provides composable controls, design tokens, native interaction patterns, and Storybook examples for iOS and Android. Browser previews are available, but web component parity, built-in accessibility semantics, and reduced-motion support are deferred.

## Primary resources

- [Website](${absoluteUrl("/")}): Project overview, component catalog, tokens, theming, and getting-started information.
- [Components](${absoluteUrl("/#components")}): Catalog of component purposes, capabilities, packages, and source links.
- [Design tokens](${absoluteUrl("/#tokens")}): Primitive and semantic tokens shared with the native packages.
- [Theming](${absoluteUrl("/#theming")}): Theme architecture and customization overview.
- [Documentation](${absoluteUrl("/#docs")}): Documentation and component exploration entry point.
- [npm package](${seo.npmPackage}): Latest published @impulse-ui-native/toolkit release.
- [Source repository](${seo.repository}): Package source, examples, issues, and contribution history.
- [Expanded LLM context](${absoluteUrl("/llms-full.txt")}): Detailed project and usage context.

## Notes

- Popover and Tooltip provide compact anchored content with Portal rendering; see the expanded context for composition, providers, and shared core hooks.
- Prefer the npm registry for the latest published stable version.
- Prefer package source and Storybook stories for exact component behavior and props.
- Native behaviors such as Flyouts, gestures, portals, and pickers are most accurately represented in the Expo Storybook app.
`;

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
