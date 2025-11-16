import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerNoneBold } from "../bold";
import { SpeakerNoneDuotone } from "../duotone";
import { SpeakerNoneFill } from "../fill";
import { SpeakerNoneLight } from "../light";
import { SpeakerNoneRegular } from "../regular";
import { SpeakerNoneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerNone = memo(function SpeakerNone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerNoneBold,
      duotone: SpeakerNoneDuotone,
      fill: SpeakerNoneFill,
      light: SpeakerNoneLight,
      regular: SpeakerNoneRegular,
      thin: SpeakerNoneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
