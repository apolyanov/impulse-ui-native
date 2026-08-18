import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VideoBoldIcon } from "../bold/video-bold.icon";
import { VideoDuotoneIcon } from "../duotone/video-duotone.icon";
import { VideoFillIcon } from "../fill/video-fill.icon";
import { VideoLightIcon } from "../light/video-light.icon";
import { VideoRegularIcon } from "../regular/video-regular.icon";
import { VideoThinIcon } from "../thin/video-thin.icon";

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
