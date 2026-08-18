import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileMagnifyingGlassBoldIcon } from "../bold/file-magnifying-glass-bold.icon";
import { FileMagnifyingGlassDuotoneIcon } from "../duotone/file-magnifying-glass-duotone.icon";
import { FileMagnifyingGlassFillIcon } from "../fill/file-magnifying-glass-fill.icon";
import { FileMagnifyingGlassLightIcon } from "../light/file-magnifying-glass-light.icon";
import { FileMagnifyingGlassRegularIcon } from "../regular/file-magnifying-glass-regular.icon";
import { FileMagnifyingGlassThinIcon } from "../thin/file-magnifying-glass-thin.icon";

export const FileMagnifyingGlassIcon = memo(function FileMagnifyingGlass(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileMagnifyingGlassBoldIcon,
      duotone: FileMagnifyingGlassDuotoneIcon,
      fill: FileMagnifyingGlassFillIcon,
      light: FileMagnifyingGlassLightIcon,
      regular: FileMagnifyingGlassRegularIcon,
      thin: FileMagnifyingGlassThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
