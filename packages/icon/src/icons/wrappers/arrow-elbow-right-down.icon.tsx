import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowElbowRightDownBoldIcon } from "../bold/arrow-elbow-right-down-bold.icon";
import { ArrowElbowRightDownDuotoneIcon } from "../duotone/arrow-elbow-right-down-duotone.icon";
import { ArrowElbowRightDownFillIcon } from "../fill/arrow-elbow-right-down-fill.icon";
import { ArrowElbowRightDownLightIcon } from "../light/arrow-elbow-right-down-light.icon";
import { ArrowElbowRightDownRegularIcon } from "../regular/arrow-elbow-right-down-regular.icon";
import { ArrowElbowRightDownThinIcon } from "../thin/arrow-elbow-right-down-thin.icon";

export const ArrowElbowRightDownIcon = memo(function ArrowElbowRightDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowRightDownBoldIcon,
      duotone: ArrowElbowRightDownDuotoneIcon,
      fill: ArrowElbowRightDownFillIcon,
      light: ArrowElbowRightDownLightIcon,
      regular: ArrowElbowRightDownRegularIcon,
      thin: ArrowElbowRightDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
