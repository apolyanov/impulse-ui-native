import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TreasureChestBoldIcon } from "../bold";
import { TreasureChestDuotoneIcon } from "../duotone";
import { TreasureChestFillIcon } from "../fill";
import { TreasureChestLightIcon } from "../light";
import { TreasureChestRegularIcon } from "../regular";
import { TreasureChestThinIcon } from "../thin";

export const TreasureChestIcon = memo(function TreasureChest(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreasureChestBoldIcon,
      duotone: TreasureChestDuotoneIcon,
      fill: TreasureChestFillIcon,
      light: TreasureChestLightIcon,
      regular: TreasureChestRegularIcon,
      thin: TreasureChestThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
