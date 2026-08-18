import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowElbowUpRightBoldIcon } from "../bold/arrow-elbow-up-right-bold.icon";
import { ArrowElbowUpRightDuotoneIcon } from "../duotone/arrow-elbow-up-right-duotone.icon";
import { ArrowElbowUpRightFillIcon } from "../fill/arrow-elbow-up-right-fill.icon";
import { ArrowElbowUpRightLightIcon } from "../light/arrow-elbow-up-right-light.icon";
import { ArrowElbowUpRightRegularIcon } from "../regular/arrow-elbow-up-right-regular.icon";
import { ArrowElbowUpRightThinIcon } from "../thin/arrow-elbow-up-right-thin.icon";

export const ArrowElbowUpRightIcon = memo(function ArrowElbowUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowUpRightBoldIcon,
      duotone: ArrowElbowUpRightDuotoneIcon,
      fill: ArrowElbowUpRightFillIcon,
      light: ArrowElbowUpRightLightIcon,
      regular: ArrowElbowUpRightRegularIcon,
      thin: ArrowElbowUpRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
