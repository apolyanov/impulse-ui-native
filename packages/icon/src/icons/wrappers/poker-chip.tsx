import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PokerChipBold } from "../bold";
import { PokerChipDuotone } from "../duotone";
import { PokerChipFill } from "../fill";
import { PokerChipLight } from "../light";
import { PokerChipRegular } from "../regular";
import { PokerChipThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PokerChip = memo(function PokerChip(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PokerChipBold,
      duotone: PokerChipDuotone,
      fill: PokerChipFill,
      light: PokerChipLight,
      regular: PokerChipRegular,
      thin: PokerChipThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
