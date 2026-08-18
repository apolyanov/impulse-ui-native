import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrademarkBoldIcon } from "../bold/trademark-bold.icon";
import { TrademarkDuotoneIcon } from "../duotone/trademark-duotone.icon";
import { TrademarkFillIcon } from "../fill/trademark-fill.icon";
import { TrademarkLightIcon } from "../light/trademark-light.icon";
import { TrademarkRegularIcon } from "../regular/trademark-regular.icon";
import { TrademarkThinIcon } from "../thin/trademark-thin.icon";

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
