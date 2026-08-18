import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowElbowLeftBoldIcon } from "../bold/arrow-elbow-left-bold.icon";
import { ArrowElbowLeftDuotoneIcon } from "../duotone/arrow-elbow-left-duotone.icon";
import { ArrowElbowLeftFillIcon } from "../fill/arrow-elbow-left-fill.icon";
import { ArrowElbowLeftLightIcon } from "../light/arrow-elbow-left-light.icon";
import { ArrowElbowLeftRegularIcon } from "../regular/arrow-elbow-left-regular.icon";
import { ArrowElbowLeftThinIcon } from "../thin/arrow-elbow-left-thin.icon";

export const ArrowElbowLeftIcon = memo(function ArrowElbowLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowLeftBoldIcon,
      duotone: ArrowElbowLeftDuotoneIcon,
      fill: ArrowElbowLeftFillIcon,
      light: ArrowElbowLeftLightIcon,
      regular: ArrowElbowLeftRegularIcon,
      thin: ArrowElbowLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
