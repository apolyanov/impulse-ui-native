import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SunHorizonBoldIcon } from "../bold";
import { SunHorizonDuotoneIcon } from "../duotone";
import { SunHorizonFillIcon } from "../fill";
import { SunHorizonLightIcon } from "../light";
import { SunHorizonRegularIcon } from "../regular";
import { SunHorizonThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SunHorizonIcon = memo(function SunHorizon(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SunHorizonBoldIcon,
      duotone: SunHorizonDuotoneIcon,
      fill: SunHorizonFillIcon,
      light: SunHorizonLightIcon,
      regular: SunHorizonRegularIcon,
      thin: SunHorizonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
