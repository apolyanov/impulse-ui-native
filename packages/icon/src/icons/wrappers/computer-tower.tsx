import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ComputerTowerBold } from "../bold";
import { ComputerTowerDuotone } from "../duotone";
import { ComputerTowerFill } from "../fill";
import { ComputerTowerLight } from "../light";
import { ComputerTowerRegular } from "../regular";
import { ComputerTowerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ComputerTower = memo(function ComputerTower(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ComputerTowerBold,
      duotone: ComputerTowerDuotone,
      fill: ComputerTowerFill,
      light: ComputerTowerLight,
      regular: ComputerTowerRegular,
      thin: ComputerTowerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
