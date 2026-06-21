import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListMagnifyingGlassBoldIcon } from "../bold";
import { ListMagnifyingGlassDuotoneIcon } from "../duotone";
import { ListMagnifyingGlassFillIcon } from "../fill";
import { ListMagnifyingGlassLightIcon } from "../light";
import { ListMagnifyingGlassRegularIcon } from "../regular";
import { ListMagnifyingGlassThinIcon } from "../thin";

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
