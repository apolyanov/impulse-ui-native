import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerSimpleHighBold } from "../bold";
import { SpeakerSimpleHighDuotone } from "../duotone";
import { SpeakerSimpleHighFill } from "../fill";
import { SpeakerSimpleHighLight } from "../light";
import { SpeakerSimpleHighRegular } from "../regular";
import { SpeakerSimpleHighThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerSimpleHigh = memo(function SpeakerSimpleHigh(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSimpleHighBold,
      duotone: SpeakerSimpleHighDuotone,
      fill: SpeakerSimpleHighFill,
      light: SpeakerSimpleHighLight,
      regular: SpeakerSimpleHighRegular,
      thin: SpeakerSimpleHighThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
