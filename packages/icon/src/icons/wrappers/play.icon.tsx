import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlayBoldIcon } from "../bold";
import { PlayDuotoneIcon } from "../duotone";
import { PlayFillIcon } from "../fill";
import { PlayLightIcon } from "../light";
import { PlayRegularIcon } from "../regular";
import { PlayThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
