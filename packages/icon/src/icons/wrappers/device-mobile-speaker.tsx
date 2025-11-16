import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceMobileSpeakerBold } from "../bold";
import { DeviceMobileSpeakerDuotone } from "../duotone";
import { DeviceMobileSpeakerFill } from "../fill";
import { DeviceMobileSpeakerLight } from "../light";
import { DeviceMobileSpeakerRegular } from "../regular";
import { DeviceMobileSpeakerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceMobileSpeaker = memo(function DeviceMobileSpeaker(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceMobileSpeakerBold,
      duotone: DeviceMobileSpeakerDuotone,
      fill: DeviceMobileSpeakerFill,
      light: DeviceMobileSpeakerLight,
      regular: DeviceMobileSpeakerRegular,
      thin: DeviceMobileSpeakerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
