import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StopBoldIcon } from "../bold/stop-bold.icon";
import { StopDuotoneIcon } from "../duotone/stop-duotone.icon";
import { StopFillIcon } from "../fill/stop-fill.icon";
import { StopLightIcon } from "../light/stop-light.icon";
import { StopRegularIcon } from "../regular/stop-regular.icon";
import { StopThinIcon } from "../thin/stop-thin.icon";

export const StopIcon = memo(function Stop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StopBoldIcon,
      duotone: StopDuotoneIcon,
      fill: StopFillIcon,
      light: StopLightIcon,
      regular: StopRegularIcon,
      thin: StopThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
