import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrophoneSlashBoldIcon } from "../bold/microphone-slash-bold.icon";
import { MicrophoneSlashDuotoneIcon } from "../duotone/microphone-slash-duotone.icon";
import { MicrophoneSlashFillIcon } from "../fill/microphone-slash-fill.icon";
import { MicrophoneSlashLightIcon } from "../light/microphone-slash-light.icon";
import { MicrophoneSlashRegularIcon } from "../regular/microphone-slash-regular.icon";
import { MicrophoneSlashThinIcon } from "../thin/microphone-slash-thin.icon";

export const MicrophoneSlashIcon = memo(function MicrophoneSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrophoneSlashBoldIcon,
      duotone: MicrophoneSlashDuotoneIcon,
      fill: MicrophoneSlashFillIcon,
      light: MicrophoneSlashLightIcon,
      regular: MicrophoneSlashRegularIcon,
      thin: MicrophoneSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
