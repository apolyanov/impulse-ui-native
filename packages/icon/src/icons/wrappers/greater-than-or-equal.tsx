import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GreaterThanOrEqualBold } from "../bold";
import { GreaterThanOrEqualDuotone } from "../duotone";
import { GreaterThanOrEqualFill } from "../fill";
import { GreaterThanOrEqualLight } from "../light";
import { GreaterThanOrEqualRegular } from "../regular";
import { GreaterThanOrEqualThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GreaterThanOrEqual = memo(function GreaterThanOrEqual(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GreaterThanOrEqualBold,
      duotone: GreaterThanOrEqualDuotone,
      fill: GreaterThanOrEqualFill,
      light: GreaterThanOrEqualLight,
      regular: GreaterThanOrEqualRegular,
      thin: GreaterThanOrEqualThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
