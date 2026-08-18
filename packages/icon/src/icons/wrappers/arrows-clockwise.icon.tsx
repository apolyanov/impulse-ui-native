import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsClockwiseBoldIcon } from "../bold/arrows-clockwise-bold.icon";
import { ArrowsClockwiseDuotoneIcon } from "../duotone/arrows-clockwise-duotone.icon";
import { ArrowsClockwiseFillIcon } from "../fill/arrows-clockwise-fill.icon";
import { ArrowsClockwiseLightIcon } from "../light/arrows-clockwise-light.icon";
import { ArrowsClockwiseRegularIcon } from "../regular/arrows-clockwise-regular.icon";
import { ArrowsClockwiseThinIcon } from "../thin/arrows-clockwise-thin.icon";

export const ArrowsClockwiseIcon = memo(function ArrowsClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsClockwiseBoldIcon,
      duotone: ArrowsClockwiseDuotoneIcon,
      fill: ArrowsClockwiseFillIcon,
      light: ArrowsClockwiseLightIcon,
      regular: ArrowsClockwiseRegularIcon,
      thin: ArrowsClockwiseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
