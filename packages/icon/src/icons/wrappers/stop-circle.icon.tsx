import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StopCircleBoldIcon } from "../bold/stop-circle-bold.icon";
import { StopCircleDuotoneIcon } from "../duotone/stop-circle-duotone.icon";
import { StopCircleFillIcon } from "../fill/stop-circle-fill.icon";
import { StopCircleLightIcon } from "../light/stop-circle-light.icon";
import { StopCircleRegularIcon } from "../regular/stop-circle-regular.icon";
import { StopCircleThinIcon } from "../thin/stop-circle-thin.icon";

export const StopCircleIcon = memo(function StopCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StopCircleBoldIcon,
      duotone: StopCircleDuotoneIcon,
      fill: StopCircleFillIcon,
      light: StopCircleLightIcon,
      regular: StopCircleRegularIcon,
      thin: StopCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
