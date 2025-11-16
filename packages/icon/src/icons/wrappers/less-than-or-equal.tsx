import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LessThanOrEqualBold } from "../bold";
import { LessThanOrEqualDuotone } from "../duotone";
import { LessThanOrEqualFill } from "../fill";
import { LessThanOrEqualLight } from "../light";
import { LessThanOrEqualRegular } from "../regular";
import { LessThanOrEqualThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LessThanOrEqual = memo(function LessThanOrEqual(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LessThanOrEqualBold,
      duotone: LessThanOrEqualDuotone,
      fill: LessThanOrEqualFill,
      light: LessThanOrEqualLight,
      regular: LessThanOrEqualRegular,
      thin: LessThanOrEqualThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
