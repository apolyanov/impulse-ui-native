import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiceFiveBold } from "../bold";
import { DiceFiveDuotone } from "../duotone";
import { DiceFiveFill } from "../fill";
import { DiceFiveLight } from "../light";
import { DiceFiveRegular } from "../regular";
import { DiceFiveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiceFive = memo(function DiceFive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceFiveBold,
      duotone: DiceFiveDuotone,
      fill: DiceFiveFill,
      light: DiceFiveLight,
      regular: DiceFiveRegular,
      thin: DiceFiveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
