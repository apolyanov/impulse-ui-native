import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GifBoldIcon } from "../bold/gif-bold.icon";
import { GifDuotoneIcon } from "../duotone/gif-duotone.icon";
import { GifFillIcon } from "../fill/gif-fill.icon";
import { GifLightIcon } from "../light/gif-light.icon";
import { GifRegularIcon } from "../regular/gif-regular.icon";
import { GifThinIcon } from "../thin/gif-thin.icon";

export const GifIcon = memo(function Gif(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GifBoldIcon,
      duotone: GifDuotoneIcon,
      fill: GifFillIcon,
      light: GifLightIcon,
      regular: GifRegularIcon,
      thin: GifThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
