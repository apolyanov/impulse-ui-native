import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GreaterThanOrEqualBoldIcon } from "../bold";
import { GreaterThanOrEqualDuotoneIcon } from "../duotone";
import { GreaterThanOrEqualFillIcon } from "../fill";
import { GreaterThanOrEqualLightIcon } from "../light";
import { GreaterThanOrEqualRegularIcon } from "../regular";
import { GreaterThanOrEqualThinIcon } from "../thin";

export const GreaterThanOrEqualIcon = memo(function GreaterThanOrEqual(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GreaterThanOrEqualBoldIcon,
      duotone: GreaterThanOrEqualDuotoneIcon,
      fill: GreaterThanOrEqualFillIcon,
      light: GreaterThanOrEqualLightIcon,
      regular: GreaterThanOrEqualRegularIcon,
      thin: GreaterThanOrEqualThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
