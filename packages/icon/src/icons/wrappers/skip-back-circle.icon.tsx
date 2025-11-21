import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SkipBackCircleBoldIcon } from "../bold";
import { SkipBackCircleDuotoneIcon } from "../duotone";
import { SkipBackCircleFillIcon } from "../fill";
import { SkipBackCircleLightIcon } from "../light";
import { SkipBackCircleRegularIcon } from "../regular";
import { SkipBackCircleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SkipBackCircleIcon = memo(function SkipBackCircle(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkipBackCircleBoldIcon,
      duotone: SkipBackCircleDuotoneIcon,
      fill: SkipBackCircleFillIcon,
      light: SkipBackCircleLightIcon,
      regular: SkipBackCircleRegularIcon,
      thin: SkipBackCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
