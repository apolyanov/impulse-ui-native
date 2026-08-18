import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CoinsBoldIcon } from "../bold/coins-bold.icon";
import { CoinsDuotoneIcon } from "../duotone/coins-duotone.icon";
import { CoinsFillIcon } from "../fill/coins-fill.icon";
import { CoinsLightIcon } from "../light/coins-light.icon";
import { CoinsRegularIcon } from "../regular/coins-regular.icon";
import { CoinsThinIcon } from "../thin/coins-thin.icon";

export const CoinsIcon = memo(function Coins(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoinsBoldIcon,
      duotone: CoinsDuotoneIcon,
      fill: CoinsFillIcon,
      light: CoinsLightIcon,
      regular: CoinsRegularIcon,
      thin: CoinsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
