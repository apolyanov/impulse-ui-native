import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowElbowRightUpBoldIcon } from "../bold/arrow-elbow-right-up-bold.icon";
import { ArrowElbowRightUpDuotoneIcon } from "../duotone/arrow-elbow-right-up-duotone.icon";
import { ArrowElbowRightUpFillIcon } from "../fill/arrow-elbow-right-up-fill.icon";
import { ArrowElbowRightUpLightIcon } from "../light/arrow-elbow-right-up-light.icon";
import { ArrowElbowRightUpRegularIcon } from "../regular/arrow-elbow-right-up-regular.icon";
import { ArrowElbowRightUpThinIcon } from "../thin/arrow-elbow-right-up-thin.icon";

export const ArrowElbowRightUpIcon = memo(function ArrowElbowRightUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowRightUpBoldIcon,
      duotone: ArrowElbowRightUpDuotoneIcon,
      fill: ArrowElbowRightUpFillIcon,
      light: ArrowElbowRightUpLightIcon,
      regular: ArrowElbowRightUpRegularIcon,
      thin: ArrowElbowRightUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
