import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BracketsAngleBoldIcon } from "../bold/brackets-angle-bold.icon";
import { BracketsAngleDuotoneIcon } from "../duotone/brackets-angle-duotone.icon";
import { BracketsAngleFillIcon } from "../fill/brackets-angle-fill.icon";
import { BracketsAngleLightIcon } from "../light/brackets-angle-light.icon";
import { BracketsAngleRegularIcon } from "../regular/brackets-angle-regular.icon";
import { BracketsAngleThinIcon } from "../thin/brackets-angle-thin.icon";

export const BracketsAngleIcon = memo(function BracketsAngle(
  props: IconWrapperProps,
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
