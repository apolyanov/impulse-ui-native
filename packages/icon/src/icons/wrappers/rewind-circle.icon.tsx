import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RewindCircleBoldIcon } from "../bold";
import { RewindCircleDuotoneIcon } from "../duotone";
import { RewindCircleFillIcon } from "../fill";
import { RewindCircleLightIcon } from "../light";
import { RewindCircleRegularIcon } from "../regular";
import { RewindCircleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RewindCircleIcon = memo(function RewindCircle(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RewindCircleBoldIcon,
      duotone: RewindCircleDuotoneIcon,
      fill: RewindCircleFillIcon,
      light: RewindCircleLightIcon,
      regular: RewindCircleRegularIcon,
      thin: RewindCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
