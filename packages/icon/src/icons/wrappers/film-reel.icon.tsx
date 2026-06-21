import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilmReelBoldIcon } from "../bold";
import { FilmReelDuotoneIcon } from "../duotone";
import { FilmReelFillIcon } from "../fill";
import { FilmReelLightIcon } from "../light";
import { FilmReelRegularIcon } from "../regular";
import { FilmReelThinIcon } from "../thin";

export const FilmReelIcon = memo(function FilmReel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilmReelBoldIcon,
      duotone: FilmReelDuotoneIcon,
      fill: FilmReelFillIcon,
      light: FilmReelLightIcon,
      regular: FilmReelRegularIcon,
      thin: FilmReelThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
