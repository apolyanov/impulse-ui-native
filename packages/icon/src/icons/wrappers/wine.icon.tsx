import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WineBoldIcon } from "../bold";
import { WineDuotoneIcon } from "../duotone";
import { WineFillIcon } from "../fill";
import { WineLightIcon } from "../light";
import { WineRegularIcon } from "../regular";
import { WineThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WineIcon = memo(function Wine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WineBoldIcon,
      duotone: WineDuotoneIcon,
      fill: WineFillIcon,
      light: WineLightIcon,
      regular: WineRegularIcon,
      thin: WineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
