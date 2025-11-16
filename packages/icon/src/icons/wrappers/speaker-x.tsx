import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerXBold } from "../bold";
import { SpeakerXDuotone } from "../duotone";
import { SpeakerXFill } from "../fill";
import { SpeakerXLight } from "../light";
import { SpeakerXRegular } from "../regular";
import { SpeakerXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerX = memo(function SpeakerX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerXBold,
      duotone: SpeakerXDuotone,
      fill: SpeakerXFill,
      light: SpeakerXLight,
      regular: SpeakerXRegular,
      thin: SpeakerXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
