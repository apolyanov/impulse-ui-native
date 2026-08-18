import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WineBoldIcon } from "../bold/wine-bold.icon";
import { WineDuotoneIcon } from "../duotone/wine-duotone.icon";
import { WineFillIcon } from "../fill/wine-fill.icon";
import { WineLightIcon } from "../light/wine-light.icon";
import { WineRegularIcon } from "../regular/wine-regular.icon";
import { WineThinIcon } from "../thin/wine-thin.icon";

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
