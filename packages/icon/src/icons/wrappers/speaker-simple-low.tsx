import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerSimpleLowBold } from "../bold";
import { SpeakerSimpleLowDuotone } from "../duotone";
import { SpeakerSimpleLowFill } from "../fill";
import { SpeakerSimpleLowLight } from "../light";
import { SpeakerSimpleLowRegular } from "../regular";
import { SpeakerSimpleLowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerSimpleLow = memo(function SpeakerSimpleLow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSimpleLowBold,
      duotone: SpeakerSimpleLowDuotone,
      fill: SpeakerSimpleLowFill,
      light: SpeakerSimpleLowLight,
      regular: SpeakerSimpleLowRegular,
      thin: SpeakerSimpleLowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
