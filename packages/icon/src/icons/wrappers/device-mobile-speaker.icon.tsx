import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DeviceMobileSpeakerBoldIcon } from "../bold/device-mobile-speaker-bold.icon";
import { DeviceMobileSpeakerDuotoneIcon } from "../duotone/device-mobile-speaker-duotone.icon";
import { DeviceMobileSpeakerFillIcon } from "../fill/device-mobile-speaker-fill.icon";
import { DeviceMobileSpeakerLightIcon } from "../light/device-mobile-speaker-light.icon";
import { DeviceMobileSpeakerRegularIcon } from "../regular/device-mobile-speaker-regular.icon";
import { DeviceMobileSpeakerThinIcon } from "../thin/device-mobile-speaker-thin.icon";

export const DeviceMobileSpeakerIcon = memo(function DeviceMobileSpeaker(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceMobileSpeakerBoldIcon,
      duotone: DeviceMobileSpeakerDuotoneIcon,
      fill: DeviceMobileSpeakerFillIcon,
      light: DeviceMobileSpeakerLightIcon,
      regular: DeviceMobileSpeakerRegularIcon,
      thin: DeviceMobileSpeakerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
