import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PokerChipBoldIcon } from "../bold";
import { PokerChipDuotoneIcon } from "../duotone";
import { PokerChipFillIcon } from "../fill";
import { PokerChipLightIcon } from "../light";
import { PokerChipRegularIcon } from "../regular";
import { PokerChipThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
