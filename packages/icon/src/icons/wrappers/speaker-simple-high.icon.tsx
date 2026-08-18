import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerSimpleHighBoldIcon } from "../bold/speaker-simple-high-bold.icon";
import { SpeakerSimpleHighDuotoneIcon } from "../duotone/speaker-simple-high-duotone.icon";
import { SpeakerSimpleHighFillIcon } from "../fill/speaker-simple-high-fill.icon";
import { SpeakerSimpleHighLightIcon } from "../light/speaker-simple-high-light.icon";
import { SpeakerSimpleHighRegularIcon } from "../regular/speaker-simple-high-regular.icon";
import { SpeakerSimpleHighThinIcon } from "../thin/speaker-simple-high-thin.icon";

export const SpeakerSimpleHighIcon = memo(function SpeakerSimpleHigh(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSimpleHighBoldIcon,
      duotone: SpeakerSimpleHighDuotoneIcon,
      fill: SpeakerSimpleHighFillIcon,
      light: SpeakerSimpleHighLightIcon,
      regular: SpeakerSimpleHighRegularIcon,
      thin: SpeakerSimpleHighThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
