import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PintGlassBold } from "../bold";
import { PintGlassDuotone } from "../duotone";
import { PintGlassFill } from "../fill";
import { PintGlassLight } from "../light";
import { PintGlassRegular } from "../regular";
import { PintGlassThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PintGlass = memo(function PintGlass(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PintGlassBold,
      duotone: PintGlassDuotone,
      fill: PintGlassFill,
      light: PintGlassLight,
      regular: PintGlassRegular,
      thin: PintGlassThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
