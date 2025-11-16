import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlugsConnectedBold } from "../bold";
import { PlugsConnectedDuotone } from "../duotone";
import { PlugsConnectedFill } from "../fill";
import { PlugsConnectedLight } from "../light";
import { PlugsConnectedRegular } from "../regular";
import { PlugsConnectedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlugsConnected = memo(function PlugsConnected(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlugsConnectedBold,
      duotone: PlugsConnectedDuotone,
      fill: PlugsConnectedFill,
      light: PlugsConnectedLight,
      regular: PlugsConnectedRegular,
      thin: PlugsConnectedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
