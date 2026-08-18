import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsInCardinalBoldIcon } from "../bold/arrows-in-cardinal-bold.icon";
import { ArrowsInCardinalDuotoneIcon } from "../duotone/arrows-in-cardinal-duotone.icon";
import { ArrowsInCardinalFillIcon } from "../fill/arrows-in-cardinal-fill.icon";
import { ArrowsInCardinalLightIcon } from "../light/arrows-in-cardinal-light.icon";
import { ArrowsInCardinalRegularIcon } from "../regular/arrows-in-cardinal-regular.icon";
import { ArrowsInCardinalThinIcon } from "../thin/arrows-in-cardinal-thin.icon";

export const ArrowsInCardinalIcon = memo(function ArrowsInCardinal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInCardinalBoldIcon,
      duotone: ArrowsInCardinalDuotoneIcon,
      fill: ArrowsInCardinalFillIcon,
      light: ArrowsInCardinalLightIcon,
      regular: ArrowsInCardinalRegularIcon,
      thin: ArrowsInCardinalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
