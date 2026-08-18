import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpinnerGapBoldIcon } from "../bold/spinner-gap-bold.icon";
import { SpinnerGapDuotoneIcon } from "../duotone/spinner-gap-duotone.icon";
import { SpinnerGapFillIcon } from "../fill/spinner-gap-fill.icon";
import { SpinnerGapLightIcon } from "../light/spinner-gap-light.icon";
import { SpinnerGapRegularIcon } from "../regular/spinner-gap-regular.icon";
import { SpinnerGapThinIcon } from "../thin/spinner-gap-thin.icon";

export const SpinnerGapIcon = memo(function SpinnerGap(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpinnerGapBoldIcon,
      duotone: SpinnerGapDuotoneIcon,
      fill: SpinnerGapFillIcon,
      light: SpinnerGapLightIcon,
      regular: SpinnerGapRegularIcon,
      thin: SpinnerGapThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
