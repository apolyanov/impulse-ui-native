import { useMemo } from "react";
import {
  Group,
  Paragraph,
  Skia,
  SkTextFontFeatures,
  SkTextStyle,
} from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import {
  LabelDefaultHorizontalAlignment,
  LabelDefaultVerticalAlignment,
  TabularNumsFeature,
} from "../../constants";
import { LabelProps } from "../../types";
import {
  createParagraphBuilder,
  getLabelTextAlign,
  getLabelY,
} from "../../utils";
import { normalizeChartNumber } from "../../utils/chart-number.util";
import { resolveChartLabelTokens } from "../../utils/chart-theme.util";

export const Label = memo(function Label(props: LabelProps) {
  const {
    color,
    fontManager,
    fontSize,
    fontFamily,
    fontWeight,
    horizontalAlign = LabelDefaultHorizontalAlignment,
    rect,
    rotation = 0,
    text,
    theme,
    tnum,
    maxLines = 1,
    verticalAlign = LabelDefaultVerticalAlignment,
  } = props;

  const typography = resolveChartLabelTokens(theme);
  const resolvedColor = color ?? typography.color;
  const resolvedFontSize = normalizeChartNumber(
    fontSize,
    typography.fontSize,
    1,
  );
  const resolvedFontFamily = fontFamily ?? typography.fontFamily;
  const resolvedFontWeight = fontWeight ?? typography.fontWeight;
  const resolvedMaxLines = Math.floor(normalizeChartNumber(maxLines, 1, 1));

  const paragraph = useMemo(() => {
    const fontFeatures: SkTextFontFeatures[] = [];

    if (tnum) {
      fontFeatures.push(TabularNumsFeature);
    }

    const textStyle: SkTextStyle = {
      color: Skia.Color(resolvedColor),
      fontSize: resolvedFontSize,
      fontFeatures,
      fontFamilies: [resolvedFontFamily],
      fontStyle: { weight: resolvedFontWeight },
    };

    const result = createParagraphBuilder({
      paragraphStyle: {
        ellipsis: "\u2026",
        maxLines: resolvedMaxLines,
        textAlign: getLabelTextAlign(horizontalAlign),
      },
      typefaceProvider: fontManager,
    })
      .pushStyle(textStyle)
      .addText(text)
      .pop()
      .build();

    result.layout(normalizeChartNumber(rect.width, 0));

    return result;
  }, [
    resolvedColor,
    fontManager,
    resolvedFontFamily,
    resolvedFontSize,
    resolvedFontWeight,
    horizontalAlign,
    rect.width,
    text,
    tnum,
    resolvedMaxLines,
  ]);

  const rotationProps = useMemo(
    () => ({
      origin: {
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
      },
      transform: [{ rotate: (rotation * Math.PI) / 180 }],
    }),
    [rect.height, rect.width, rect.x, rect.y, rotation],
  );

  if (!paragraph) {
    return null;
  }

  const y = getLabelY(rect, paragraph.getHeight(), verticalAlign);

  return (
    <Group origin={rotationProps.origin} transform={rotationProps.transform}>
      <Paragraph paragraph={paragraph} x={rect.x} y={y} width={rect.width} />
    </Group>
  );
});
