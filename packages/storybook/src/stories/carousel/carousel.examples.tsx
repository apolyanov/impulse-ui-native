import { memo, useState } from "react";

import type { CarouselProps } from "@impulse-ui-native/carousel";
import { Carousel } from "@impulse-ui-native/carousel";
import { useEventCallback } from "@impulse-ui-native/core";
import { Button, View } from "@impulse-ui-native/primitives";
import { DarkTheme, ThemeProvider, useSpace } from "@impulse-ui-native/theme";

import { StoryExample } from "../../components/story-example";
import { CarouselSlide } from "./carousel-slide";
import { carouselSlides } from "./carousel.fixtures";

interface CarouselExampleDefinition {
  name: string;
  title: string;
  description: string;
  args: CarouselProps;
  controlled?: boolean;
  dark?: boolean;
  count?: number;
  dynamic?: boolean;
}

export const CarouselExampleDefinitions: CarouselExampleDefinition[] = [
  {
    name: "Default",
    title: "Default carousel",
    description:
      "Swipe or use default filled buttons. The second slide starts selected.",
    args: { defaultIndex: 1 },
  },
  {
    name: "Peek",
    title: "Snap and peek",
    description:
      "Middle slides snap to the center with equal previews. The first aligns left and the last aligns right. Indicators and arrows update halfway between snap positions.",
    args: { defaultIndex: 1, peek: 32 },
  },
  {
    name: "Segments",
    title: "Segment indicators",
    description:
      "Tap a segment to navigate. Narrow layouts fall back to a counter.",
    args: { pagination: "segments", showNavigation: false },
  },
  {
    name: "Counter",
    title: "Compact counter",
    description:
      "A counter preserves space for content and default navigation buttons.",
    args: { pagination: "counter" },
  },
  {
    name: "ControlledRejected",
    title: "Controlled request declined",
    description:
      "The parent keeps index one. A swipe returns to that slide once it settles.",
    args: { index: 1 },
  },
  {
    name: "DynamicSlides",
    title: "Changing slide count",
    description:
      "Removing slides clamps the displayed index and realigns the viewport.",
    args: { defaultIndex: 4 },
    dynamic: true,
  },
  {
    name: "Disabled",
    title: "Disabled",
    description: "Swipe, navigation, and pagination are blocked.",
    args: { disabled: true, defaultIndex: 1 },
  },
  {
    name: "Controlled",
    title: "Controlled",
    description:
      "Application state owns the index, including external navigation.",
    args: { index: 1 },
    controlled: true,
  },
  {
    name: "DarkOverride",
    title: "Dark theme override",
    description:
      "Explicit primitive overrides show the proposed dark surface; default buttons retain their filled style.",
    args: { defaultIndex: 1, peek: 32 },
    dark: true,
  },
  {
    name: "SingleSlide",
    title: "Single slide",
    description: "One slide fills the viewport and has disabled navigation.",
    args: { peek: 32 },
    count: 1,
  },
  {
    name: "Empty",
    title: "Empty",
    description:
      "No slides render no navigation; the measured viewport remains stable.",
    args: {},
    count: 0,
  },
  {
    name: "Overflow",
    title: "Many slides",
    description:
      "Indicators become a compact counter when their full tap targets cannot fit.",
    args: {},
    count: 12,
  },
  {
    name: "ContentOnly",
    title: "Content only",
    description: "Hide navigation and indicators for swipe-only composition.",
    args: { showNavigation: false, pagination: "none", peek: 32 },
  },
];

export const CarouselExample = memo(function CarouselExample({
  example,
  elevated,
}: {
  example: CarouselExampleDefinition;
  elevated?: boolean;
}) {
  const space = useSpace();

  const [index, setIndex] = useState(example.args.index ?? 1);
  const [limited, setLimited] = useState(false);

  const nextExternal = useEventCallback(() =>
    setIndex((current) => (current + 1) % 5),
  );

  const toggleCount = useEventCallback(() => setLimited((current) => !current));

  const count =
    example.dynamic && limited ? 3 : (example.count ?? carouselSlides.length);
  const content = (
    <View gap={space.sm}>
      <Carousel
        {...example.args}
        index={example.controlled ? index : example.args.index}
        onIndexChange={
          example.controlled ? setIndex : example.args.onIndexChange
        }
      >
        {Array.from({ length: count }, (_, position) => {
          const slide = carouselSlides[position % carouselSlides.length];

          if (!slide) {
            return null;
          }

          return (
            <CarouselSlide
              key={`${slide.key}-${position}`}
              title={slide.title}
              uri={slide.uri}
            />
          );
        })}
      </Carousel>
      {example.controlled ? (
        <Button onPress={nextExternal}>Next from application state</Button>
      ) : null}
      {example.dynamic ? (
        <Button onPress={toggleCount}>
          {limited ? "Restore slides" : "Remove final two slides"}
        </Button>
      ) : null}
    </View>
  );

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      elevated={elevated}
    >
      {example.dark ? (
        <ThemeProvider scheme="dark">
          <View
            padding={space.sm}
            backgroundColor={DarkTheme.colors.surface.primary.value}
          >
            {content}
          </View>
        </ThemeProvider>
      ) : (
        content
      )}
    </StoryExample>
  );
});
