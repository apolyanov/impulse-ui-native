import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpinnerGapBoldIcon } from "../bold";
import { SpinnerGapDuotoneIcon } from "../duotone";
import { SpinnerGapFillIcon } from "../fill";
import { SpinnerGapLightIcon } from "../light";
import { SpinnerGapRegularIcon } from "../regular";
import { SpinnerGapThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpinnerGapIcon = memo(function SpinnerGap(
  props: IconWrapperProps
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
