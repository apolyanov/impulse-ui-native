import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilmSlateBoldIcon } from "../bold/film-slate-bold.icon";
import { FilmSlateDuotoneIcon } from "../duotone/film-slate-duotone.icon";
import { FilmSlateFillIcon } from "../fill/film-slate-fill.icon";
import { FilmSlateLightIcon } from "../light/film-slate-light.icon";
import { FilmSlateRegularIcon } from "../regular/film-slate-regular.icon";
import { FilmSlateThinIcon } from "../thin/film-slate-thin.icon";

export const FilmSlateIcon = memo(function FilmSlate(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilmSlateBoldIcon,
      duotone: FilmSlateDuotoneIcon,
      fill: FilmSlateFillIcon,
      light: FilmSlateLightIcon,
      regular: FilmSlateRegularIcon,
      thin: FilmSlateThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
