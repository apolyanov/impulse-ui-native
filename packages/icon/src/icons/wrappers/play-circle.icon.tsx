import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlayCircleBoldIcon } from "../bold/play-circle-bold.icon";
import { PlayCircleDuotoneIcon } from "../duotone/play-circle-duotone.icon";
import { PlayCircleFillIcon } from "../fill/play-circle-fill.icon";
import { PlayCircleLightIcon } from "../light/play-circle-light.icon";
import { PlayCircleRegularIcon } from "../regular/play-circle-regular.icon";
import { PlayCircleThinIcon } from "../thin/play-circle-thin.icon";

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
