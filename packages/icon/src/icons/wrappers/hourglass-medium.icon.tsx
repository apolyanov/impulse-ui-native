import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HourglassMediumBoldIcon } from "../bold/hourglass-medium-bold.icon";
import { HourglassMediumDuotoneIcon } from "../duotone/hourglass-medium-duotone.icon";
import { HourglassMediumFillIcon } from "../fill/hourglass-medium-fill.icon";
import { HourglassMediumLightIcon } from "../light/hourglass-medium-light.icon";
import { HourglassMediumRegularIcon } from "../regular/hourglass-medium-regular.icon";
import { HourglassMediumThinIcon } from "../thin/hourglass-medium-thin.icon";

export const HourglassMediumIcon = memo(function HourglassMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassMediumBoldIcon,
      duotone: HourglassMediumDuotoneIcon,
      fill: HourglassMediumFillIcon,
      light: HourglassMediumLightIcon,
      regular: HourglassMediumRegularIcon,
      thin: HourglassMediumThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
