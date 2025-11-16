import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ExcludeSquareBold } from "../bold";
import { ExcludeSquareDuotone } from "../duotone";
import { ExcludeSquareFill } from "../fill";
import { ExcludeSquareLight } from "../light";
import { ExcludeSquareRegular } from "../regular";
import { ExcludeSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ExcludeSquare = memo(function ExcludeSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ExcludeSquareBold,
      duotone: ExcludeSquareDuotone,
      fill: ExcludeSquareFill,
      light: ExcludeSquareLight,
      regular: ExcludeSquareRegular,
      thin: ExcludeSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
