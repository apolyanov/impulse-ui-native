import { FontWeight, SkTypefaceFontProvider } from "@shopify/react-native-skia";

import { AppTheme } from "@impulse-ui-native/theme";

import { ChartRect } from "./common.types";

export type LabelHorizontalAlignment = "left" | "center" | "right";
export type LabelVerticalAlignment = "top" | "center" | "bottom";

export interface LabelProps {
  text: string;
  rect: ChartRect;
  theme: AppTheme;
  horizontalAlign?: LabelHorizontalAlignment;
  verticalAlign?: LabelVerticalAlignment;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: FontWeight;
  fontManager?: SkTypefaceFontProvider;
  maxLines?: number;
  rotation?: number;
  tnum?: boolean;
}
