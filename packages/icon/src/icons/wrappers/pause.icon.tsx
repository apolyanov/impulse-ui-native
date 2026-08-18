import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PauseBoldIcon } from "../bold/pause-bold.icon";
import { PauseDuotoneIcon } from "../duotone/pause-duotone.icon";
import { PauseFillIcon } from "../fill/pause-fill.icon";
import { PauseLightIcon } from "../light/pause-light.icon";
import { PauseRegularIcon } from "../regular/pause-regular.icon";
import { PauseThinIcon } from "../thin/pause-thin.icon";

export const PauseIcon = memo(function Pause(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PauseBoldIcon,
      duotone: PauseDuotoneIcon,
      fill: PauseFillIcon,
      light: PauseLightIcon,
      regular: PauseRegularIcon,
      thin: PauseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
