import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrademarkRegisteredBoldIcon } from "../bold/trademark-registered-bold.icon";
import { TrademarkRegisteredDuotoneIcon } from "../duotone/trademark-registered-duotone.icon";
import { TrademarkRegisteredFillIcon } from "../fill/trademark-registered-fill.icon";
import { TrademarkRegisteredLightIcon } from "../light/trademark-registered-light.icon";
import { TrademarkRegisteredRegularIcon } from "../regular/trademark-registered-regular.icon";
import { TrademarkRegisteredThinIcon } from "../thin/trademark-registered-thin.icon";

export const TrademarkRegisteredIcon = memo(function TrademarkRegistered(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrademarkRegisteredBoldIcon,
      duotone: TrademarkRegisteredDuotoneIcon,
      fill: TrademarkRegisteredFillIcon,
      light: TrademarkRegisteredLightIcon,
      regular: TrademarkRegisteredRegularIcon,
      thin: TrademarkRegisteredThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
