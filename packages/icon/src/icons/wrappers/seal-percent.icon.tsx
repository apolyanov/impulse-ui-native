import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SealPercentBoldIcon } from "../bold/seal-percent-bold.icon";
import { SealPercentDuotoneIcon } from "../duotone/seal-percent-duotone.icon";
import { SealPercentFillIcon } from "../fill/seal-percent-fill.icon";
import { SealPercentLightIcon } from "../light/seal-percent-light.icon";
import { SealPercentRegularIcon } from "../regular/seal-percent-regular.icon";
import { SealPercentThinIcon } from "../thin/seal-percent-thin.icon";

export const SealPercentIcon = memo(function SealPercent(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SealPercentBoldIcon,
      duotone: SealPercentDuotoneIcon,
      fill: SealPercentFillIcon,
      light: SealPercentLightIcon,
      regular: SealPercentRegularIcon,
      thin: SealPercentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
