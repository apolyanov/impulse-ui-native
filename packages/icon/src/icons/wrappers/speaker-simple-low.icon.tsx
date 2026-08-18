import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerSimpleLowBoldIcon } from "../bold/speaker-simple-low-bold.icon";
import { SpeakerSimpleLowDuotoneIcon } from "../duotone/speaker-simple-low-duotone.icon";
import { SpeakerSimpleLowFillIcon } from "../fill/speaker-simple-low-fill.icon";
import { SpeakerSimpleLowLightIcon } from "../light/speaker-simple-low-light.icon";
import { SpeakerSimpleLowRegularIcon } from "../regular/speaker-simple-low-regular.icon";
import { SpeakerSimpleLowThinIcon } from "../thin/speaker-simple-low-thin.icon";

export const SpeakerSimpleLowIcon = memo(function SpeakerSimpleLow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSimpleLowBoldIcon,
      duotone: SpeakerSimpleLowDuotoneIcon,
      fill: SpeakerSimpleLowFillIcon,
      light: SpeakerSimpleLowLightIcon,
      regular: SpeakerSimpleLowRegularIcon,
      thin: SpeakerSimpleLowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
