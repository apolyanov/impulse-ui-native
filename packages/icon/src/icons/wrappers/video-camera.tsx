import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VideoCameraBold } from "../bold";
import { VideoCameraDuotone } from "../duotone";
import { VideoCameraFill } from "../fill";
import { VideoCameraLight } from "../light";
import { VideoCameraRegular } from "../regular";
import { VideoCameraThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VideoCamera = memo(function VideoCamera(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VideoCameraBold,
      duotone: VideoCameraDuotone,
      fill: VideoCameraFill,
      light: VideoCameraLight,
      regular: VideoCameraRegular,
      thin: VideoCameraThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
