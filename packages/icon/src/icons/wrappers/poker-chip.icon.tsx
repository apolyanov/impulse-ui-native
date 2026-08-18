import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PokerChipBoldIcon } from "../bold/poker-chip-bold.icon";
import { PokerChipDuotoneIcon } from "../duotone/poker-chip-duotone.icon";
import { PokerChipFillIcon } from "../fill/poker-chip-fill.icon";
import { PokerChipLightIcon } from "../light/poker-chip-light.icon";
import { PokerChipRegularIcon } from "../regular/poker-chip-regular.icon";
import { PokerChipThinIcon } from "../thin/poker-chip-thin.icon";

export const PokerChipIcon = memo(function PokerChip(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PokerChipBoldIcon,
      duotone: PokerChipDuotoneIcon,
      fill: PokerChipFillIcon,
      light: PokerChipLightIcon,
      regular: PokerChipRegularIcon,
      thin: PokerChipThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
