import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PauseCircleBoldIcon } from "../bold/pause-circle-bold.icon";
import { PauseCircleDuotoneIcon } from "../duotone/pause-circle-duotone.icon";
import { PauseCircleFillIcon } from "../fill/pause-circle-fill.icon";
import { PauseCircleLightIcon } from "../light/pause-circle-light.icon";
import { PauseCircleRegularIcon } from "../regular/pause-circle-regular.icon";
import { PauseCircleThinIcon } from "../thin/pause-circle-thin.icon";

export const PauseCircleIcon = memo(function PauseCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PauseCircleBoldIcon,
      duotone: PauseCircleDuotoneIcon,
      fill: PauseCircleFillIcon,
      light: PauseCircleLightIcon,
      regular: PauseCircleRegularIcon,
      thin: PauseCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
