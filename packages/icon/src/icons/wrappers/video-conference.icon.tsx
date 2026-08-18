import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VideoConferenceBoldIcon } from "../bold/video-conference-bold.icon";
import { VideoConferenceDuotoneIcon } from "../duotone/video-conference-duotone.icon";
import { VideoConferenceFillIcon } from "../fill/video-conference-fill.icon";
import { VideoConferenceLightIcon } from "../light/video-conference-light.icon";
import { VideoConferenceRegularIcon } from "../regular/video-conference-regular.icon";
import { VideoConferenceThinIcon } from "../thin/video-conference-thin.icon";

export const VideoConferenceIcon = memo(function VideoConference(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VideoConferenceBoldIcon,
      duotone: VideoConferenceDuotoneIcon,
      fill: VideoConferenceFillIcon,
      light: VideoConferenceLightIcon,
      regular: VideoConferenceRegularIcon,
      thin: VideoConferenceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
