import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceTabletSpeakerBold } from "../bold";
import { DeviceTabletSpeakerDuotone } from "../duotone";
import { DeviceTabletSpeakerFill } from "../fill";
import { DeviceTabletSpeakerLight } from "../light";
import { DeviceTabletSpeakerRegular } from "../regular";
import { DeviceTabletSpeakerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceTabletSpeaker = memo(function DeviceTabletSpeaker(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceTabletSpeakerBold,
      duotone: DeviceTabletSpeakerDuotone,
      fill: DeviceTabletSpeakerFill,
      light: DeviceTabletSpeakerLight,
      regular: DeviceTabletSpeakerRegular,
      thin: DeviceTabletSpeakerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
