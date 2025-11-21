import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PintGlassBoldIcon } from "../bold";
import { PintGlassDuotoneIcon } from "../duotone";
import { PintGlassFillIcon } from "../fill";
import { PintGlassLightIcon } from "../light";
import { PintGlassRegularIcon } from "../regular";
import { PintGlassThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
