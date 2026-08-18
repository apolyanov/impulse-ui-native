import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrophoneStageBoldIcon } from "../bold/microphone-stage-bold.icon";
import { MicrophoneStageDuotoneIcon } from "../duotone/microphone-stage-duotone.icon";
import { MicrophoneStageFillIcon } from "../fill/microphone-stage-fill.icon";
import { MicrophoneStageLightIcon } from "../light/microphone-stage-light.icon";
import { MicrophoneStageRegularIcon } from "../regular/microphone-stage-regular.icon";
import { MicrophoneStageThinIcon } from "../thin/microphone-stage-thin.icon";

export const MicrophoneStageIcon = memo(function MicrophoneStage(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrophoneStageBoldIcon,
      duotone: MicrophoneStageDuotoneIcon,
      fill: MicrophoneStageFillIcon,
      light: MicrophoneStageLightIcon,
      regular: MicrophoneStageRegularIcon,
      thin: MicrophoneStageThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
