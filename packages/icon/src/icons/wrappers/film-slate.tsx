import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilmSlateBold } from "../bold";
import { FilmSlateDuotone } from "../duotone";
import { FilmSlateFill } from "../fill";
import { FilmSlateLight } from "../light";
import { FilmSlateRegular } from "../regular";
import { FilmSlateThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FilmSlate = memo(function FilmSlate(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilmSlateBold,
      duotone: FilmSlateDuotone,
      fill: FilmSlateFill,
      light: FilmSlateLight,
      regular: FilmSlateRegular,
      thin: FilmSlateThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
