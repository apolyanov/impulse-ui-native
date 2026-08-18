import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DesktopTowerBoldIcon } from "../bold/desktop-tower-bold.icon";
import { DesktopTowerDuotoneIcon } from "../duotone/desktop-tower-duotone.icon";
import { DesktopTowerFillIcon } from "../fill/desktop-tower-fill.icon";
import { DesktopTowerLightIcon } from "../light/desktop-tower-light.icon";
import { DesktopTowerRegularIcon } from "../regular/desktop-tower-regular.icon";
import { DesktopTowerThinIcon } from "../thin/desktop-tower-thin.icon";

export const DesktopTowerIcon = memo(function DesktopTower(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DesktopTowerBoldIcon,
      duotone: DesktopTowerDuotoneIcon,
      fill: DesktopTowerFillIcon,
      light: DesktopTowerLightIcon,
      regular: DesktopTowerRegularIcon,
      thin: DesktopTowerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
