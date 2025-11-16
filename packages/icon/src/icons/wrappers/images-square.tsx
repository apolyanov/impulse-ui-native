import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ImagesSquareBold } from "../bold";
import { ImagesSquareDuotone } from "../duotone";
import { ImagesSquareFill } from "../fill";
import { ImagesSquareLight } from "../light";
import { ImagesSquareRegular } from "../regular";
import { ImagesSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ImagesSquare = memo(function ImagesSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ImagesSquareBold,
      duotone: ImagesSquareDuotone,
      fill: ImagesSquareFill,
      light: ImagesSquareLight,
      regular: ImagesSquareRegular,
      thin: ImagesSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
