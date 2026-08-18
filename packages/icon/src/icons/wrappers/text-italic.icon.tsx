import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextItalicBoldIcon } from "../bold/text-italic-bold.icon";
import { TextItalicDuotoneIcon } from "../duotone/text-italic-duotone.icon";
import { TextItalicFillIcon } from "../fill/text-italic-fill.icon";
import { TextItalicLightIcon } from "../light/text-italic-light.icon";
import { TextItalicRegularIcon } from "../regular/text-italic-regular.icon";
import { TextItalicThinIcon } from "../thin/text-italic-thin.icon";

export const TextItalicIcon = memo(function TextItalic(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextItalicBoldIcon,
      duotone: TextItalicDuotoneIcon,
      fill: TextItalicFillIcon,
      light: TextItalicLightIcon,
      regular: TextItalicRegularIcon,
      thin: TextItalicThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
