import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FastForwardBoldIcon } from "../bold/fast-forward-bold.icon";
import { FastForwardDuotoneIcon } from "../duotone/fast-forward-duotone.icon";
import { FastForwardFillIcon } from "../fill/fast-forward-fill.icon";
import { FastForwardLightIcon } from "../light/fast-forward-light.icon";
import { FastForwardRegularIcon } from "../regular/fast-forward-regular.icon";
import { FastForwardThinIcon } from "../thin/fast-forward-thin.icon";

export const FastForwardIcon = memo(function FastForward(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FastForwardBoldIcon,
      duotone: FastForwardDuotoneIcon,
      fill: FastForwardFillIcon,
      light: FastForwardLightIcon,
      regular: FastForwardRegularIcon,
      thin: FastForwardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
