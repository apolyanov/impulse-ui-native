import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ImageBrokenBoldIcon } from "../bold/image-broken-bold.icon";
import { ImageBrokenDuotoneIcon } from "../duotone/image-broken-duotone.icon";
import { ImageBrokenFillIcon } from "../fill/image-broken-fill.icon";
import { ImageBrokenLightIcon } from "../light/image-broken-light.icon";
import { ImageBrokenRegularIcon } from "../regular/image-broken-regular.icon";
import { ImageBrokenThinIcon } from "../thin/image-broken-thin.icon";

export const ImageBrokenIcon = memo(function ImageBroken(
  props: IconWrapperProps,
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
