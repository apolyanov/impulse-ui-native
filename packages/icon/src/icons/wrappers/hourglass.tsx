import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassBold } from "../bold";
import { HourglassDuotone } from "../duotone";
import { HourglassFill } from "../fill";
import { HourglassLight } from "../light";
import { HourglassRegular } from "../regular";
import { HourglassThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Hourglass = memo(function Hourglass(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassBold,
      duotone: HourglassDuotone,
      fill: HourglassFill,
      light: HourglassLight,
      regular: HourglassRegular,
      thin: HourglassThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
