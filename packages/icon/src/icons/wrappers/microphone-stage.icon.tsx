import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrophoneStageBoldIcon } from "../bold";
import { MicrophoneStageDuotoneIcon } from "../duotone";
import { MicrophoneStageFillIcon } from "../fill";
import { MicrophoneStageLightIcon } from "../light";
import { MicrophoneStageRegularIcon } from "../regular";
import { MicrophoneStageThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrophoneStageIcon = memo(function MicrophoneStage(
  props: IconWrapperProps
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
