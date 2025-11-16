import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListMagnifyingGlassBold } from "../bold";
import { ListMagnifyingGlassDuotone } from "../duotone";
import { ListMagnifyingGlassFill } from "../fill";
import { ListMagnifyingGlassLight } from "../light";
import { ListMagnifyingGlassRegular } from "../regular";
import { ListMagnifyingGlassThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListMagnifyingGlass = memo(function ListMagnifyingGlass(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListMagnifyingGlassBold,
      duotone: ListMagnifyingGlassDuotone,
      fill: ListMagnifyingGlassFill,
      light: ListMagnifyingGlassLight,
      regular: ListMagnifyingGlassRegular,
      thin: ListMagnifyingGlassThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
