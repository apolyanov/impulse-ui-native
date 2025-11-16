import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrophoneSlashBold } from "../bold";
import { MicrophoneSlashDuotone } from "../duotone";
import { MicrophoneSlashFill } from "../fill";
import { MicrophoneSlashLight } from "../light";
import { MicrophoneSlashRegular } from "../regular";
import { MicrophoneSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrophoneSlash = memo(function MicrophoneSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrophoneSlashBold,
      duotone: MicrophoneSlashDuotone,
      fill: MicrophoneSlashFill,
      light: MicrophoneSlashLight,
      regular: MicrophoneSlashRegular,
      thin: MicrophoneSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
