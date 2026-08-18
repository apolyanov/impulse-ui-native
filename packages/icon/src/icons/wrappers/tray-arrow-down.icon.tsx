import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrayArrowDownBoldIcon } from "../bold/tray-arrow-down-bold.icon";
import { TrayArrowDownDuotoneIcon } from "../duotone/tray-arrow-down-duotone.icon";
import { TrayArrowDownFillIcon } from "../fill/tray-arrow-down-fill.icon";
import { TrayArrowDownLightIcon } from "../light/tray-arrow-down-light.icon";
import { TrayArrowDownRegularIcon } from "../regular/tray-arrow-down-regular.icon";
import { TrayArrowDownThinIcon } from "../thin/tray-arrow-down-thin.icon";

export const TrayArrowDownIcon = memo(function TrayArrowDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrayArrowDownBoldIcon,
      duotone: TrayArrowDownDuotoneIcon,
      fill: TrayArrowDownFillIcon,
      light: TrayArrowDownLightIcon,
      regular: TrayArrowDownRegularIcon,
      thin: TrayArrowDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
