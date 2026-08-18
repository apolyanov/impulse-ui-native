import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MagnifyingGlassPlusBoldIcon } from "../bold/magnifying-glass-plus-bold.icon";
import { MagnifyingGlassPlusDuotoneIcon } from "../duotone/magnifying-glass-plus-duotone.icon";
import { MagnifyingGlassPlusFillIcon } from "../fill/magnifying-glass-plus-fill.icon";
import { MagnifyingGlassPlusLightIcon } from "../light/magnifying-glass-plus-light.icon";
import { MagnifyingGlassPlusRegularIcon } from "../regular/magnifying-glass-plus-regular.icon";
import { MagnifyingGlassPlusThinIcon } from "../thin/magnifying-glass-plus-thin.icon";

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
