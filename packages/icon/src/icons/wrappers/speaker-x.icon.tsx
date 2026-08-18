import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerXBoldIcon } from "../bold/speaker-x-bold.icon";
import { SpeakerXDuotoneIcon } from "../duotone/speaker-x-duotone.icon";
import { SpeakerXFillIcon } from "../fill/speaker-x-fill.icon";
import { SpeakerXLightIcon } from "../light/speaker-x-light.icon";
import { SpeakerXRegularIcon } from "../regular/speaker-x-regular.icon";
import { SpeakerXThinIcon } from "../thin/speaker-x-thin.icon";

export const SpeakerXIcon = memo(function SpeakerX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerXBoldIcon,
      duotone: SpeakerXDuotoneIcon,
      fill: SpeakerXFillIcon,
      light: SpeakerXLightIcon,
      regular: SpeakerXRegularIcon,
      thin: SpeakerXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
