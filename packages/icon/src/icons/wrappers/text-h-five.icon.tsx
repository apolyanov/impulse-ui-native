import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextHFiveBoldIcon } from "../bold/text-h-five-bold.icon";
import { TextHFiveDuotoneIcon } from "../duotone/text-h-five-duotone.icon";
import { TextHFiveFillIcon } from "../fill/text-h-five-fill.icon";
import { TextHFiveLightIcon } from "../light/text-h-five-light.icon";
import { TextHFiveRegularIcon } from "../regular/text-h-five-regular.icon";
import { TextHFiveThinIcon } from "../thin/text-h-five-thin.icon";

export const TextHFiveIcon = memo(function TextHFive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHFiveBoldIcon,
      duotone: TextHFiveDuotoneIcon,
      fill: TextHFiveFillIcon,
      light: TextHFiveLightIcon,
      regular: TextHFiveRegularIcon,
      thin: TextHFiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
