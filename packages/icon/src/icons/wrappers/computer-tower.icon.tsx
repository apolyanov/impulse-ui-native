import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ComputerTowerBoldIcon } from "../bold";
import { ComputerTowerDuotoneIcon } from "../duotone";
import { ComputerTowerFillIcon } from "../fill";
import { ComputerTowerLightIcon } from "../light";
import { ComputerTowerRegularIcon } from "../regular";
import { ComputerTowerThinIcon } from "../thin";

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
