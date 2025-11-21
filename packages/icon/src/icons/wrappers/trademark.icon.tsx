import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrademarkBoldIcon } from "../bold";
import { TrademarkDuotoneIcon } from "../duotone";
import { TrademarkFillIcon } from "../fill";
import { TrademarkLightIcon } from "../light";
import { TrademarkRegularIcon } from "../regular";
import { TrademarkThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrademarkIcon = memo(function Trademark(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrademarkBoldIcon,
      duotone: TrademarkDuotoneIcon,
      fill: TrademarkFillIcon,
      light: TrademarkLightIcon,
      regular: TrademarkRegularIcon,
      thin: TrademarkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
