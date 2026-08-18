import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VideoCameraBoldIcon } from "../bold/video-camera-bold.icon";
import { VideoCameraDuotoneIcon } from "../duotone/video-camera-duotone.icon";
import { VideoCameraFillIcon } from "../fill/video-camera-fill.icon";
import { VideoCameraLightIcon } from "../light/video-camera-light.icon";
import { VideoCameraRegularIcon } from "../regular/video-camera-regular.icon";
import { VideoCameraThinIcon } from "../thin/video-camera-thin.icon";

export const VideoCameraIcon = memo(function VideoCamera(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VideoCameraBoldIcon,
      duotone: VideoCameraDuotoneIcon,
      fill: VideoCameraFillIcon,
      light: VideoCameraLightIcon,
      regular: VideoCameraRegularIcon,
      thin: VideoCameraThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
