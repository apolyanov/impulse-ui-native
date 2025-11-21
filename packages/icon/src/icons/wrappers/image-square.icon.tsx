import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ImageSquareBoldIcon } from "../bold";
import { ImageSquareDuotoneIcon } from "../duotone";
import { ImageSquareFillIcon } from "../fill";
import { ImageSquareLightIcon } from "../light";
import { ImageSquareRegularIcon } from "../regular";
import { ImageSquareThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ImageSquareIcon = memo(function ImageSquare(
  props: IconWrapperProps
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
