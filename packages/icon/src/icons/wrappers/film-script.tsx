import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilmScriptBold } from "../bold";
import { FilmScriptDuotone } from "../duotone";
import { FilmScriptFill } from "../fill";
import { FilmScriptLight } from "../light";
import { FilmScriptRegular } from "../regular";
import { FilmScriptThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FilmScript = memo(function FilmScript(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilmScriptBold,
      duotone: FilmScriptDuotone,
      fill: FilmScriptFill,
      light: FilmScriptLight,
      regular: FilmScriptRegular,
      thin: FilmScriptThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
