import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowElbowDownLeftBoldIcon } from "../bold/arrow-elbow-down-left-bold.icon";
import { ArrowElbowDownLeftDuotoneIcon } from "../duotone/arrow-elbow-down-left-duotone.icon";
import { ArrowElbowDownLeftFillIcon } from "../fill/arrow-elbow-down-left-fill.icon";
import { ArrowElbowDownLeftLightIcon } from "../light/arrow-elbow-down-left-light.icon";
import { ArrowElbowDownLeftRegularIcon } from "../regular/arrow-elbow-down-left-regular.icon";
import { ArrowElbowDownLeftThinIcon } from "../thin/arrow-elbow-down-left-thin.icon";

export const ArrowElbowDownLeftIcon = memo(function ArrowElbowDownLeft(
  props: IconWrapperProps,
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
