import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WatchBoldIcon } from "../bold";
import { WatchDuotoneIcon } from "../duotone";
import { WatchFillIcon } from "../fill";
import { WatchLightIcon } from "../light";
import { WatchRegularIcon } from "../regular";
import { WatchThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WatchIcon = memo(function Watch(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WatchBoldIcon,
      duotone: WatchDuotoneIcon,
      fill: WatchFillIcon,
      light: WatchLightIcon,
      regular: WatchRegularIcon,
      thin: WatchThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
