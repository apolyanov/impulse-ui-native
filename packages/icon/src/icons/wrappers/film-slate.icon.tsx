import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilmSlateBoldIcon } from "../bold";
import { FilmSlateDuotoneIcon } from "../duotone";
import { FilmSlateFillIcon } from "../fill";
import { FilmSlateLightIcon } from "../light";
import { FilmSlateRegularIcon } from "../regular";
import { FilmSlateThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
