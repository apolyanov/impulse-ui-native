import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerHighBoldIcon } from "../bold";
import { SpeakerHighDuotoneIcon } from "../duotone";
import { SpeakerHighFillIcon } from "../fill";
import { SpeakerHighLightIcon } from "../light";
import { SpeakerHighRegularIcon } from "../regular";
import { SpeakerHighThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerHighIcon = memo(function SpeakerHigh(
  props: IconWrapperProps
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
