import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilmStripBoldIcon } from "../bold/film-strip-bold.icon";
import { FilmStripDuotoneIcon } from "../duotone/film-strip-duotone.icon";
import { FilmStripFillIcon } from "../fill/film-strip-fill.icon";
import { FilmStripLightIcon } from "../light/film-strip-light.icon";
import { FilmStripRegularIcon } from "../regular/film-strip-regular.icon";
import { FilmStripThinIcon } from "../thin/film-strip-thin.icon";

export const FilmStripIcon = memo(function FilmStrip(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilmStripBoldIcon,
      duotone: FilmStripDuotoneIcon,
      fill: FilmStripFillIcon,
      light: FilmStripLightIcon,
      regular: FilmStripRegularIcon,
      thin: FilmStripThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
