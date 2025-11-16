import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrophoneStageBold } from "../bold";
import { MicrophoneStageDuotone } from "../duotone";
import { MicrophoneStageFill } from "../fill";
import { MicrophoneStageLight } from "../light";
import { MicrophoneStageRegular } from "../regular";
import { MicrophoneStageThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrophoneStage = memo(function MicrophoneStage(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrophoneStageBold,
      duotone: MicrophoneStageDuotone,
      fill: MicrophoneStageFill,
      light: MicrophoneStageLight,
      regular: MicrophoneStageRegular,
      thin: MicrophoneStageThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
