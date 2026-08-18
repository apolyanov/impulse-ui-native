import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GraphicsCardBoldIcon } from "../bold/graphics-card-bold.icon";
import { GraphicsCardDuotoneIcon } from "../duotone/graphics-card-duotone.icon";
import { GraphicsCardFillIcon } from "../fill/graphics-card-fill.icon";
import { GraphicsCardLightIcon } from "../light/graphics-card-light.icon";
import { GraphicsCardRegularIcon } from "../regular/graphics-card-regular.icon";
import { GraphicsCardThinIcon } from "../thin/graphics-card-thin.icon";

export const GraphicsCardIcon = memo(function GraphicsCard(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GraphicsCardBoldIcon,
      duotone: GraphicsCardDuotoneIcon,
      fill: GraphicsCardFillIcon,
      light: GraphicsCardLightIcon,
      regular: GraphicsCardRegularIcon,
      thin: GraphicsCardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
