import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaletteBoldIcon } from "../bold/palette-bold.icon";
import { PaletteDuotoneIcon } from "../duotone/palette-duotone.icon";
import { PaletteFillIcon } from "../fill/palette-fill.icon";
import { PaletteLightIcon } from "../light/palette-light.icon";
import { PaletteRegularIcon } from "../regular/palette-regular.icon";
import { PaletteThinIcon } from "../thin/palette-thin.icon";

export const PaletteIcon = memo(function Palette(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaletteBoldIcon,
      duotone: PaletteDuotoneIcon,
      fill: PaletteFillIcon,
      light: PaletteLightIcon,
      regular: PaletteRegularIcon,
      thin: PaletteThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
