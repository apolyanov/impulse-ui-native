import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrophoneBoldIcon } from "../bold";
import { MicrophoneDuotoneIcon } from "../duotone";
import { MicrophoneFillIcon } from "../fill";
import { MicrophoneLightIcon } from "../light";
import { MicrophoneRegularIcon } from "../regular";
import { MicrophoneThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrophoneIcon = memo(function Microphone(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrophoneBoldIcon,
      duotone: MicrophoneDuotoneIcon,
      fill: MicrophoneFillIcon,
      light: MicrophoneLightIcon,
      regular: MicrophoneRegularIcon,
      thin: MicrophoneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
