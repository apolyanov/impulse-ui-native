import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerLowBold } from "../bold";
import { SpeakerLowDuotone } from "../duotone";
import { SpeakerLowFill } from "../fill";
import { SpeakerLowLight } from "../light";
import { SpeakerLowRegular } from "../regular";
import { SpeakerLowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerLow = memo(function SpeakerLow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerLowBold,
      duotone: SpeakerLowDuotone,
      fill: SpeakerLowFill,
      light: SpeakerLowLight,
      regular: SpeakerLowRegular,
      thin: SpeakerLowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
