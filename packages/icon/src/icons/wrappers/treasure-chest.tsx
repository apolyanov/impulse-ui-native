import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TreasureChestBold } from "../bold";
import { TreasureChestDuotone } from "../duotone";
import { TreasureChestFill } from "../fill";
import { TreasureChestLight } from "../light";
import { TreasureChestRegular } from "../regular";
import { TreasureChestThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TreasureChest = memo(function TreasureChest(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreasureChestBold,
      duotone: TreasureChestDuotone,
      fill: TreasureChestFill,
      light: TreasureChestLight,
      regular: TreasureChestRegular,
      thin: TreasureChestThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
