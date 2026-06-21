import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlayCircleBoldIcon } from "../bold";
import { PlayCircleDuotoneIcon } from "../duotone";
import { PlayCircleFillIcon } from "../fill";
import { PlayCircleLightIcon } from "../light";
import { PlayCircleRegularIcon } from "../regular";
import { PlayCircleThinIcon } from "../thin";

export const PlayCircleIcon = memo(function PlayCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlayCircleBoldIcon,
      duotone: PlayCircleDuotoneIcon,
      fill: PlayCircleFillIcon,
      light: PlayCircleLightIcon,
      regular: PlayCircleRegularIcon,
      thin: PlayCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
