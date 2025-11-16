import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaletteBold } from "../bold";
import { PaletteDuotone } from "../duotone";
import { PaletteFill } from "../fill";
import { PaletteLight } from "../light";
import { PaletteRegular } from "../regular";
import { PaletteThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Palette = memo(function Palette(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaletteBold,
      duotone: PaletteDuotone,
      fill: PaletteFill,
      light: PaletteLight,
      regular: PaletteRegular,
      thin: PaletteThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
