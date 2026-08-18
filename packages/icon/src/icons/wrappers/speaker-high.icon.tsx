import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerHighBoldIcon } from "../bold/speaker-high-bold.icon";
import { SpeakerHighDuotoneIcon } from "../duotone/speaker-high-duotone.icon";
import { SpeakerHighFillIcon } from "../fill/speaker-high-fill.icon";
import { SpeakerHighLightIcon } from "../light/speaker-high-light.icon";
import { SpeakerHighRegularIcon } from "../regular/speaker-high-regular.icon";
import { SpeakerHighThinIcon } from "../thin/speaker-high-thin.icon";

export const SpeakerHighIcon = memo(function SpeakerHigh(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerHighBoldIcon,
      duotone: SpeakerHighDuotoneIcon,
      fill: SpeakerHighFillIcon,
      light: SpeakerHighLightIcon,
      regular: SpeakerHighRegularIcon,
      thin: SpeakerHighThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
