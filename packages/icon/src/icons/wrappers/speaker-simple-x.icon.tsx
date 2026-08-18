import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerSimpleXBoldIcon } from "../bold/speaker-simple-x-bold.icon";
import { SpeakerSimpleXDuotoneIcon } from "../duotone/speaker-simple-x-duotone.icon";
import { SpeakerSimpleXFillIcon } from "../fill/speaker-simple-x-fill.icon";
import { SpeakerSimpleXLightIcon } from "../light/speaker-simple-x-light.icon";
import { SpeakerSimpleXRegularIcon } from "../regular/speaker-simple-x-regular.icon";
import { SpeakerSimpleXThinIcon } from "../thin/speaker-simple-x-thin.icon";

export const SpeakerSimpleXIcon = memo(function SpeakerSimpleX(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSimpleXBoldIcon,
      duotone: SpeakerSimpleXDuotoneIcon,
      fill: SpeakerSimpleXFillIcon,
      light: SpeakerSimpleXLightIcon,
      regular: SpeakerSimpleXRegularIcon,
      thin: SpeakerSimpleXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
