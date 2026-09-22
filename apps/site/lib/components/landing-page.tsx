import type { SystemIconName } from "@/lib/icons/system-icon";
import { GithubLogoIcon, ImpulseUINativeLogoIcon } from "@/lib/icons";
import { SystemIcon } from "@/lib/icons/system-icon";
import { primitiveTokenGroups, project, semanticTokens } from "@/lib/site-data";

import {
  ButtonPlayground,
  InstallBox,
  Navigation,
  PackageVersion,
} from "./interactive";
import {
  ComponentCard,
  Eyebrow,
  SectionContainer,
  SectionHeading,
} from "./marketing-primitives";
import { WebTag } from "./native-web";
import { PhonePreview } from "./previews";

const actionBase =
  "inline-flex h-component-large items-center justify-center gap-xs rounded-md border-sm px-sm text-xsm font-semiBold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2";

export function HeroSection() {
  const floatingTokens = [
    ["spacing.md", "left-0 top-md"],
    ["radii.lg", "right-0 top-xl"],
    ["colors.primary", "-left-xs bottom-lg"],
    ["fontSize.xl", "-right-xs bottom-md"],
  ] as const;

  return (
    <header className="relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-60" />
      <div className="hero-glow absolute left-1/2 top-xl size-[min(72vw,760px)] -translate-x-1/2 rounded-round" />
      <SectionContainer className="relative grid gap-xl py-xl lg:grid-cols-2 lg:items-center lg:py-xxl">
        <div className="min-w-0">
          <h1 className="text-display-small font-extraBold tracking-[-0.04em] md:text-colossal md:leading-colossal">
            Open-source UI for{" "}
            <span className="text-primary">native momentum.</span>
          </h1>
          <p className="mt-sm max-w-2xl text-body-large text-text-secondary">
            A token-driven React Native component library for building
            consistent, expressive, and scalable interfaces across platforms.
          </p>
          <div className="mt-msm flex flex-wrap gap-xs">
            <a
              className={`${actionBase} border-primary bg-primary text-primary-contrast shadow-lg`}
              href="#components"
            >
              Explore components
              <SystemIcon className="size-sm" name="arrow" />
            </a>
            <a
              className={`${actionBase} border-border-default bg-surface-elevated`}
              href="#docs"
            >
              Read the docs
            </a>
            <a
              className={`${actionBase} border-surface-inverse bg-surface-inverse text-surface-inverse-contrast`}
              href={project.repository}
            >
              <GithubLogoIcon className="size-sm" /> GitHub
            </a>
          </div>
          <InstallBox />
        </div>
        <div className="relative flex justify-center lg:justify-end">
          {floatingTokens.map(([label, position]) => (
            <span
              className={`absolute z-10 hidden rounded-md border border-border-subtle bg-surface-elevated px-mxs py-xs font-mono text-caption font-semiBold text-primary shadow-md sm:block ${position}`}
              key={label}
            >
              {label}
            </span>
          ))}
          <PhonePreview />
        </div>
      </SectionContainer>
    </header>
  );
}

const features: {
  icon: SystemIconName;
  title: string;
  copy: string;
}[] = [
  {
    icon: "code",
    title: "Open source",
    copy: "MIT licensed, public from day one.",
  },
  {
    icon: "type",
    title: "TypeScript-first",
    copy: "Strong types across every component.",
  },
  {
    icon: "box",
    title: "React Native",
    copy: "Built for iOS, Android, and web.",
  },
  {
    icon: "palette",
    title: "Token-driven",
    copy: "Primitive, semantic, and component layers.",
  },
  {
    icon: "sparkle",
    title: "Community-ready",
    copy: "Built in the open with contributors.",
  },
];

export function OpenSourceStrip() {
  return (
    <section className="border-y border-border-subtle bg-surface-elevated">
      <SectionContainer className="grid grid-cols-2 gap-msm py-md md:grid-cols-5">
        {features.map((feature) => (
          <div className="text-center md:text-left" key={feature.title}>
            <SystemIcon
              className="mx-auto mb-xs size-lg text-primary md:mx-0"
              name={feature.icon}
            />
            <h2 className="text-xsm font-bold">{feature.title}</h2>
            <p className="mt-xxs text-caption leading-xs text-text-disabled">
              {feature.copy}
            </p>
          </div>
        ))}
      </SectionContainer>
    </section>
  );
}

