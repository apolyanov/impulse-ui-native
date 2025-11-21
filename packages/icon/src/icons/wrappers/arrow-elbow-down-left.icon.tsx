import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowDownLeftBoldIcon } from "../bold";
import { ArrowElbowDownLeftDuotoneIcon } from "../duotone";
import { ArrowElbowDownLeftFillIcon } from "../fill";
import { ArrowElbowDownLeftLightIcon } from "../light";
import { ArrowElbowDownLeftRegularIcon } from "../regular";
import { ArrowElbowDownLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowDownLeftIcon = memo(function ArrowElbowDownLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowDownLeftBoldIcon,
      duotone: ArrowElbowDownLeftDuotoneIcon,
      fill: ArrowElbowDownLeftFillIcon,
      light: ArrowElbowDownLeftLightIcon,
      regular: ArrowElbowDownLeftRegularIcon,
      thin: ArrowElbowDownLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
