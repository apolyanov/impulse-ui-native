import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HourglassMediumBoldIcon } from "../bold";
import { HourglassMediumDuotoneIcon } from "../duotone";
import { HourglassMediumFillIcon } from "../fill";
import { HourglassMediumLightIcon } from "../light";
import { HourglassMediumRegularIcon } from "../regular";
import { HourglassMediumThinIcon } from "../thin";

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
