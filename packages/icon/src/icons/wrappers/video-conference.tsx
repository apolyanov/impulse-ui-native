import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VideoConferenceBold } from "../bold";
import { VideoConferenceDuotone } from "../duotone";
import { VideoConferenceFill } from "../fill";
import { VideoConferenceLight } from "../light";
import { VideoConferenceRegular } from "../regular";
import { VideoConferenceThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VideoConference = memo(function VideoConference(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VideoConferenceBold,
      duotone: VideoConferenceDuotone,
      fill: VideoConferenceFill,
      light: VideoConferenceLight,
      regular: VideoConferenceRegular,
      thin: VideoConferenceThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
