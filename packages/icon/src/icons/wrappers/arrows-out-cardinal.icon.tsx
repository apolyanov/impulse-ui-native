import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsOutCardinalBoldIcon } from "../bold/arrows-out-cardinal-bold.icon";
import { ArrowsOutCardinalDuotoneIcon } from "../duotone/arrows-out-cardinal-duotone.icon";
import { ArrowsOutCardinalFillIcon } from "../fill/arrows-out-cardinal-fill.icon";
import { ArrowsOutCardinalLightIcon } from "../light/arrows-out-cardinal-light.icon";
import { ArrowsOutCardinalRegularIcon } from "../regular/arrows-out-cardinal-regular.icon";
import { ArrowsOutCardinalThinIcon } from "../thin/arrows-out-cardinal-thin.icon";

export const ArrowsOutCardinalIcon = memo(function ArrowsOutCardinal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsOutCardinalBoldIcon,
      duotone: ArrowsOutCardinalDuotoneIcon,
      fill: ArrowsOutCardinalFillIcon,
      light: ArrowsOutCardinalLightIcon,
      regular: ArrowsOutCardinalRegularIcon,
      thin: ArrowsOutCardinalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
