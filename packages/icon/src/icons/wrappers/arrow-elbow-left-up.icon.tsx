import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowElbowLeftUpBoldIcon } from "../bold/arrow-elbow-left-up-bold.icon";
import { ArrowElbowLeftUpDuotoneIcon } from "../duotone/arrow-elbow-left-up-duotone.icon";
import { ArrowElbowLeftUpFillIcon } from "../fill/arrow-elbow-left-up-fill.icon";
import { ArrowElbowLeftUpLightIcon } from "../light/arrow-elbow-left-up-light.icon";
import { ArrowElbowLeftUpRegularIcon } from "../regular/arrow-elbow-left-up-regular.icon";
import { ArrowElbowLeftUpThinIcon } from "../thin/arrow-elbow-left-up-thin.icon";

export const ArrowElbowLeftUpIcon = memo(function ArrowElbowLeftUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowLeftUpBoldIcon,
      duotone: ArrowElbowLeftUpDuotoneIcon,
      fill: ArrowElbowLeftUpFillIcon,
      light: ArrowElbowLeftUpLightIcon,
      regular: ArrowElbowLeftUpRegularIcon,
      thin: ArrowElbowLeftUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
