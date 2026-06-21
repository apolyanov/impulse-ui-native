import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SkipForwardCircleBoldIcon } from "../bold";
import { SkipForwardCircleDuotoneIcon } from "../duotone";
import { SkipForwardCircleFillIcon } from "../fill";
import { SkipForwardCircleLightIcon } from "../light";
import { SkipForwardCircleRegularIcon } from "../regular";
import { SkipForwardCircleThinIcon } from "../thin";

export const SkipForwardCircleIcon = memo(function SkipForwardCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkipForwardCircleBoldIcon,
      duotone: SkipForwardCircleDuotoneIcon,
      fill: SkipForwardCircleFillIcon,
      light: SkipForwardCircleLightIcon,
      regular: SkipForwardCircleRegularIcon,
      thin: SkipForwardCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
