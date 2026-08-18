import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SunHorizonBoldIcon } from "../bold/sun-horizon-bold.icon";
import { SunHorizonDuotoneIcon } from "../duotone/sun-horizon-duotone.icon";
import { SunHorizonFillIcon } from "../fill/sun-horizon-fill.icon";
import { SunHorizonLightIcon } from "../light/sun-horizon-light.icon";
import { SunHorizonRegularIcon } from "../regular/sun-horizon-regular.icon";
import { SunHorizonThinIcon } from "../thin/sun-horizon-thin.icon";

export const SunHorizonIcon = memo(function SunHorizon(
  props: IconWrapperProps,
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
