import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MagnifyingGlassBoldIcon } from "../bold/magnifying-glass-bold.icon";
import { MagnifyingGlassDuotoneIcon } from "../duotone/magnifying-glass-duotone.icon";
import { MagnifyingGlassFillIcon } from "../fill/magnifying-glass-fill.icon";
import { MagnifyingGlassLightIcon } from "../light/magnifying-glass-light.icon";
import { MagnifyingGlassRegularIcon } from "../regular/magnifying-glass-regular.icon";
import { MagnifyingGlassThinIcon } from "../thin/magnifying-glass-thin.icon";

export const MagnifyingGlassIcon = memo(function MagnifyingGlass(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagnifyingGlassBoldIcon,
      duotone: MagnifyingGlassDuotoneIcon,
      fill: MagnifyingGlassFillIcon,
      light: MagnifyingGlassLightIcon,
      regular: MagnifyingGlassRegularIcon,
      thin: MagnifyingGlassThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
