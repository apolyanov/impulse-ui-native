import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CellTowerBoldIcon } from "../bold/cell-tower-bold.icon";
import { CellTowerDuotoneIcon } from "../duotone/cell-tower-duotone.icon";
import { CellTowerFillIcon } from "../fill/cell-tower-fill.icon";
import { CellTowerLightIcon } from "../light/cell-tower-light.icon";
import { CellTowerRegularIcon } from "../regular/cell-tower-regular.icon";
import { CellTowerThinIcon } from "../thin/cell-tower-thin.icon";

export const CellTowerIcon = memo(function CellTower(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellTowerBoldIcon,
      duotone: CellTowerDuotoneIcon,
      fill: CellTowerFillIcon,
      light: CellTowerLightIcon,
      regular: CellTowerRegularIcon,
      thin: CellTowerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
