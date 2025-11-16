import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GifBold } from "../bold";
import { GifDuotone } from "../duotone";
import { GifFill } from "../fill";
import { GifLight } from "../light";
import { GifRegular } from "../regular";
import { GifThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Gif = memo(function Gif(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GifBold,
      duotone: GifDuotone,
      fill: GifFill,
      light: GifLight,
      regular: GifRegular,
      thin: GifThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
