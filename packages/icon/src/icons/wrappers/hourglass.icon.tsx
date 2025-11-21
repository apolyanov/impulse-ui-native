import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassBoldIcon } from "../bold";
import { HourglassDuotoneIcon } from "../duotone";
import { HourglassFillIcon } from "../fill";
import { HourglassLightIcon } from "../light";
import { HourglassRegularIcon } from "../regular";
import { HourglassThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
