import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandCoinsBoldIcon } from "../bold/hand-coins-bold.icon";
import { HandCoinsDuotoneIcon } from "../duotone/hand-coins-duotone.icon";
import { HandCoinsFillIcon } from "../fill/hand-coins-fill.icon";
import { HandCoinsLightIcon } from "../light/hand-coins-light.icon";
import { HandCoinsRegularIcon } from "../regular/hand-coins-regular.icon";
import { HandCoinsThinIcon } from "../thin/hand-coins-thin.icon";

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
