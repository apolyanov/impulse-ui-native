import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PintGlassBoldIcon } from "../bold/pint-glass-bold.icon";
import { PintGlassDuotoneIcon } from "../duotone/pint-glass-duotone.icon";
import { PintGlassFillIcon } from "../fill/pint-glass-fill.icon";
import { PintGlassLightIcon } from "../light/pint-glass-light.icon";
import { PintGlassRegularIcon } from "../regular/pint-glass-regular.icon";
import { PintGlassThinIcon } from "../thin/pint-glass-thin.icon";

export const PintGlassIcon = memo(function PintGlass(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PintGlassBoldIcon,
      duotone: PintGlassDuotoneIcon,
      fill: PintGlassFillIcon,
      light: PintGlassLightIcon,
      regular: PintGlassRegularIcon,
      thin: PintGlassThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
