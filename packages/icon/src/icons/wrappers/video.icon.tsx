import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VideoBoldIcon } from "../bold";
import { VideoDuotoneIcon } from "../duotone";
import { VideoFillIcon } from "../fill";
import { VideoLightIcon } from "../light";
import { VideoRegularIcon } from "../regular";
import { VideoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VideoIcon = memo(function Video(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VideoBoldIcon,
      duotone: VideoDuotoneIcon,
      fill: VideoFillIcon,
      light: VideoLightIcon,
      regular: VideoRegularIcon,
      thin: VideoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
