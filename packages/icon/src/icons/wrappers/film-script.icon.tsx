import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilmScriptBoldIcon } from "../bold";
import { FilmScriptDuotoneIcon } from "../duotone";
import { FilmScriptFillIcon } from "../fill";
import { FilmScriptLightIcon } from "../light";
import { FilmScriptRegularIcon } from "../regular";
import { FilmScriptThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FilmScriptIcon = memo(function FilmScript(
  props: IconWrapperProps
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
