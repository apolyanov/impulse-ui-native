import type { ComponentProps } from "react";
import { memo } from "react";

import { Typography } from "@impulse-ui-native/toolkit";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface TypographyExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Typography.Master>;
  Component: keyof typeof Typography;
}

const TypographySampleText =
  "The quick brown fox jumps over the lazy dog.";

export const TypographyExampleDefinitions = [
  {
    name: "Master",
    title: "Master",
    description:
      "Use Master as the base typography preset when text should inherit the default size and line height while keeping regular font weight.",
    props: [
      {
        name: "preset",
        value: "Master",
        description: "Uses the base text preset with regular font weight.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the visible text content.",
      },
    ],
    Component: "Master",
    args: {
      children: TypographySampleText,
    },
  },
  {
    name: "DisplayLarge",
    title: "Display large",
    description:
      "Use DisplayLarge for the most prominent hero-level headings and highly expressive marketing moments.",
    props: [
      {
        name: "preset",
        value: "DisplayLarge",
        description: "Uses bold weight with the largest display size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the display text content.",
      },
    ],
    Component: "DisplayLarge",
    args: {
      children: "Build beautiful native interfaces.",
    },
  },
  {
    name: "DisplayMedium",
    title: "Display medium",
    description:
      "Use DisplayMedium for major page introductions, onboarding headlines, or high-impact section titles.",
    props: [
      {
        name: "preset",
        value: "DisplayMedium",
        description: "Uses bold weight with a large display size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the display text content.",
      },
    ],
    Component: "DisplayMedium",
    args: {
      children: "Design faster with presets.",
    },
  },
  {
    name: "DisplaySmall",
    title: "Display small",
    description:
      "Use DisplaySmall for expressive headings that need more presence than regular titles without becoming oversized.",
    props: [
      {
        name: "preset",
        value: "DisplaySmall",
        description: "Uses semi-bold weight with a compact display size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the display text content.",
      },
    ],
    Component: "DisplaySmall",
    args: {
      children: "Readable, scalable typography.",
    },
  },
  {
    name: "Title1",
    title: "Title 1",
    description:
      "Use Title1 for top-level screen titles and important page-level headings.",
    props: [
      {
        name: "preset",
        value: "Title1",
        description: "Uses bold weight with the largest title size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the title text content.",
      },
    ],
    Component: "Title1",
    args: {
      children: "Dashboard",
    },
  },
  {
    name: "Title2",
    title: "Title 2",
    description:
      "Use Title2 for secondary page headings, feature sections, and large content groups.",
    props: [
      {
        name: "preset",
        value: "Title2",
        description: "Uses bold weight with a large title size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the title text content.",
      },
    ],
    Component: "Title2",
    args: {
      children: "Monthly overview",
    },
  },
  {
    name: "Title3",
    title: "Title 3",
    description:
      "Use Title3 for strong section headings, card group titles, and important content divisions.",
    props: [
      {
        name: "preset",
        value: "Title3",
        description: "Uses semi-bold weight with an extra-large title size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the title text content.",
      },
    ],
    Component: "Title3",
    args: {
      children: "Recent transactions",
    },
  },
  {
    name: "Title4",
    title: "Title 4",
    description:
      "Use Title4 for card titles, modal titles, and medium-emphasis headings.",
    props: [
      {
        name: "preset",
        value: "Title4",
        description: "Uses semi-bold weight with a large title size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the title text content.",
      },
    ],
    Component: "Title4",
    args: {
      children: "Spending insights",
    },
  },
  {
    name: "Title5",
    title: "Title 5",
    description:
      "Use Title5 for compact headings inside cards, rows, forms, and grouped controls.",
    props: [
      {
        name: "preset",
        value: "Title5",
        description: "Uses semi-bold weight with a medium title size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the title text content.",
      },
    ],
    Component: "Title5",
    args: {
      children: "Food category",
    },
  },
  {
    name: "Title6",
    title: "Title 6",
    description:
      "Use Title6 for the smallest headings, compact labels, dense cards, and tight layouts.",
    props: [
      {
        name: "preset",
        value: "Title6",
        description: "Uses semi-bold weight with a small title size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the title text content.",
      },
    ],
    Component: "Title6",
    args: {
      children: "Receipt details",
    },
  },
  {
    name: "Subtitle1",
    title: "Subtitle 1",
    description:
      "Use Subtitle1 for supportive headings, descriptive labels, or medium-emphasis text below titles.",
    props: [
      {
        name: "preset",
        value: "Subtitle1",
        description: "Uses medium font weight with comfortable line height.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the subtitle text content.",
      },
    ],
    Component: "Subtitle1",
    args: {
      children: "Track where your money goes.",
    },
  },
  {
    name: "Subtitle2",
    title: "Subtitle 2",
    description:
      "Use Subtitle2 for smaller supporting text, compact descriptions, and secondary context.",
    props: [
      {
        name: "preset",
        value: "Subtitle2",
        description: "Uses regular weight with a smaller subtitle size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the subtitle text content.",
      },
    ],
    Component: "Subtitle2",
    args: {
      children: "Updated just now",
    },
  },
  {
    name: "BodyLarge",
    title: "Body large",
    description:
      "Use BodyLarge for readable paragraph text that needs more breathing room or visual priority.",
    props: [
      {
        name: "preset",
        value: "BodyLarge",
        description: "Uses regular weight with medium font size and larger line height.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the body text content.",
      },
    ],
    Component: "BodyLarge",
    args: {
      children:
        "BodyLarge is useful for introductions, explanations, and content that should feel comfortable to read.",
    },
  },
  {
    name: "Body",
    title: "Body",
    description:
      "Use Body for default paragraph text, descriptions, labels, and general interface copy.",
    props: [
      {
        name: "preset",
        value: "Body",
        description: "Uses regular weight with the default body size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the body text content.",
      },
    ],
    Component: "Body",
    args: {
      children:
        "Body is the default readable text preset for most interface content.",
    },
  },
  {
    name: "BodySmall",
    title: "Body small",
    description:
      "Use BodySmall for compact descriptions, secondary metadata, dense lists, and supporting interface text.",
    props: [
      {
        name: "preset",
        value: "BodySmall",
        description: "Uses regular weight with a smaller body size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the small body text content.",
      },
    ],
    Component: "BodySmall",
    args: {
      children: "Used for compact details and secondary information.",
    },
  },
  {
    name: "Caption",
    title: "Caption",
    description:
      "Use Caption for helper labels, timestamps, annotations, and very compact supporting details.",
    props: [
      {
        name: "preset",
        value: "Caption",
        description: "Uses regular weight with an extra-small text size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the caption text content.",
      },
    ],
    Component: "Caption",
    args: {
      children: "Synced 2 minutes ago",
    },
  },
  {
    name: "Label",
    title: "Label",
    description:
      "Use Label for compact field labels, prop names, small controls, and metadata that needs medium emphasis.",
    props: [
      {
        name: "preset",
        value: "Label",
        description: "Uses medium font weight with an extra-small size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the label text content.",
      },
    ],
    Component: "Label",
    args: {
      children: "Amount",
    },
  },
  {
    name: "Overline",
    title: "Overline",
    description:
      "Use Overline for short uppercase section markers, labels above content, and structured documentation headings.",
    props: [
      {
        name: "preset",
        value: "Overline",
        description: "Uses uppercase text, semi-bold weight, and letter spacing.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the overline text content.",
      },
    ],
    Component: "Overline",
    args: {
      children: "Overview",
    },
  },
  {
    name: "Helper",
    title: "Helper",
    description:
      "Use Helper for field help, validation guidance, short explanations, and low-emphasis supporting text.",
    props: [
      {
        name: "preset",
        value: "Helper",
        description: "Uses regular weight with an extra-small helper size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the helper text content.",
      },
    ],
    Component: "Helper",
    args: {
      children: "Choose a category that best matches this transaction.",
    },
  },
  {
    name: "Code",
    title: "Code",
    description:
      "Use Code for prop values, tokens, identifiers, short snippets, and technical labels.",
    props: [
      {
        name: "preset",
        value: "Code",
        description: "Uses a monospace font family with a compact text size.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the code-like text content.",
      },
    ],
    Component: "Code",
    args: {
      children: "variant=\"filled\"",
    },
  },
  {
    name: "Quote",
    title: "Quote",
    description:
      "Use Quote for highlighted statements, testimonials, expressive notes, or italic emphasis blocks.",
    props: [
      {
        name: "preset",
        value: "Quote",
        description: "Uses italic styling with readable paragraph sizing.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the quote text content.",
      },
    ],
    Component: "Quote",
    args: {
      children: "Small improvements compound into better financial habits.",
    },
  },
  {
    name: "Eyebrow",
    title: "Eyebrow",
    description:
      "Use Eyebrow for lightweight uppercase context labels above headings or important content blocks.",
    props: [
      {
        name: "preset",
        value: "Eyebrow",
        description: "Uses uppercase text, medium weight, and letter spacing.",
      },
      {
        name: "children",
        value: "string",
        description: "Renders the eyebrow text content.",
      },
    ],
    Component: "Eyebrow",
    args: {
      children: "New feature",
    },
  },
] satisfies TypographyExampleDefinition[];

interface TypographyExampleProps {
  example: TypographyExampleDefinition;
  elevated?: boolean;
}

export const TypographyExample = memo(function TypographyExample({
  example,
  elevated,
}: TypographyExampleProps) {
  const Component = Typography[example.Component];

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <Component {...example.args} />
    </StoryExample>
  );
});
