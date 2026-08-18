import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CoinVerticalBoldIcon } from "../bold/coin-vertical-bold.icon";
import { CoinVerticalDuotoneIcon } from "../duotone/coin-vertical-duotone.icon";
import { CoinVerticalFillIcon } from "../fill/coin-vertical-fill.icon";
import { CoinVerticalLightIcon } from "../light/coin-vertical-light.icon";
import { CoinVerticalRegularIcon } from "../regular/coin-vertical-regular.icon";
import { CoinVerticalThinIcon } from "../thin/coin-vertical-thin.icon";

export const CoinVerticalIcon = memo(function CoinVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoinVerticalBoldIcon,
      duotone: CoinVerticalDuotoneIcon,
      fill: CoinVerticalFillIcon,
      light: CoinVerticalLightIcon,
      regular: CoinVerticalRegularIcon,
      thin: CoinVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
