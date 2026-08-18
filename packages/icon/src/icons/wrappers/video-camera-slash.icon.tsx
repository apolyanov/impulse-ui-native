import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VideoCameraSlashBoldIcon } from "../bold/video-camera-slash-bold.icon";
import { VideoCameraSlashDuotoneIcon } from "../duotone/video-camera-slash-duotone.icon";
import { VideoCameraSlashFillIcon } from "../fill/video-camera-slash-fill.icon";
import { VideoCameraSlashLightIcon } from "../light/video-camera-slash-light.icon";
import { VideoCameraSlashRegularIcon } from "../regular/video-camera-slash-regular.icon";
import { VideoCameraSlashThinIcon } from "../thin/video-camera-slash-thin.icon";

export const VideoCameraSlashIcon = memo(function VideoCameraSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VideoCameraSlashBoldIcon,
      duotone: VideoCameraSlashDuotoneIcon,
      fill: VideoCameraSlashFillIcon,
      light: VideoCameraSlashLightIcon,
      regular: VideoCameraSlashRegularIcon,
      thin: VideoCameraSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
