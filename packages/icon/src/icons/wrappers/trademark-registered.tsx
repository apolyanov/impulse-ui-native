import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrademarkRegisteredBold } from "../bold";
import { TrademarkRegisteredDuotone } from "../duotone";
import { TrademarkRegisteredFill } from "../fill";
import { TrademarkRegisteredLight } from "../light";
import { TrademarkRegisteredRegular } from "../regular";
import { TrademarkRegisteredThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrademarkRegistered = memo(function TrademarkRegistered(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrademarkRegisteredBold,
      duotone: TrademarkRegisteredDuotone,
      fill: TrademarkRegisteredFill,
      light: TrademarkRegisteredLight,
      regular: TrademarkRegisteredRegular,
      thin: TrademarkRegisteredThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
