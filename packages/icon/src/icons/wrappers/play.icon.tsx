import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlayBoldIcon } from "../bold/play-bold.icon";
import { PlayDuotoneIcon } from "../duotone/play-duotone.icon";
import { PlayFillIcon } from "../fill/play-fill.icon";
import { PlayLightIcon } from "../light/play-light.icon";
import { PlayRegularIcon } from "../regular/play-regular.icon";
import { PlayThinIcon } from "../thin/play-thin.icon";

export const PlayIcon = memo(function Play(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlayBoldIcon,
      duotone: PlayDuotoneIcon,
      fill: PlayFillIcon,
      light: PlayLightIcon,
      regular: PlayRegularIcon,
      thin: PlayThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
