import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StrategyBold } from "../bold";
import { StrategyDuotone } from "../duotone";
import { StrategyFill } from "../fill";
import { StrategyLight } from "../light";
import { StrategyRegular } from "../regular";
import { StrategyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Strategy = memo(function Strategy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StrategyBold,
      duotone: StrategyDuotone,
      fill: StrategyFill,
      light: StrategyLight,
      regular: StrategyRegular,
      thin: StrategyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
