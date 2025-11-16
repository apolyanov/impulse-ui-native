import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerHifiBold } from "../bold";
import { SpeakerHifiDuotone } from "../duotone";
import { SpeakerHifiFill } from "../fill";
import { SpeakerHifiLight } from "../light";
import { SpeakerHifiRegular } from "../regular";
import { SpeakerHifiThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerHifi = memo(function SpeakerHifi(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerHifiBold,
      duotone: SpeakerHifiDuotone,
      fill: SpeakerHifiFill,
      light: SpeakerHifiLight,
      regular: SpeakerHifiRegular,
      thin: SpeakerHifiThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
