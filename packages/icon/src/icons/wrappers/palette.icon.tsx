import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaletteBoldIcon } from "../bold";
import { PaletteDuotoneIcon } from "../duotone";
import { PaletteFillIcon } from "../fill";
import { PaletteLightIcon } from "../light";
import { PaletteRegularIcon } from "../regular";
import { PaletteThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
