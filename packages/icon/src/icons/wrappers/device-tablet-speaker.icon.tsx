import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DeviceTabletSpeakerBoldIcon } from "../bold/device-tablet-speaker-bold.icon";
import { DeviceTabletSpeakerDuotoneIcon } from "../duotone/device-tablet-speaker-duotone.icon";
import { DeviceTabletSpeakerFillIcon } from "../fill/device-tablet-speaker-fill.icon";
import { DeviceTabletSpeakerLightIcon } from "../light/device-tablet-speaker-light.icon";
import { DeviceTabletSpeakerRegularIcon } from "../regular/device-tablet-speaker-regular.icon";
import { DeviceTabletSpeakerThinIcon } from "../thin/device-tablet-speaker-thin.icon";

export const DeviceTabletSpeakerIcon = memo(function DeviceTabletSpeaker(
  props: IconWrapperProps,
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
