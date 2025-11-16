import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CoinVerticalBold } from "../bold";
import { CoinVerticalDuotone } from "../duotone";
import { CoinVerticalFill } from "../fill";
import { CoinVerticalLight } from "../light";
import { CoinVerticalRegular } from "../regular";
import { CoinVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CoinVertical = memo(function CoinVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoinVerticalBold,
      duotone: CoinVerticalDuotone,
      fill: CoinVerticalFill,
      light: CoinVerticalLight,
      regular: CoinVerticalRegular,
      thin: CoinVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
