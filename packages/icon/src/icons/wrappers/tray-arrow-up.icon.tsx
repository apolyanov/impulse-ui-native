import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrayArrowUpBoldIcon } from "../bold/tray-arrow-up-bold.icon";
import { TrayArrowUpDuotoneIcon } from "../duotone/tray-arrow-up-duotone.icon";
import { TrayArrowUpFillIcon } from "../fill/tray-arrow-up-fill.icon";
import { TrayArrowUpLightIcon } from "../light/tray-arrow-up-light.icon";
import { TrayArrowUpRegularIcon } from "../regular/tray-arrow-up-regular.icon";
import { TrayArrowUpThinIcon } from "../thin/tray-arrow-up-thin.icon";

export const TrayArrowUpIcon = memo(function TrayArrowUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrayArrowUpBoldIcon,
      duotone: TrayArrowUpDuotoneIcon,
      fill: TrayArrowUpFillIcon,
      light: TrayArrowUpLightIcon,
      regular: TrayArrowUpRegularIcon,
      thin: TrayArrowUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
