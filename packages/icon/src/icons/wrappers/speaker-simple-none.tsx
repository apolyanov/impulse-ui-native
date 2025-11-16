import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerSimpleNoneBold } from "../bold";
import { SpeakerSimpleNoneDuotone } from "../duotone";
import { SpeakerSimpleNoneFill } from "../fill";
import { SpeakerSimpleNoneLight } from "../light";
import { SpeakerSimpleNoneRegular } from "../regular";
import { SpeakerSimpleNoneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerSimpleNone = memo(function SpeakerSimpleNone(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSimpleNoneBold,
      duotone: SpeakerSimpleNoneDuotone,
      fill: SpeakerSimpleNoneFill,
      light: SpeakerSimpleNoneLight,
      regular: SpeakerSimpleNoneRegular,
      thin: SpeakerSimpleNoneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
