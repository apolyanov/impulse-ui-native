import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerHifiBoldIcon } from "../bold/speaker-hifi-bold.icon";
import { SpeakerHifiDuotoneIcon } from "../duotone/speaker-hifi-duotone.icon";
import { SpeakerHifiFillIcon } from "../fill/speaker-hifi-fill.icon";
import { SpeakerHifiLightIcon } from "../light/speaker-hifi-light.icon";
import { SpeakerHifiRegularIcon } from "../regular/speaker-hifi-regular.icon";
import { SpeakerHifiThinIcon } from "../thin/speaker-hifi-thin.icon";

export const SpeakerHifiIcon = memo(function SpeakerHifi(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerHifiBoldIcon,
      duotone: SpeakerHifiDuotoneIcon,
      fill: SpeakerHifiFillIcon,
      light: SpeakerHifiLightIcon,
      regular: SpeakerHifiRegularIcon,
      thin: SpeakerHifiThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