const componentGroups = [
  {
    name: "Actions",
    icon: "zap",
    components: [
      {
        name: "Button",
        description:
          "Trigger primary and secondary actions across sizes, variants, and loading states.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/button.tsx",
        tags: ["Interactive", "5 variants"],
      },
      {
        name: "IconButton",
        description:
          "Present compact, accessible actions when an icon communicates the intent.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/icon-button.tsx",
        tags: ["Interactive", "Accessible"],
      },
    ],
  },
  {
    name: "Inputs",
    icon: "type",
    components: [
      {
        name: "Input",
        description:
          "Collect typed text with themed labels, validation, and supporting content.",
        packageName: "@impulse-ui-native/input",
        sourcePath: "input/src/components/input.tsx",
        tags: ["Interactive", "Validated"],
      },
      {
        name: "Textarea",
        description:
          "Collect longer text with character counting and bounded auto-grow behavior.",
        packageName: "@impulse-ui-native/input",
        sourcePath: "input/src/components/textarea.tsx",
        tags: ["Interactive", "Multiline"],
      },
      {
        name: "Checkbox",
        description:
          "Toggle checked, unchecked, and indeterminate states with accessible semantics.",
        packageName: "@impulse-ui-native/checkbox",
        sourcePath: "checkbox/src/components/checkbox.tsx",
        tags: ["Interactive", "3 states"],
      },
      {
        name: "Radio",
        description:
          "Present an accessible single-choice control across shared sizes and variants.",
        packageName: "@impulse-ui-native/radio",
        sourcePath: "radio/src/components/radio.tsx",
        tags: ["Interactive", "Accessible"],
      },
      {
        name: "Switch",
        description:
          "Toggle settings with animated state changes and disabled or loading behavior.",
        packageName: "@impulse-ui-native/switch",
        sourcePath: "switch/src/components/switch.tsx",
        tags: ["Interactive", "Animated"],
      },
      {
        name: "Select",
        description:
          "Choose one or many values through a themed control and native flyout.",
        packageName: "@impulse-ui-native/select",
        sourcePath: "select/src/components/select.tsx",
        tags: ["Interactive", "Flyout"],
      },
      {
        name: "FormField",
        description:
          "Compose labels, descriptions, required state, and validation around custom controls.",
        packageName: "@impulse-ui-native/form-field",
        sourcePath: "form-field/src/components/form-field.tsx",
        tags: ["Accessible", "Validated"],
      },
      {
        name: "DateTimePicker",
        description:
          "Select dates with calendar navigation and configurable date constraints.",
        packageName: "@impulse-ui-native/datetime",
        sourcePath: "datetime/src/components/datetime/datetime-picker.tsx",
        tags: ["Interactive", "Calendar"],
      },
      {
        name: "TimePicker",
        description:
          "Select hours and minutes using native-friendly scrolling controls.",
        packageName: "@impulse-ui-native/datetime",
        sourcePath: "datetime/src/components/time/time-picker.tsx",
        tags: ["Interactive", "Time"],
      },
    ],
  },
  {
    name: "Content",
    icon: "box",
    components: [
      {
        name: "Avatar",
        description:
          "Represent people and entities with images, initials, fallbacks, and presence states.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/avatar.tsx",
        tags: ["Identity", "5 variants"],
      },
      {
        name: "Card",
        description:
          "Group related content in compound static or pressable themed surfaces.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/card/card.tsx",
        tags: ["Compound", "Composable"],
      },
      {
        name: "Divider",
        description:
          "Separate content horizontally or vertically with logical insets and semantic colors.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/divider.tsx",
        tags: ["Layout", "Accessible"],
      },
      {
        name: "Accordion",
        description:
          "Reveal collapsible sections with single or multiple expansion and keyboard navigation.",
        packageName: "@impulse-ui-native/accordion",
        sourcePath: "accordion/src/components/accordion.ts",
        tags: ["Compound", "Animated"],
      },
    ],
  },
  {
    name: "Feedback",
    icon: "bell",
    components: [
      {
        name: "Tag",
        description:
          "Label status and categories with semantic colors and optional dismissal.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/tag.tsx",
        tags: ["Display", "Closable"],
      },
      {
        name: "Badge",
        description:
          "Display compact semantic states and metadata with optional leading or trailing content.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/badge/root.tsx",
        tags: ["Display", "Semantic"],
      },
      {
        name: "Spinner",
        description:
          "Communicate indeterminate work with token-aware sizes and semantic colors.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/spinner.tsx",
        tags: ["Loading", "Indeterminate"],
      },
      {
        name: "Progress",
        description:
          "Show determinate or indeterminate progress with linear and circular variants.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/progress.tsx",
        tags: ["Loading", "Accessible"],
      },
      {
        name: "Skeleton",
        description:
          "Communicate loading layouts with animated bones, text, and shape presets.",
        packageName: "@impulse-ui-native/skeleton",
        sourcePath: "skeleton/src/components/skeleton.tsx",
        tags: ["Animated", "Loading"],
      },
      {
        name: "DataState",
        description:
          "Explain empty, error, and completed states with composable actions.",
        packageName: "@impulse-ui-native/data-state",
        sourcePath: "data-state/src/components/data-view.tsx",
        tags: ["Feedback", "Composable"],
      },
    ],
  },
  {
    name: "Charts",
    icon: "layers",
    components: [
      {
        name: "LineChart",
        description:
          "Show a continuous trend across numeric, date, or categorical values.",
        packageName: "@impulse-ui-native/charts",
        sourcePath: "charts/src/components/line-chart/line-chart.tsx",
        tags: ["Skia", "Cartesian"],
      },
      {
        name: "MultiLineChart",
        description:
          "Compare multiple series against the same axes, domain, and grid.",
        packageName: "@impulse-ui-native/charts",
        sourcePath:
          "charts/src/components/multi-line-chart/multi-line-chart.tsx",
        tags: ["Skia", "Multi-series"],
      },
      {
        name: "BarChart",
        description:
          "Compare categorical values, including positive and negative measurements.",
        packageName: "@impulse-ui-native/charts",
        sourcePath: "charts/src/components/bar-chart/bar-chart.tsx",
        tags: ["Skia", "Cartesian"],
      },
      {
        name: "MultiBarChart",
        description:
          "Compare grouped series across categories with configurable spacing.",
        packageName: "@impulse-ui-native/charts",
        sourcePath: "charts/src/components/multi-bar-chart/multi-bar-chart.tsx",
        tags: ["Skia", "Grouped"],
      },
      {
        name: "PieChart",
        description:
          "Communicate proportions as a token-colored pie or donut chart.",
        packageName: "@impulse-ui-native/charts",
        sourcePath: "charts/src/components/pie-chart/pie-chart.tsx",
        tags: ["Skia", "Radial"],
      },
      {
        name: "MultiPieChart",
        description:
          "Display independently normalized data as concentric proportional rings.",
        packageName: "@impulse-ui-native/charts",
        sourcePath: "charts/src/components/multi-pie-chart/multi-pie-chart.tsx",
        tags: ["Skia", "Concentric"],
      },
    ],
  },
] as const satisfies readonly {
  name: string;
  icon: SystemIconName;
  components: readonly {
    name: string;
    description: string;
    packageName: string;
    sourcePath: string;
    tags: readonly string[];
  }[];
}[];

