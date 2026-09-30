import type { ComponentProps } from "react";
import { memo, useState } from "react";

import { Pagination } from "@impulse-ui-native/pagination";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";

interface PaginationExampleDefinition {
  args: ComponentProps<typeof Pagination>;
  controlled?: boolean;
  description: string;
  name: string;
  props: StoryExamplePropDefinition[];
  title: string;
}

export const PaginationExampleDefinitions = [
  {
    name: "Default",
    title: "Default pagination",
    description:
      "Page buttons collapse into a compact window when the result has many pages.",
    props: [
      {
        name: "defaultPage",
        value: "1",
        description: "Starts uncontrolled pagination on the first page.",
      },
      {
        name: "pageCount",
        value: "12",
        description: "Defines the available page range.",
      },
    ],
    args: { defaultPage: 1, pageCount: 12 },
  },
  {
    name: "CompactNative",
    title: "Compact native pagination",
    description:
      "A narrow mobile layout keeps only previous, status, and next controls visible.",
    props: [
      {
        name: "compact",
        value: "true",
        description: "Replaces individual page buttons with a page summary.",
      },
    ],
    args: { compact: true, defaultPage: 3, pageCount: 12 },
  },
  {
    name: "AdaptiveWindow",
    title: "Adaptive page window",
    description:
      "The numbered window condenses around the current page when its measured width cannot hold the full layout.",
    props: [
      {
        name: "style",
        value: "{ width: 304 }",
        description: "Constrains the medium control to its five-item window.",
      },
    ],
    args: { defaultPage: 6, pageCount: 12, style: { width: 304 } },
  },
  {
    name: "OverflowStart",
    title: "Overflow near the start",
    description:
      "The leading pages remain visible while the undisplayed range is represented by an ellipsis.",
    props: [],
    args: { defaultPage: 3, pageCount: 12 },
  },
  {
    name: "OverflowMiddle",
    title: "Overflow around the current page",
    description:
      "The current page and its immediate neighbors stay visible between the first and last pages.",
    props: [],
    args: { defaultPage: 6, pageCount: 12 },
  },
  ...(["small", "medium", "large"] as const).map((size) => ({
    name: `${size.charAt(0).toUpperCase()}${size.slice(1)}`,
    title: `${size} pagination`,
    description: `The ${size} size adjusts control geometry, type, icons, and touch expansion together.`,
    props: [
      {
        name: "size",
        value: size,
        description: `Uses the shared ${size} component size.`,
      },
    ],
    args: { defaultPage: 1, pageCount: 5, size },
  })),
  {
    name: "Disabled",
    title: "Disabled pagination",
    description:
      "Disabled state blocks every page and navigation action while preserving the current page context.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Disables every interactive item.",
      },
    ],
    args: { defaultPage: 3, disabled: true, pageCount: 8 },
  },
  {
    name: "Controlled",
    title: "Controlled pagination",
    description:
      "Controlled mode keeps the active page in application or data-fetching state.",
    props: [
      {
        name: "page",
        value: "state",
        description: "Receives the current page.",
      },
      {
        name: "onPageChange",
        value: "setState",
        description: "Receives the requested page.",
      },
    ],
    args: { defaultPage: undefined, page: 4, pageCount: 12 },
    controlled: true,
  },
] satisfies PaginationExampleDefinition[];

interface PaginationExampleProps {
  elevated?: boolean;
  example: PaginationExampleDefinition;
}

export const PaginationExample = memo(function PaginationExample({
  elevated,
  example,
}: PaginationExampleProps) {
  const [page, setPage] = useState(example.args.page ?? 1);

  const pagination = example.controlled ? (
    <Pagination
      compact={example.args.compact}
      disabled={example.args.disabled}
      page={page}
      pageCount={example.args.pageCount}
      size={example.args.size}
      onPageChange={setPage}
    />
  ) : (
    <Pagination {...example.args} />
  );

  return (
    <StoryExample
      description={example.description}
      elevated={elevated}
      props={example.props}
      title={example.title}
    >
      {pagination}
    </StoryExample>
  );
});
