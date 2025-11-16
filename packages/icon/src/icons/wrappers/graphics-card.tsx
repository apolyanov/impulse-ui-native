import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GraphicsCardBold } from "../bold";
import { GraphicsCardDuotone } from "../duotone";
import { GraphicsCardFill } from "../fill";
import { GraphicsCardLight } from "../light";
import { GraphicsCardRegular } from "../regular";
import { GraphicsCardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GraphicsCard = memo(function GraphicsCard(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GraphicsCardBold,
      duotone: GraphicsCardDuotone,
      fill: GraphicsCardFill,
      light: GraphicsCardLight,
      regular: GraphicsCardRegular,
      thin: GraphicsCardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
