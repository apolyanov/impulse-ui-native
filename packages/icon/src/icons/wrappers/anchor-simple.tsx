import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AnchorSimpleBold } from "../bold";
import { AnchorSimpleDuotone } from "../duotone";
import { AnchorSimpleFill } from "../fill";
import { AnchorSimpleLight } from "../light";
import { AnchorSimpleRegular } from "../regular";
import { AnchorSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AnchorSimple = memo(function AnchorSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AnchorSimpleBold,
      duotone: AnchorSimpleDuotone,
      fill: AnchorSimpleFill,
      light: AnchorSimpleLight,
      regular: AnchorSimpleRegular,
      thin: AnchorSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
