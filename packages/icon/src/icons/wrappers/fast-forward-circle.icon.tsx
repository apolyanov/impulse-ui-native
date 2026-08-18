import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FastForwardCircleBoldIcon } from "../bold/fast-forward-circle-bold.icon";
import { FastForwardCircleDuotoneIcon } from "../duotone/fast-forward-circle-duotone.icon";
import { FastForwardCircleFillIcon } from "../fill/fast-forward-circle-fill.icon";
import { FastForwardCircleLightIcon } from "../light/fast-forward-circle-light.icon";
import { FastForwardCircleRegularIcon } from "../regular/fast-forward-circle-regular.icon";
import { FastForwardCircleThinIcon } from "../thin/fast-forward-circle-thin.icon";

export const FastForwardCircleIcon = memo(function FastForwardCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FastForwardCircleBoldIcon,
      duotone: FastForwardCircleDuotoneIcon,
      fill: FastForwardCircleFillIcon,
      light: FastForwardCircleLightIcon,
      regular: FastForwardCircleRegularIcon,
      thin: FastForwardCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
