import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ComputerTowerBoldIcon } from "../bold/computer-tower-bold.icon";
import { ComputerTowerDuotoneIcon } from "../duotone/computer-tower-duotone.icon";
import { ComputerTowerFillIcon } from "../fill/computer-tower-fill.icon";
import { ComputerTowerLightIcon } from "../light/computer-tower-light.icon";
import { ComputerTowerRegularIcon } from "../regular/computer-tower-regular.icon";
import { ComputerTowerThinIcon } from "../thin/computer-tower-thin.icon";

export const ComputerTowerIcon = memo(function ComputerTower(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ComputerTowerBoldIcon,
      duotone: ComputerTowerDuotoneIcon,
      fill: ComputerTowerFillIcon,
      light: ComputerTowerLightIcon,
      regular: ComputerTowerRegularIcon,
      thin: ComputerTowerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
