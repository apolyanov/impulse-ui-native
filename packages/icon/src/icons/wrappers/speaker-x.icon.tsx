import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerXBoldIcon } from "../bold";
import { SpeakerXDuotoneIcon } from "../duotone";
import { SpeakerXFillIcon } from "../fill";
import { SpeakerXLightIcon } from "../light";
import { SpeakerXRegularIcon } from "../regular";
import { SpeakerXThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
