import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrophoneBoldIcon } from "../bold/microphone-bold.icon";
import { MicrophoneDuotoneIcon } from "../duotone/microphone-duotone.icon";
import { MicrophoneFillIcon } from "../fill/microphone-fill.icon";
import { MicrophoneLightIcon } from "../light/microphone-light.icon";
import { MicrophoneRegularIcon } from "../regular/microphone-regular.icon";
import { MicrophoneThinIcon } from "../thin/microphone-thin.icon";

export const MicrophoneIcon = memo(function Microphone(
  props: IconWrapperProps,
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
