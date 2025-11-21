import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PauseCircleBoldIcon } from "../bold";
import { PauseCircleDuotoneIcon } from "../duotone";
import { PauseCircleFillIcon } from "../fill";
import { PauseCircleLightIcon } from "../light";
import { PauseCircleRegularIcon } from "../regular";
import { PauseCircleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PauseCircleIcon = memo(function PauseCircle(
  props: IconWrapperProps
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
