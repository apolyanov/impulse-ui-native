import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ImagesSquareBoldIcon } from "../bold/images-square-bold.icon";
import { ImagesSquareDuotoneIcon } from "../duotone/images-square-duotone.icon";
import { ImagesSquareFillIcon } from "../fill/images-square-fill.icon";
import { ImagesSquareLightIcon } from "../light/images-square-light.icon";
import { ImagesSquareRegularIcon } from "../regular/images-square-regular.icon";
import { ImagesSquareThinIcon } from "../thin/images-square-thin.icon";

export const ImagesSquareIcon = memo(function ImagesSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ImagesSquareBoldIcon,
      duotone: ImagesSquareDuotoneIcon,
      fill: ImagesSquareFillIcon,
      light: ImagesSquareLightIcon,
      regular: ImagesSquareRegularIcon,
      thin: ImagesSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
