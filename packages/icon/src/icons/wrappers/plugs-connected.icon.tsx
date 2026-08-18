import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlugsConnectedBoldIcon } from "../bold/plugs-connected-bold.icon";
import { PlugsConnectedDuotoneIcon } from "../duotone/plugs-connected-duotone.icon";
import { PlugsConnectedFillIcon } from "../fill/plugs-connected-fill.icon";
import { PlugsConnectedLightIcon } from "../light/plugs-connected-light.icon";
import { PlugsConnectedRegularIcon } from "../regular/plugs-connected-regular.icon";
import { PlugsConnectedThinIcon } from "../thin/plugs-connected-thin.icon";

export const PlugsConnectedIcon = memo(function PlugsConnected(
  props: IconWrapperProps,
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
