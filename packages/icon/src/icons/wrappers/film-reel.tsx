import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilmReelBold } from "../bold";
import { FilmReelDuotone } from "../duotone";
import { FilmReelFill } from "../fill";
import { FilmReelLight } from "../light";
import { FilmReelRegular } from "../regular";
import { FilmReelThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FilmReel = memo(function FilmReel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilmReelBold,
      duotone: FilmReelDuotone,
      fill: FilmReelFill,
      light: FilmReelLight,
      regular: FilmReelRegular,
      thin: FilmReelThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
