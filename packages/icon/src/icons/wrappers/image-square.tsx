import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ImageSquareBold } from "../bold";
import { ImageSquareDuotone } from "../duotone";
import { ImageSquareFill } from "../fill";
import { ImageSquareLight } from "../light";
import { ImageSquareRegular } from "../regular";
import { ImageSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ImageSquare = memo(function ImageSquare(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ImageSquareBold,
      duotone: ImageSquareDuotone,
      fill: ImageSquareFill,
      light: ImageSquareLight,
      regular: ImageSquareRegular,
      thin: ImageSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
