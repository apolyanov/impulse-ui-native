import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VideoBold } from "../bold";
import { VideoDuotone } from "../duotone";
import { VideoFill } from "../fill";
import { VideoLight } from "../light";
import { VideoRegular } from "../regular";
import { VideoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Video = memo(function Video(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VideoBold,
      duotone: VideoDuotone,
      fill: VideoFill,
      light: VideoLight,
      regular: VideoRegular,
      thin: VideoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
