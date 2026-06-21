import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MagnifyingGlassPlusBoldIcon } from "../bold";
import { MagnifyingGlassPlusDuotoneIcon } from "../duotone";
import { MagnifyingGlassPlusFillIcon } from "../fill";
import { MagnifyingGlassPlusLightIcon } from "../light";
import { MagnifyingGlassPlusRegularIcon } from "../regular";
import { MagnifyingGlassPlusThinIcon } from "../thin";

export const MagnifyingGlassPlusIcon = memo(function MagnifyingGlassPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagnifyingGlassPlusBoldIcon,
      duotone: MagnifyingGlassPlusDuotoneIcon,
      fill: MagnifyingGlassPlusFillIcon,
      light: MagnifyingGlassPlusLightIcon,
      regular: MagnifyingGlassPlusRegularIcon,
      thin: MagnifyingGlassPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
