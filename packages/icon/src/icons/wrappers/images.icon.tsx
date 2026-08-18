import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ImagesBoldIcon } from "../bold/images-bold.icon";
import { ImagesDuotoneIcon } from "../duotone/images-duotone.icon";
import { ImagesFillIcon } from "../fill/images-fill.icon";
import { ImagesLightIcon } from "../light/images-light.icon";
import { ImagesRegularIcon } from "../regular/images-regular.icon";
import { ImagesThinIcon } from "../thin/images-thin.icon";

export const ImagesIcon = memo(function Images(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ImagesBoldIcon,
      duotone: ImagesDuotoneIcon,
      fill: ImagesFillIcon,
      light: ImagesLightIcon,
      regular: ImagesRegularIcon,
      thin: ImagesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
