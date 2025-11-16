import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MagnifyingGlassBold } from "../bold";
import { MagnifyingGlassDuotone } from "../duotone";
import { MagnifyingGlassFill } from "../fill";
import { MagnifyingGlassLight } from "../light";
import { MagnifyingGlassRegular } from "../regular";
import { MagnifyingGlassThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MagnifyingGlass = memo(function MagnifyingGlass(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagnifyingGlassBold,
      duotone: MagnifyingGlassDuotone,
      fill: MagnifyingGlassFill,
      light: MagnifyingGlassLight,
      regular: MagnifyingGlassRegular,
      thin: MagnifyingGlassThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
