import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandCoinsBoldIcon } from "../bold";
import { HandCoinsDuotoneIcon } from "../duotone";
import { HandCoinsFillIcon } from "../fill";
import { HandCoinsLightIcon } from "../light";
import { HandCoinsRegularIcon } from "../regular";
import { HandCoinsThinIcon } from "../thin";

export const HandCoinsIcon = memo(function HandCoins(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandCoinsBoldIcon,
      duotone: HandCoinsDuotoneIcon,
      fill: HandCoinsFillIcon,
      light: HandCoinsLightIcon,
      regular: HandCoinsRegularIcon,
      thin: HandCoinsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
