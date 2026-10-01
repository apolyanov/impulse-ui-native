import type { DeepPartial } from "@impulse-ui-native/core";
import type { PrimitiveThemeTokens } from "@impulse-ui-native/theme";

export const carouselSlides = [
  {
    key: "lake",
    title: "Discover somewhere new",
    uri: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=80",
  },
  {
    key: "mountains",
    title: "Take the scenic route",
    uri: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
  },
  {
    key: "forest",
    title: "Make room to explore",
    uri: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
  },
  {
    key: "coast",
    title: "Find your next escape",
    uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
  },
  {
    key: "adventure",
    title: "A different perspective",
    uri: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80",
  },
];

export const carouselDarkOverride: { dark: DeepPartial<PrimitiveThemeTokens> } =
  {
    dark: {
      colors: {
        surface: {
          primary: { value: "#16191d" },
          elevated: { value: "#212529" },
          secondary: { value: "#212529" },
        },
        text: { primary: "#ffffff", secondary: "#f1f3f5", tertiary: "#adb5bd" },
        border: { subtle: { value: "#343a40" }, default: { value: "#495057" } },
      },
    },
  };
