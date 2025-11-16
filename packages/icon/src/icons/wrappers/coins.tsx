import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CoinsBold } from "../bold";
import { CoinsDuotone } from "../duotone";
import { CoinsFill } from "../fill";
import { CoinsLight } from "../light";
import { CoinsRegular } from "../regular";
import { CoinsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Coins = memo(function Coins(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoinsBold,
      duotone: CoinsDuotone,
      fill: CoinsFill,
      light: CoinsLight,
      regular: CoinsRegular,
      thin: CoinsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
