import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CoinBoldIcon } from "../bold/coin-bold.icon";
import { CoinDuotoneIcon } from "../duotone/coin-duotone.icon";
import { CoinFillIcon } from "../fill/coin-fill.icon";
import { CoinLightIcon } from "../light/coin-light.icon";
import { CoinRegularIcon } from "../regular/coin-regular.icon";
import { CoinThinIcon } from "../thin/coin-thin.icon";

export const CoinIcon = memo(function Coin(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoinBoldIcon,
      duotone: CoinDuotoneIcon,
      fill: CoinFillIcon,
      light: CoinLightIcon,
      regular: CoinRegularIcon,
      thin: CoinThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
