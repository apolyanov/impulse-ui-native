import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SkipForwardBoldIcon } from "../bold/skip-forward-bold.icon";
import { SkipForwardDuotoneIcon } from "../duotone/skip-forward-duotone.icon";
import { SkipForwardFillIcon } from "../fill/skip-forward-fill.icon";
import { SkipForwardLightIcon } from "../light/skip-forward-light.icon";
import { SkipForwardRegularIcon } from "../regular/skip-forward-regular.icon";
import { SkipForwardThinIcon } from "../thin/skip-forward-thin.icon";

export const SkipForwardIcon = memo(function SkipForward(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkipForwardBoldIcon,
      duotone: SkipForwardDuotoneIcon,
      fill: SkipForwardFillIcon,
      light: SkipForwardLightIcon,
      regular: SkipForwardRegularIcon,
      thin: SkipForwardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
