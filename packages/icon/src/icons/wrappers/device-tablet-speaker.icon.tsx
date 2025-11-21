import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceTabletSpeakerBoldIcon } from "../bold";
import { DeviceTabletSpeakerDuotoneIcon } from "../duotone";
import { DeviceTabletSpeakerFillIcon } from "../fill";
import { DeviceTabletSpeakerLightIcon } from "../light";
import { DeviceTabletSpeakerRegularIcon } from "../regular";
import { DeviceTabletSpeakerThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceTabletSpeakerIcon = memo(function DeviceTabletSpeaker(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceTabletSpeakerBoldIcon,
      duotone: DeviceTabletSpeakerDuotoneIcon,
      fill: DeviceTabletSpeakerFillIcon,
      light: DeviceTabletSpeakerLightIcon,
      regular: DeviceTabletSpeakerRegularIcon,
      thin: DeviceTabletSpeakerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
