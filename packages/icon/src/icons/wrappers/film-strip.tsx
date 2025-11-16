import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilmStripBold } from "../bold";
import { FilmStripDuotone } from "../duotone";
import { FilmStripFill } from "../fill";
import { FilmStripLight } from "../light";
import { FilmStripRegular } from "../regular";
import { FilmStripThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FilmStrip = memo(function FilmStrip(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilmStripBold,
      duotone: FilmStripDuotone,
      fill: FilmStripFill,
      light: FilmStripLight,
      regular: FilmStripRegular,
      thin: FilmStripThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
