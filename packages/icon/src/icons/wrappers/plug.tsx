import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlugBold } from "../bold";
import { PlugDuotone } from "../duotone";
import { PlugFill } from "../fill";
import { PlugLight } from "../light";
import { PlugRegular } from "../regular";
import { PlugThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Plug = memo(function Plug(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlugBold,
      duotone: PlugDuotone,
      fill: PlugFill,
      light: PlugLight,
      regular: PlugRegular,
      thin: PlugThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
