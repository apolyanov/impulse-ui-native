import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlugsBoldIcon } from "../bold/plugs-bold.icon";
import { PlugsDuotoneIcon } from "../duotone/plugs-duotone.icon";
import { PlugsFillIcon } from "../fill/plugs-fill.icon";
import { PlugsLightIcon } from "../light/plugs-light.icon";
import { PlugsRegularIcon } from "../regular/plugs-regular.icon";
import { PlugsThinIcon } from "../thin/plugs-thin.icon";

export const PlugsIcon = memo(function Plugs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlugsBoldIcon,
      duotone: PlugsDuotoneIcon,
      fill: PlugsFillIcon,
      light: PlugsLightIcon,
      regular: PlugsRegularIcon,
      thin: PlugsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
