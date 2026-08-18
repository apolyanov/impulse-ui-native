import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerLowBoldIcon } from "../bold/speaker-low-bold.icon";
import { SpeakerLowDuotoneIcon } from "../duotone/speaker-low-duotone.icon";
import { SpeakerLowFillIcon } from "../fill/speaker-low-fill.icon";
import { SpeakerLowLightIcon } from "../light/speaker-low-light.icon";
import { SpeakerLowRegularIcon } from "../regular/speaker-low-regular.icon";
import { SpeakerLowThinIcon } from "../thin/speaker-low-thin.icon";

export const SpeakerLowIcon = memo(function SpeakerLow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerLowBoldIcon,
      duotone: SpeakerLowDuotoneIcon,
      fill: SpeakerLowFillIcon,
      light: SpeakerLowLightIcon,
      regular: SpeakerLowRegularIcon,
      thin: SpeakerLowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
