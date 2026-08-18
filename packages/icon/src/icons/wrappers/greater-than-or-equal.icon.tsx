import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GreaterThanOrEqualBoldIcon } from "../bold/greater-than-or-equal-bold.icon";
import { GreaterThanOrEqualDuotoneIcon } from "../duotone/greater-than-or-equal-duotone.icon";
import { GreaterThanOrEqualFillIcon } from "../fill/greater-than-or-equal-fill.icon";
import { GreaterThanOrEqualLightIcon } from "../light/greater-than-or-equal-light.icon";
import { GreaterThanOrEqualRegularIcon } from "../regular/greater-than-or-equal-regular.icon";
import { GreaterThanOrEqualThinIcon } from "../thin/greater-than-or-equal-thin.icon";

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
