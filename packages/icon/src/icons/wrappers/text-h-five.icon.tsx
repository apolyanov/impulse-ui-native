import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextHFiveBoldIcon } from "../bold";
import { TextHFiveDuotoneIcon } from "../duotone";
import { TextHFiveFillIcon } from "../fill";
import { TextHFiveLightIcon } from "../light";
import { TextHFiveRegularIcon } from "../regular";
import { TextHFiveThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
