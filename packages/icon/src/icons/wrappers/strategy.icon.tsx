import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StrategyBoldIcon } from "../bold/strategy-bold.icon";
import { StrategyDuotoneIcon } from "../duotone/strategy-duotone.icon";
import { StrategyFillIcon } from "../fill/strategy-fill.icon";
import { StrategyLightIcon } from "../light/strategy-light.icon";
import { StrategyRegularIcon } from "../regular/strategy-regular.icon";
import { StrategyThinIcon } from "../thin/strategy-thin.icon";

export const StrategyIcon = memo(function Strategy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StrategyBoldIcon,
      duotone: StrategyDuotoneIcon,
      fill: StrategyFillIcon,
      light: StrategyLightIcon,
      regular: StrategyRegularIcon,
      thin: StrategyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
