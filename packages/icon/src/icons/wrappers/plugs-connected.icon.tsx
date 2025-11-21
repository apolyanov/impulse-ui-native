import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlugsConnectedBoldIcon } from "../bold";
import { PlugsConnectedDuotoneIcon } from "../duotone";
import { PlugsConnectedFillIcon } from "../fill";
import { PlugsConnectedLightIcon } from "../light";
import { PlugsConnectedRegularIcon } from "../regular";
import { PlugsConnectedThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlugsConnectedIcon = memo(function PlugsConnected(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlugsConnectedBoldIcon,
      duotone: PlugsConnectedDuotoneIcon,
      fill: PlugsConnectedFillIcon,
      light: PlugsConnectedLightIcon,
      regular: PlugsConnectedRegularIcon,
      thin: PlugsConnectedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
