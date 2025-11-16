import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlugsBold } from "../bold";
import { PlugsDuotone } from "../duotone";
import { PlugsFill } from "../fill";
import { PlugsLight } from "../light";
import { PlugsRegular } from "../regular";
import { PlugsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Plugs = memo(function Plugs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlugsBold,
      duotone: PlugsDuotone,
      fill: PlugsFill,
      light: PlugsLight,
      regular: PlugsRegular,
      thin: PlugsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
