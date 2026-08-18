import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilmReelBoldIcon } from "../bold/film-reel-bold.icon";
import { FilmReelDuotoneIcon } from "../duotone/film-reel-duotone.icon";
import { FilmReelFillIcon } from "../fill/film-reel-fill.icon";
import { FilmReelLightIcon } from "../light/film-reel-light.icon";
import { FilmReelRegularIcon } from "../regular/film-reel-regular.icon";
import { FilmReelThinIcon } from "../thin/film-reel-thin.icon";

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
