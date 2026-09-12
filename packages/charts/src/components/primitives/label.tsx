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

  const paragraph = useMemo(() => {
    const fontFeatures: SkTextFontFeatures[] = [];

    if (tnum) {
      fontFeatures.push(TabularNumsFeature);
    }

    const textStyle: SkTextStyle = {
      color: Skia.Color(color ?? theme.colors.text.secondary),
      fontSize: fontSize ?? theme.fontSize.xs,
      fontFeatures,
    };

    if (fontFamily) {
      textStyle.fontFamilies = [fontFamily];
    }

    if (fontWeight !== undefined) {
      textStyle.fontStyle = { weight: fontWeight };
    }

    const result = createParagraphBuilder({
      paragraphStyle: {
        ellipsis: "\u2026",
        maxLines: Math.max(1, Math.floor(maxLines)),
        textAlign: getLabelTextAlign(horizontalAlign),
      },
      typefaceProvider: fontManager,
    })
      .pushStyle(textStyle)
      .addText(text)
      .pop()
      .build();

    result.layout(rect.width);

    return result;
  }, [
    color,
    fontManager,
    fontFamily,
    fontSize,
    fontWeight,
    horizontalAlign,
    rect.width,
    text,
    theme.colors.text.secondary,
    theme.fontSize.xs,
    tnum,
    maxLines,
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
