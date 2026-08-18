import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WheelchairBoldIcon } from "../bold/wheelchair-bold.icon";
import { WheelchairDuotoneIcon } from "../duotone/wheelchair-duotone.icon";
import { WheelchairFillIcon } from "../fill/wheelchair-fill.icon";
import { WheelchairLightIcon } from "../light/wheelchair-light.icon";
import { WheelchairRegularIcon } from "../regular/wheelchair-regular.icon";
import { WheelchairThinIcon } from "../thin/wheelchair-thin.icon";

export const WheelchairIcon = memo(function Wheelchair(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WheelchairBoldIcon,
      duotone: WheelchairDuotoneIcon,
      fill: WheelchairFillIcon,
      light: WheelchairLightIcon,
      regular: WheelchairRegularIcon,
      thin: WheelchairThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
