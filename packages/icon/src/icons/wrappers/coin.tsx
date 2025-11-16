import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CoinBold } from "../bold";
import { CoinDuotone } from "../duotone";
import { CoinFill } from "../fill";
import { CoinLight } from "../light";
import { CoinRegular } from "../regular";
import { CoinThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Coin = memo(function Coin(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoinBold,
      duotone: CoinDuotone,
      fill: CoinFill,
      light: CoinLight,
      regular: CoinRegular,
      thin: CoinThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
