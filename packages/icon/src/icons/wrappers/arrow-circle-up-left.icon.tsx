import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowCircleUpLeftBoldIcon } from "../bold/arrow-circle-up-left-bold.icon";
import { ArrowCircleUpLeftDuotoneIcon } from "../duotone/arrow-circle-up-left-duotone.icon";
import { ArrowCircleUpLeftFillIcon } from "../fill/arrow-circle-up-left-fill.icon";
import { ArrowCircleUpLeftLightIcon } from "../light/arrow-circle-up-left-light.icon";
import { ArrowCircleUpLeftRegularIcon } from "../regular/arrow-circle-up-left-regular.icon";
import { ArrowCircleUpLeftThinIcon } from "../thin/arrow-circle-up-left-thin.icon";

export const ArrowCircleUpLeftIcon = memo(function ArrowCircleUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleUpLeftBoldIcon,
      duotone: ArrowCircleUpLeftDuotoneIcon,
      fill: ArrowCircleUpLeftFillIcon,
      light: ArrowCircleUpLeftLightIcon,
      regular: ArrowCircleUpLeftRegularIcon,
      thin: ArrowCircleUpLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
