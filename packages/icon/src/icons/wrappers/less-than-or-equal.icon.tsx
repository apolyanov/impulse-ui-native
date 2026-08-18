import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LessThanOrEqualBoldIcon } from "../bold/less-than-or-equal-bold.icon";
import { LessThanOrEqualDuotoneIcon } from "../duotone/less-than-or-equal-duotone.icon";
import { LessThanOrEqualFillIcon } from "../fill/less-than-or-equal-fill.icon";
import { LessThanOrEqualLightIcon } from "../light/less-than-or-equal-light.icon";
import { LessThanOrEqualRegularIcon } from "../regular/less-than-or-equal-regular.icon";
import { LessThanOrEqualThinIcon } from "../thin/less-than-or-equal-thin.icon";

export const LessThanOrEqualIcon = memo(function LessThanOrEqual(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LessThanOrEqualBoldIcon,
      duotone: LessThanOrEqualDuotoneIcon,
      fill: LessThanOrEqualFillIcon,
      light: LessThanOrEqualLightIcon,
      regular: LessThanOrEqualRegularIcon,
      thin: LessThanOrEqualThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
