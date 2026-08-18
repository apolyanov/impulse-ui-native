import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextStrikethroughBoldIcon } from "../bold/text-strikethrough-bold.icon";
import { TextStrikethroughDuotoneIcon } from "../duotone/text-strikethrough-duotone.icon";
import { TextStrikethroughFillIcon } from "../fill/text-strikethrough-fill.icon";
import { TextStrikethroughLightIcon } from "../light/text-strikethrough-light.icon";
import { TextStrikethroughRegularIcon } from "../regular/text-strikethrough-regular.icon";
import { TextStrikethroughThinIcon } from "../thin/text-strikethrough-thin.icon";

export const TextStrikethroughIcon = memo(function TextStrikethrough(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextStrikethroughBoldIcon,
      duotone: TextStrikethroughDuotoneIcon,
      fill: TextStrikethroughFillIcon,
      light: TextStrikethroughLightIcon,
      regular: TextStrikethroughRegularIcon,
      thin: TextStrikethroughThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
