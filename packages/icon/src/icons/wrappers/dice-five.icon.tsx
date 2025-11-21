import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiceFiveBoldIcon } from "../bold";
import { DiceFiveDuotoneIcon } from "../duotone";
import { DiceFiveFillIcon } from "../fill";
import { DiceFiveLightIcon } from "../light";
import { DiceFiveRegularIcon } from "../regular";
import { DiceFiveThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiceFiveIcon = memo(function DiceFive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceFiveBoldIcon,
      duotone: DiceFiveDuotoneIcon,
      fill: DiceFiveFillIcon,
      light: DiceFiveLightIcon,
      regular: DiceFiveRegularIcon,
      thin: DiceFiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
