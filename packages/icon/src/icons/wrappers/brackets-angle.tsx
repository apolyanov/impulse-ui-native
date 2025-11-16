import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BracketsAngleBold } from "../bold";
import { BracketsAngleDuotone } from "../duotone";
import { BracketsAngleFill } from "../fill";
import { BracketsAngleLight } from "../light";
import { BracketsAngleRegular } from "../regular";
import { BracketsAngleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BracketsAngle = memo(function BracketsAngle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BracketsAngleBold,
      duotone: BracketsAngleDuotone,
      fill: BracketsAngleFill,
      light: BracketsAngleLight,
      regular: BracketsAngleRegular,
      thin: BracketsAngleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
