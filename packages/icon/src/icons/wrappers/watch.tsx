import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WatchBold } from "../bold";
import { WatchDuotone } from "../duotone";
import { WatchFill } from "../fill";
import { WatchLight } from "../light";
import { WatchRegular } from "../regular";
import { WatchThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Watch = memo(function Watch(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WatchBold,
      duotone: WatchDuotone,
      fill: WatchFill,
      light: WatchLight,
      regular: WatchRegular,
      thin: WatchThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
