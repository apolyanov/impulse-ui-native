import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ImageSquareBoldIcon } from "../bold/image-square-bold.icon";
import { ImageSquareDuotoneIcon } from "../duotone/image-square-duotone.icon";
import { ImageSquareFillIcon } from "../fill/image-square-fill.icon";
import { ImageSquareLightIcon } from "../light/image-square-light.icon";
import { ImageSquareRegularIcon } from "../regular/image-square-regular.icon";
import { ImageSquareThinIcon } from "../thin/image-square-thin.icon";

export const ImageSquareIcon = memo(function ImageSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ImageSquareBoldIcon,
      duotone: ImageSquareDuotoneIcon,
      fill: ImageSquareFillIcon,
      light: ImageSquareLightIcon,
      regular: ImageSquareRegularIcon,
      thin: ImageSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
