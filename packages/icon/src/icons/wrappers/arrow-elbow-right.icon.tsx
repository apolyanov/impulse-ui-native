import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowElbowRightBoldIcon } from "../bold/arrow-elbow-right-bold.icon";
import { ArrowElbowRightDuotoneIcon } from "../duotone/arrow-elbow-right-duotone.icon";
import { ArrowElbowRightFillIcon } from "../fill/arrow-elbow-right-fill.icon";
import { ArrowElbowRightLightIcon } from "../light/arrow-elbow-right-light.icon";
import { ArrowElbowRightRegularIcon } from "../regular/arrow-elbow-right-regular.icon";
import { ArrowElbowRightThinIcon } from "../thin/arrow-elbow-right-thin.icon";

export const ArrowElbowRightIcon = memo(function ArrowElbowRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowRightBoldIcon,
      duotone: ArrowElbowRightDuotoneIcon,
      fill: ArrowElbowRightFillIcon,
      light: ArrowElbowRightLightIcon,
      regular: ArrowElbowRightRegularIcon,
      thin: ArrowElbowRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
