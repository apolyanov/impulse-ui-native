import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BracketsAngleBoldIcon } from "../bold";
import { BracketsAngleDuotoneIcon } from "../duotone";
import { BracketsAngleFillIcon } from "../fill";
import { BracketsAngleLightIcon } from "../light";
import { BracketsAngleRegularIcon } from "../regular";
import { BracketsAngleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BracketsAngleIcon = memo(function BracketsAngle(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BracketsAngleBoldIcon,
      duotone: BracketsAngleDuotoneIcon,
      fill: BracketsAngleFillIcon,
      light: BracketsAngleLightIcon,
      regular: BracketsAngleRegularIcon,
      thin: BracketsAngleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
