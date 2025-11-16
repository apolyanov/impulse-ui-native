import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassMediumBold } from "../bold";
import { HourglassMediumDuotone } from "../duotone";
import { HourglassMediumFill } from "../fill";
import { HourglassMediumLight } from "../light";
import { HourglassMediumRegular } from "../regular";
import { HourglassMediumThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassMedium = memo(function HourglassMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassMediumBold,
      duotone: HourglassMediumDuotone,
      fill: HourglassMediumFill,
      light: HourglassMediumLight,
      regular: HourglassMediumRegular,
      thin: HourglassMediumThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
