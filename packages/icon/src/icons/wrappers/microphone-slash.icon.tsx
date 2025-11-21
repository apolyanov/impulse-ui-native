import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrophoneSlashBoldIcon } from "../bold";
import { MicrophoneSlashDuotoneIcon } from "../duotone";
import { MicrophoneSlashFillIcon } from "../fill";
import { MicrophoneSlashLightIcon } from "../light";
import { MicrophoneSlashRegularIcon } from "../regular";
import { MicrophoneSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrophoneSlashIcon = memo(function MicrophoneSlash(
  props: IconWrapperProps
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
