import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowElbowUpLeftBoldIcon } from "../bold/arrow-elbow-up-left-bold.icon";
import { ArrowElbowUpLeftDuotoneIcon } from "../duotone/arrow-elbow-up-left-duotone.icon";
import { ArrowElbowUpLeftFillIcon } from "../fill/arrow-elbow-up-left-fill.icon";
import { ArrowElbowUpLeftLightIcon } from "../light/arrow-elbow-up-left-light.icon";
import { ArrowElbowUpLeftRegularIcon } from "../regular/arrow-elbow-up-left-regular.icon";
import { ArrowElbowUpLeftThinIcon } from "../thin/arrow-elbow-up-left-thin.icon";

export const ArrowElbowUpLeftIcon = memo(function ArrowElbowUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowUpLeftBoldIcon,
      duotone: ArrowElbowUpLeftDuotoneIcon,
      fill: ArrowElbowUpLeftFillIcon,
      light: ArrowElbowUpLeftLightIcon,
      regular: ArrowElbowUpLeftRegularIcon,
      thin: ArrowElbowUpLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
