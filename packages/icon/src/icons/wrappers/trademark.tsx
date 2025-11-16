import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrademarkBold } from "../bold";
import { TrademarkDuotone } from "../duotone";
import { TrademarkFill } from "../fill";
import { TrademarkLight } from "../light";
import { TrademarkRegular } from "../regular";
import { TrademarkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Trademark = memo(function Trademark(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrademarkBold,
      duotone: TrademarkDuotone,
      fill: TrademarkFill,
      light: TrademarkLight,
      regular: TrademarkRegular,
      thin: TrademarkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
