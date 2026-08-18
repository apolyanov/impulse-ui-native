import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ImageBoldIcon } from "../bold/image-bold.icon";
import { ImageDuotoneIcon } from "../duotone/image-duotone.icon";
import { ImageFillIcon } from "../fill/image-fill.icon";
import { ImageLightIcon } from "../light/image-light.icon";
import { ImageRegularIcon } from "../regular/image-regular.icon";
import { ImageThinIcon } from "../thin/image-thin.icon";

export const ImageIcon = memo(function Image(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ImageBoldIcon,
      duotone: ImageDuotoneIcon,
      fill: ImageFillIcon,
      light: ImageLightIcon,
      regular: ImageRegularIcon,
      thin: ImageThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
