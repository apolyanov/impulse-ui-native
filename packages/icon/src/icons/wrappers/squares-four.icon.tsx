import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SquaresFourBoldIcon } from "../bold/squares-four-bold.icon";
import { SquaresFourDuotoneIcon } from "../duotone/squares-four-duotone.icon";
import { SquaresFourFillIcon } from "../fill/squares-four-fill.icon";
import { SquaresFourLightIcon } from "../light/squares-four-light.icon";
import { SquaresFourRegularIcon } from "../regular/squares-four-regular.icon";
import { SquaresFourThinIcon } from "../thin/squares-four-thin.icon";

export const SquaresFourIcon = memo(function SquaresFour(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquaresFourBoldIcon,
      duotone: SquaresFourDuotoneIcon,
      fill: SquaresFourFillIcon,
      light: SquaresFourLightIcon,
      regular: SquaresFourRegularIcon,
      thin: SquaresFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
