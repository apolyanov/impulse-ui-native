import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DesktopTowerBold } from "../bold";
import { DesktopTowerDuotone } from "../duotone";
import { DesktopTowerFill } from "../fill";
import { DesktopTowerLight } from "../light";
import { DesktopTowerRegular } from "../regular";
import { DesktopTowerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DesktopTower = memo(function DesktopTower(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DesktopTowerBold,
      duotone: DesktopTowerDuotone,
      fill: DesktopTowerFill,
      light: DesktopTowerLight,
      regular: DesktopTowerRegular,
      thin: DesktopTowerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