export function ComponentsSection() {
  return (
    <section id="components">
      <SectionContainer className="py-xxl">
        <div className="flex flex-wrap items-end justify-between gap-sm">
          <SectionHeading
            copy="Browse the library by purpose, capability, and package. Native behavior stays in native Storybook, while this catalog gives every component a clear place in the system."
            eyebrow="Components"
            title="Know what is available."
          />
          <a
            className="inline-flex items-center gap-xxs text-xsm font-semiBold text-primary"
            href={project.repository}
          >
            Browse package source
            <SystemIcon className="size-sm" name="arrow" />
          </a>
        </div>
        <div className="mt-lg space-y-lg">
          {componentGroups.map((group) => (
            <section key={group.name}>
              <div className="mb-sm flex items-center gap-xs">
                <span className="flex size-component-small items-center justify-center rounded-sm bg-secondary text-primary">
                  <SystemIcon className="size-sm" name={group.icon} />
                </span>
                <h3 className="text-title-5 font-bold">{group.name}</h3>
                <span className="text-caption text-text-disabled">
                  {group.components.length}
                </span>
                <span className="h-px flex-1 bg-border-subtle" />
              </div>
              <div className="grid gap-sm md:grid-cols-2 lg:grid-cols-3">
                {group.components.map((component) => (
                  <ComponentCard
                    {...component}
                    category={group.name}
                    icon={group.icon}
                    key={component.name}
                    sourceHref={`${project.repository}/blob/main/packages/${component.sourcePath}`}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
        <ButtonPlayground />
      </SectionContainer>
    </section>
  );
}

export function TokensSection() {
  return (
    <section
      className="border-y border-border-subtle bg-surface-elevated"
      id="tokens"
    >
      <SectionContainer className="py-xxl">
        <SectionHeading
          copy="The website consumes the same primitive scale as the native theme instead of maintaining a parallel palette or spacing system."
          eyebrow="Design tokens"
          title="One language for the whole interface."
        />
        <div className="mt-lg grid gap-sm md:grid-cols-2 lg:grid-cols-4">
          {primitiveTokenGroups.map((group) => (
            <article
              className="rounded-md border border-border-subtle bg-surface-primary p-sm"
              key={group.title}
            >
              <h3 className="text-title-6">{group.title}</h3>
              <p className="mt-xxs min-h-component-medium text-caption text-text-disabled">
                {group.description}
              </p>
              <div className="mt-sm space-y-xs">
                {group.tokens.map((token) => (
                  <div
                    className="flex items-center gap-xs rounded-md border border-border-subtle bg-surface-elevated p-xs"
                    key={token.name}
                  >
                    {"swatch" in token ? (
                      <i
                        className="size-msm shrink-0 rounded-sm border border-border-subtle"
                        style={{ background: token.swatch }}
                      />
                    ) : null}
                    <code className="min-w-0 flex-1 truncate text-[11px] font-semiBold">
                      {token.name}
                    </code>
                    <code className="text-[10px] text-text-disabled">
                      {token.value}
                    </code>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-sm grid gap-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-md bg-surface-inverse text-surface-inverse-contrast">
            <div className="flex items-center justify-between border-b border-white/10 px-sm py-mxs">
              <div className="flex gap-xxs">
                <span className="size-xs rounded-round bg-white/20" />
                <span className="size-xs rounded-round bg-white/20" />
                <span className="size-xs rounded-round bg-white/20" />
              </div>
              <span className="font-mono text-[10px] uppercase text-white/50">
                tokens.theme.ts
              </span>
            </div>
            <pre className="code-scrollbar overflow-x-auto p-sm font-mono text-caption leading-sm text-white/80">
              <code>{`export const SpaceTokens = {
  xxs: 4, xs: 8, mxs: 12,
  sm: 16, msm: 24, md: 32,
  lg: 48, xl: 64, xxl: 96,
}

export const RadiiTokens = {
  sm: 4, md: 8, lg: 16,
  xl: 32, xxl: 64, round: 100000,
}`}</code>
            </pre>
          </div>
          <div className="rounded-md border border-border-subtle bg-surface-primary p-sm">
            <Eyebrow>Why tokens matter</Eyebrow>
            <ul className="mt-sm space-y-mxs">
              {[
                "A shared visual contract across native and web.",
                "Typed primitives instead of scattered magic numbers.",
                "Component factories can evolve without product rewrites.",
                "Theme intent stays visible in every class and prop.",
              ].map((item) => (
                <li className="flex gap-xs text-body-small" key={item}>
                  <SystemIcon
                    className="mt-xxs size-sm shrink-0 text-primary"
                    name="check"
                  />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export function ThemingSection() {
  return (
    <section id="theming">
      <SectionContainer className="py-xxl">
        <SectionHeading
          copy="Primitive values feed semantic roles, then component factories. The preview below intentionally uses the authoritative light theme because the package does not yet define a distinct dark palette."
          eyebrow="Theming"
          title="Adapt the system without faking it."
        />
        <div className="mt-lg grid gap-sm lg:grid-cols-2">
          <div className="rounded-lg border border-border-subtle bg-surface-elevated p-xs md:p-sm">
            <div className="mb-sm flex items-center justify-between">
              <Eyebrow>Theme preview</Eyebrow>
              <WebTag variant="outlined">LightTheme</WebTag>
            </div>
            <div className="flex justify-center rounded-md bg-surface-primary p-sm">
              <PhonePreview />
            </div>
          </div>
          <div className="flex flex-col gap-sm">
            <div className="overflow-hidden rounded-md border border-border-subtle bg-surface-elevated">
              <div className="flex items-center justify-between border-b border-border-subtle px-sm py-mxs">
                <Eyebrow>Semantic tokens</Eyebrow>
                <code className="text-[10px] text-text-disabled">
                  {semanticTokens.length} values
                </code>
              </div>
              {semanticTokens.map((token) => (
                <div
                  className="flex items-center gap-xs border-b border-border-subtle px-sm py-xs last:border-0"
                  key={token.name}
                >
                  <i
                    className="size-msm rounded-sm border border-border-subtle"
                    style={{ background: token.swatch }}
                  />
                  <code className="min-w-0 flex-1 truncate text-caption font-semiBold">
                    {token.name}
                  </code>
                  <code className="text-[10px] text-text-disabled">
                    {token.value}
                  </code>
                </div>
              ))}
            </div>
            <div className="rounded-md border border-border-subtle bg-surface-elevated p-sm">
              <Eyebrow>How it composes</Eyebrow>
              <ol className="mt-sm space-y-mxs">
                {[
                  "Define primitive values and scales.",
                  "Map them into semantic color roles.",
                  "Generate component tokens from the theme.",
                  "Render product interfaces from those components.",
                ].map((item, index) => (
                  <li
                    className="flex items-center gap-xs text-body-small"
                    key={item}
                  >
                    <span className="flex size-msm shrink-0 items-center justify-center rounded-round bg-secondary text-caption font-bold text-primary">
                      {index + 1}
                    </span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

const architectureLayers = [
  [
    "Primitive tokens",
    "Raw colors, dimensions, type, and spacing.",
    ["#f55d6b", "space.sm", "radii.md"],
  ],
  [
    "Semantic tokens",
    "Intent-driven roles for surfaces and actions.",
    ["surface.primary", "text.disabled", "border.focus"],
  ],
  [
    "Component tokens",
    "Factories translate the theme into exact anatomy.",
    ["button.sizes", "tag.colors", "control.variants"],
  ],
  [
    "UI components",
    "Composable React Native building blocks.",
    ["Button", "Input", "Select"],
  ],
  [
    "Product UI",
    "Your screens remain coherent as the system changes.",
    ["Onboarding", "Dashboard", "Settings"],
  ],
] as const;

export function ArchitectureSection() {
  return (
    <section className="border-y border-border-subtle bg-surface-elevated">
      <SectionContainer className="py-xxl">
        <SectionHeading
          copy="A traceable pipeline from raw values to shipping interfaces. Every layer remains replaceable, testable, and documented."
          eyebrow="Architecture"
          title="From tokens to product UI."
        />
        <div className="mt-lg grid gap-sm lg:grid-cols-5">
          {architectureLayers.map(([title, copy, items], index) => (
            <article
              className="relative rounded-md border border-border-subtle bg-surface-primary p-sm"
              key={title}
            >
              <p className="text-overline uppercase text-primary">
                Layer {index + 1}
              </p>
              <h3 className="mt-xs text-title-6">{title}</h3>
              <p className="mt-xs min-h-xl text-body-small text-text-secondary">
                {copy}
              </p>
              <div className="mt-sm space-y-xxs">
                {items.map((item) => (
                  <code
                    className="block rounded-sm border border-border-subtle bg-surface-elevated px-xs py-xxs text-caption"
                    key={item}
                  >
                    {item}
                  </code>
                ))}
              </div>
              {index < architectureLayers.length - 1 ? (
                <span className="absolute -right-msm top-1/2 z-10 hidden size-md -translate-y-1/2 items-center justify-center rounded-round bg-primary text-primary-contrast lg:flex">
                  <SystemIcon className="size-sm" name="arrow" />
                </span>
              ) : null}
            </article>
          ))}
        </div>
        <div className="mt-msm flex flex-wrap justify-center gap-sm">
          {[
            "button",
            "tag",
            "controlContainer",
            "datetimePicker",
            "skeleton",
          ].map((token) => (
            <code
              className="whitespace-nowrap rounded-md border border-border-subtle bg-surface-primary px-xs py-xs text-center text-caption font-semiBold"
              key={token}
            >
              components.{token}
            </code>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

const buttonApi = [
  ["size", '"small" | "medium" | "large"', '"medium"'],
  ["variant", '"filled" | "outlined" | "soft" | "ghost" | "plain"', '"filled"'],
  ["loading", "boolean", "false"],
  ["disabled", "boolean", "false"],
  ["onPress", "PressableProps['onPress']", "–"],
  ["shadow", '"none" | "xs" | "sm" | "md" | "lg" | "xl"', "–"],
] as const;

export function DeveloperExperienceSection() {
  const cards = [
    [
      "layers",
      "Composable by default",
      "Extend, wrap, and recompose components without leaving the token contract.",
    ],
    [
      "palette",
      "Semantic styling",
      "Use names that describe intent instead of one-off pixel values.",
    ],
    [
      "zap",
      "Cross-platform consistency",
      "Keep behavior and visual language aligned across supported platforms.",
    ],
  ] as const;

  return (
    <section>
      <SectionContainer className="py-xxl">
        <SectionHeading
          eyebrow="Developer experience"
          title="Built for everyday product work."
        />
        <div className="mt-lg grid gap-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-sm">
            {cards.map(([icon, title, copy]) => (
              <article
                className="flex gap-sm rounded-md border border-border-subtle bg-surface-elevated p-sm"
                key={title}
              >
                <span className="flex size-component-medium shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <SystemIcon className="size-msm" name={icon} />
                </span>
                <div>
                  <h3 className="text-xsm font-bold">{title}</h3>
                  <p className="mt-xxs text-body-small text-text-secondary">
                    {copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="overflow-hidden rounded-md border border-border-subtle bg-surface-elevated">
            <div className="flex items-center justify-between border-b border-border-subtle px-sm py-mxs">
              <div className="flex items-center gap-xs">
                <SystemIcon className="size-sm text-primary" name="box" />
                <code className="text-xsm font-bold">{"<Button />"}</code>
              </div>
              <span className="text-[10px] text-text-disabled">
                <PackageVersion prefix="Actual v" suffix=" API" />
              </span>
            </div>
            <div className="grid grid-cols-[0.8fr_1.8fr_0.7fr] border-b border-border-subtle bg-surface-primary px-sm py-xs text-[10px] font-semiBold uppercase text-text-disabled">
              <span>Prop</span>
              <span>Type</span>
              <span>Default</span>
            </div>
            {buttonApi.map(([name, type, defaultValue]) => (
              <div
                className="grid grid-cols-[0.8fr_1.8fr_0.7fr] items-center border-b border-border-subtle px-sm py-xs last:border-0"
                key={name}
              >
                <code className="text-caption font-bold text-primary">
                  {name}
                </code>
                <code className="truncate text-[10px] text-text-secondary">
                  {type}
                </code>
                <code className="text-[10px] text-text-disabled">
                  {defaultValue}
                </code>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export function ContributeSection() {
  const cards = [
    [
      "bug",
      "Report a bug",
      "Share a focused reproduction and expected behavior.",
    ],
    [
      "plus",
      "Request a component",
      "Propose an addition that fits the system.",
    ],
    [
      "file",
      "Improve documentation",
      "Clarify guides, examples, and API details.",
    ],
    ["code", "Submit a pull request", "Ship a focused fix or feature."],
  ] as const;

  return (
    <section
      className="border-y border-border-subtle bg-surface-elevated"
      id="contribute"
    >
      <SectionContainer className="grid gap-lg py-xxl lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            copy="ImpulseUI Native is shaped in the open. Explore the source, report issues, suggest improvements, and contribute new ideas."
            eyebrow="Contribute"
            title="Build it with us."
          />
          <div className="mt-msm flex flex-wrap gap-xs">
            <a
              className={`${actionBase} border-surface-inverse bg-surface-inverse text-surface-inverse-contrast`}
              href={project.repository}
            >
              <GithubLogoIcon className="size-sm" /> Repository
            </a>
            <a
              className={`${actionBase} border-primary bg-transparent text-primary`}
              href={`${project.repository}/issues`}
            >
              Open an issue
            </a>
          </div>
        </div>
        <div className="grid gap-xs sm:grid-cols-2">
          {cards.map(([icon, title, copy]) => (
            <a
              className="group rounded-md border border-border-subtle bg-surface-primary p-sm transition-colors hover:border-primary"
              href={project.repository}
              key={title}
            >
              <SystemIcon className="size-lg text-primary" name={icon} />
              <h3 className="mt-sm flex items-center gap-xxs text-xsm font-bold">
                {title}
                <SystemIcon
                  className="size-xs opacity-0 transition-opacity group-hover:opacity-100"
                  name="arrow"
                />
              </h3>
              <p className="mt-xxs text-caption text-text-disabled">{copy}</p>
            </a>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export function DocsAndFooter() {
  const groups = [
    ["Learn", ["Documentation", "Components", "Tokens", "Theming"]],
    ["Community", ["GitHub", "Contributing", "Issues", "Discussions"]],
    ["Project", ["Changelog", "Roadmap", "License", "Brand"]],
  ] as const;

  return (
    <>
      <section
        className="bg-surface-inverse text-center text-surface-inverse-contrast"
        id="docs"
      >
        <SectionContainer className="py-xxl">
          <WebTag variant="outlined">Documentation</WebTag>
          <h2 className="mx-auto mt-sm max-w-4xl text-display-medium font-extraBold tracking-[-0.03em] md:text-colossal">
            Build interfaces that{" "}
            <span className="text-primary">stay coherent.</span>
          </h2>
          <p className="mx-auto mt-sm max-w-2xl text-body-large text-white/60">
            Start with tokens, compose with components, and shape the system
            around your product.
          </p>
          <div className="mt-md flex flex-wrap justify-center gap-xs">
            <a
              className={`${actionBase} border-primary bg-primary text-primary-contrast`}
              href={project.repository}
            >
              Read documentation
              <SystemIcon className="size-sm" name="arrow" />
            </a>
            <a
              className={`${actionBase} border-white/20 bg-white/10 text-white`}
              href="#components"
            >
              Browse components
            </a>
            <a
              className={`${actionBase} border-white/20 text-white`}
              href={project.repository}
            >
              <GithubLogoIcon className="size-sm" /> View GitHub
            </a>
          </div>
        </SectionContainer>
      </section>
      <footer className="border-t border-border-subtle bg-surface-elevated">
        <SectionContainer className="grid gap-lg py-xl lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-xs">
              <ImpulseUINativeLogoIcon className="size-md text-primary" />
              <span className="text-title-6 font-bold">
                ImpulseUI <span className="text-primary">Native</span>
              </span>
            </div>
            <p className="mt-sm text-pretty text-body-small text-text-disabled">
              Open-source React Native UI system. Token-driven, composable, and
              built in the open.
            </p>
            <a
              aria-label="GitHub repository"
              className="mt-sm flex size-component-medium items-center justify-center rounded-md border border-border-default text-primary"
              href={project.repository}
            >
              <GithubLogoIcon className="size-sm" />
            </a>
          </div>
          {groups.map(([title, items]) => (
            <div key={title}>
              <p className="text-overline uppercase text-text-disabled">
                {title}
              </p>
              <ul className="mt-sm space-y-xs">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      className="text-body-small transition-colors hover:text-primary"
                      href={
                        item === "License"
                          ? project.licenseUrl
                          : project.repository
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </SectionContainer>
        <div className="border-t border-border-subtle">
          <SectionContainer className="flex flex-wrap items-center justify-between gap-xs py-sm text-caption text-text-disabled">
            <span>
              © {new Date().getFullYear()} ImpulseUI Native ·{" "}
              <a
                className="transition-colors hover:text-primary"
                href={project.licenseUrl}
              >
                {project.license} License
              </a>
            </span>
            <code>
              <PackageVersion prefix="v" suffix=" · main" />
            </code>
          </SectionContainer>
        </div>
      </footer>
    </>
  );
}

export function LandingPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <OpenSourceStrip />
        <ComponentsSection />
        <TokensSection />
        <ThemingSection />
        <ArchitectureSection />
        <DeveloperExperienceSection />
        <ContributeSection />
        <DocsAndFooter />
      </main>
    </>
  );
}
