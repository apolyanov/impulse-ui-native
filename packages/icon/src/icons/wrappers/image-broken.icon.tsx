import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ImageBrokenBoldIcon } from "../bold";
import { ImageBrokenDuotoneIcon } from "../duotone";
import { ImageBrokenFillIcon } from "../fill";
import { ImageBrokenLightIcon } from "../light";
import { ImageBrokenRegularIcon } from "../regular";
import { ImageBrokenThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ImageBrokenIcon = memo(function ImageBroken(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ImageBrokenBoldIcon,
      duotone: ImageBrokenDuotoneIcon,
      fill: ImageBrokenFillIcon,
      light: ImageBrokenLightIcon,
      regular: ImageBrokenRegularIcon,
      thin: ImageBrokenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
