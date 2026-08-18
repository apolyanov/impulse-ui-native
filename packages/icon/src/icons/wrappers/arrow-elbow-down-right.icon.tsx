import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowElbowDownRightBoldIcon } from "../bold/arrow-elbow-down-right-bold.icon";
import { ArrowElbowDownRightDuotoneIcon } from "../duotone/arrow-elbow-down-right-duotone.icon";
import { ArrowElbowDownRightFillIcon } from "../fill/arrow-elbow-down-right-fill.icon";
import { ArrowElbowDownRightLightIcon } from "../light/arrow-elbow-down-right-light.icon";
import { ArrowElbowDownRightRegularIcon } from "../regular/arrow-elbow-down-right-regular.icon";
import { ArrowElbowDownRightThinIcon } from "../thin/arrow-elbow-down-right-thin.icon";

export const ArrowElbowDownRightIcon = memo(function ArrowElbowDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowDownRightBoldIcon,
      duotone: ArrowElbowDownRightDuotoneIcon,
      fill: ArrowElbowDownRightFillIcon,
      light: ArrowElbowDownRightLightIcon,
      regular: ArrowElbowDownRightRegularIcon,
      thin: ArrowElbowDownRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
