import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileMagnifyingGlassBold } from "../bold";
import { FileMagnifyingGlassDuotone } from "../duotone";
import { FileMagnifyingGlassFill } from "../fill";
import { FileMagnifyingGlassLight } from "../light";
import { FileMagnifyingGlassRegular } from "../regular";
import { FileMagnifyingGlassThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileMagnifyingGlass = memo(function FileMagnifyingGlass(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileMagnifyingGlassBold,
      duotone: FileMagnifyingGlassDuotone,
      fill: FileMagnifyingGlassFill,
      light: FileMagnifyingGlassLight,
      regular: FileMagnifyingGlassRegular,
      thin: FileMagnifyingGlassThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
