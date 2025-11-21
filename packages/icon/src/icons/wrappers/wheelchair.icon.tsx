import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WheelchairBoldIcon } from "../bold";
import { WheelchairDuotoneIcon } from "../duotone";
import { WheelchairFillIcon } from "../fill";
import { WheelchairLightIcon } from "../light";
import { WheelchairRegularIcon } from "../regular";
import { WheelchairThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WheelchairIcon = memo(function Wheelchair(
  props: IconWrapperProps
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
