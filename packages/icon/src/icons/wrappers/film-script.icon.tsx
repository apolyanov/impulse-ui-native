import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilmScriptBoldIcon } from "../bold/film-script-bold.icon";
import { FilmScriptDuotoneIcon } from "../duotone/film-script-duotone.icon";
import { FilmScriptFillIcon } from "../fill/film-script-fill.icon";
import { FilmScriptLightIcon } from "../light/film-script-light.icon";
import { FilmScriptRegularIcon } from "../regular/film-script-regular.icon";
import { FilmScriptThinIcon } from "../thin/film-script-thin.icon";

export const FilmScriptIcon = memo(function FilmScript(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilmScriptBoldIcon,
      duotone: FilmScriptDuotoneIcon,
      fill: FilmScriptFillIcon,
      light: FilmScriptLightIcon,
      regular: FilmScriptRegularIcon,
      thin: FilmScriptThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
