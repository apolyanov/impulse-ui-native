import { TextAlign } from "@shopify/react-native-skia";

import {
  ChartRect,
  LabelHorizontalAlignment,
  LabelVerticalAlignment,
} from "../types";

export function getLabelTextAlign(
  alignment: LabelHorizontalAlignment,
): TextAlign {
  if (alignment === "center") {
    return TextAlign.Center;
  }

  if (alignment === "right") {
    return TextAlign.Right;
  }

  return TextAlign.Left;
}

export function getLabelY(
  rect: ChartRect,
  paragraphHeight: number,
  alignment: LabelVerticalAlignment,
): number {
  if (alignment === "center") {
    return rect.y + (rect.height - paragraphHeight) / 2;
  }

  if (alignment === "bottom") {
    return rect.y + rect.height - paragraphHeight;
  }

  return rect.y;
}
