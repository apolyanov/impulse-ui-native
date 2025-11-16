import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandCoinsBold } from "../bold";
import { HandCoinsDuotone } from "../duotone";
import { HandCoinsFill } from "../fill";
import { HandCoinsLight } from "../light";
import { HandCoinsRegular } from "../regular";
import { HandCoinsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandCoins = memo(function HandCoins(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandCoinsBold,
      duotone: HandCoinsDuotone,
      fill: HandCoinsFill,
      light: HandCoinsLight,
      regular: HandCoinsRegular,
      thin: HandCoinsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
