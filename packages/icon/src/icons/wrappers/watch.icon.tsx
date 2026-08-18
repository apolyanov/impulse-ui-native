import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WatchBoldIcon } from "../bold/watch-bold.icon";
import { WatchDuotoneIcon } from "../duotone/watch-duotone.icon";
import { WatchFillIcon } from "../fill/watch-fill.icon";
import { WatchLightIcon } from "../light/watch-light.icon";
import { WatchRegularIcon } from "../regular/watch-regular.icon";
import { WatchThinIcon } from "../thin/watch-thin.icon";

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
