import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TreasureChestBoldIcon } from "../bold/treasure-chest-bold.icon";
import { TreasureChestDuotoneIcon } from "../duotone/treasure-chest-duotone.icon";
import { TreasureChestFillIcon } from "../fill/treasure-chest-fill.icon";
import { TreasureChestLightIcon } from "../light/treasure-chest-light.icon";
import { TreasureChestRegularIcon } from "../regular/treasure-chest-regular.icon";
import { TreasureChestThinIcon } from "../thin/treasure-chest-thin.icon";

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
