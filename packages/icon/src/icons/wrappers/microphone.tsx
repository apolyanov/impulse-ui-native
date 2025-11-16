import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrophoneBold } from "../bold";
import { MicrophoneDuotone } from "../duotone";
import { MicrophoneFill } from "../fill";
import { MicrophoneLight } from "../light";
import { MicrophoneRegular } from "../regular";
import { MicrophoneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Microphone = memo(function Microphone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrophoneBold,
      duotone: MicrophoneDuotone,
      fill: MicrophoneFill,
      light: MicrophoneLight,
      regular: MicrophoneRegular,
      thin: MicrophoneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
