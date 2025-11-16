import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WineBold } from "../bold";
import { WineDuotone } from "../duotone";
import { WineFill } from "../fill";
import { WineLight } from "../light";
import { WineRegular } from "../regular";
import { WineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Wine = memo(function Wine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WineBold,
      duotone: WineDuotone,
      fill: WineFill,
      light: WineLight,
      regular: WineRegular,
      thin: WineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
