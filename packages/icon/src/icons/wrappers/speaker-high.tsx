import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerHighBold } from "../bold";
import { SpeakerHighDuotone } from "../duotone";
import { SpeakerHighFill } from "../fill";
import { SpeakerHighLight } from "../light";
import { SpeakerHighRegular } from "../regular";
import { SpeakerHighThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerHigh = memo(function SpeakerHigh(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerHighBold,
      duotone: SpeakerHighDuotone,
      fill: SpeakerHighFill,
      light: SpeakerHighLight,
      regular: SpeakerHighRegular,
      thin: SpeakerHighThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
