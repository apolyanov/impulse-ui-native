import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HourglassBoldIcon } from "../bold/hourglass-bold.icon";
import { HourglassDuotoneIcon } from "../duotone/hourglass-duotone.icon";
import { HourglassFillIcon } from "../fill/hourglass-fill.icon";
import { HourglassLightIcon } from "../light/hourglass-light.icon";
import { HourglassRegularIcon } from "../regular/hourglass-regular.icon";
import { HourglassThinIcon } from "../thin/hourglass-thin.icon";

export const HourglassIcon = memo(function Hourglass(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassBoldIcon,
      duotone: HourglassDuotoneIcon,
      fill: HourglassFillIcon,
      light: HourglassLightIcon,
      regular: HourglassRegularIcon,
      thin: HourglassThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
