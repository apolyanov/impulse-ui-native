import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlugBoldIcon } from "../bold/plug-bold.icon";
import { PlugDuotoneIcon } from "../duotone/plug-duotone.icon";
import { PlugFillIcon } from "../fill/plug-fill.icon";
import { PlugLightIcon } from "../light/plug-light.icon";
import { PlugRegularIcon } from "../regular/plug-regular.icon";
import { PlugThinIcon } from "../thin/plug-thin.icon";

export const PlugIcon = memo(function Plug(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlugBoldIcon,
      duotone: PlugDuotoneIcon,
      fill: PlugFillIcon,
      light: PlugLightIcon,
      regular: PlugRegularIcon,
      thin: PlugThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
