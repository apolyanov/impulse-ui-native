import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListMagnifyingGlassBoldIcon } from "../bold/list-magnifying-glass-bold.icon";
import { ListMagnifyingGlassDuotoneIcon } from "../duotone/list-magnifying-glass-duotone.icon";
import { ListMagnifyingGlassFillIcon } from "../fill/list-magnifying-glass-fill.icon";
import { ListMagnifyingGlassLightIcon } from "../light/list-magnifying-glass-light.icon";
import { ListMagnifyingGlassRegularIcon } from "../regular/list-magnifying-glass-regular.icon";
import { ListMagnifyingGlassThinIcon } from "../thin/list-magnifying-glass-thin.icon";

export const ListMagnifyingGlassIcon = memo(function ListMagnifyingGlass(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListMagnifyingGlassBoldIcon,
      duotone: ListMagnifyingGlassDuotoneIcon,
      fill: ListMagnifyingGlassFillIcon,
      light: ListMagnifyingGlassLightIcon,
      regular: ListMagnifyingGlassRegularIcon,
      thin: ListMagnifyingGlassThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
