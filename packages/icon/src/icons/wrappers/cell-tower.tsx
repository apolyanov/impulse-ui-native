import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CellTowerBold } from "../bold";
import { CellTowerDuotone } from "../duotone";
import { CellTowerFill } from "../fill";
import { CellTowerLight } from "../light";
import { CellTowerRegular } from "../regular";
import { CellTowerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CellTower = memo(function CellTower(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellTowerBold,
      duotone: CellTowerDuotone,
      fill: CellTowerFill,
      light: CellTowerLight,
      regular: CellTowerRegular,
      thin: CellTowerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
