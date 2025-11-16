import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MagnifyingGlassPlusBold } from "../bold";
import { MagnifyingGlassPlusDuotone } from "../duotone";
import { MagnifyingGlassPlusFill } from "../fill";
import { MagnifyingGlassPlusLight } from "../light";
import { MagnifyingGlassPlusRegular } from "../regular";
import { MagnifyingGlassPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MagnifyingGlassPlus = memo(function MagnifyingGlassPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagnifyingGlassPlusBold,
      duotone: MagnifyingGlassPlusDuotone,
      fill: MagnifyingGlassPlusFill,
      light: MagnifyingGlassPlusLight,
      regular: MagnifyingGlassPlusRegular,
      thin: MagnifyingGlassPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
